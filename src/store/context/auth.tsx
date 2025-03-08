// src/context/AuthContext.tsx
import { createContext, useContext, useState, useEffect, ReactNode, FC } from 'react';
import { onAuthStateChanged, User } from 'firebase/auth';
import { auth } from '../../apis/firebase/firebase';

// Define la interfaz para los valores que proveerá el Contexto
interface AuthContextValue {
  usuario: User | null; // Usuario autenticado (o null si no hay usuario)
  cargando: boolean;   // Indica si se está cargando el estado de autenticación inicial
  emailVerificado: boolean | null; // Indica si el email del usuario está verificado
}

// Crea el Contexto de React
const AuthContext = createContext<AuthContextValue | undefined>(undefined);

// Hook personalizado para usar el Contexto de Autenticación fácilmente
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth debe ser usado dentro de un AuthProvider");
  }
  return context;
};

// Define el Provider del Contexto de Autenticación
interface AuthProviderProps {
  children: ReactNode; // Propiedad para envolver componentes hijos
}

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [usuario, setUsuario] = useState<User | null>(null);
  const [cargando, setCargando] = useState<boolean>(true); // Inicialmente cargando
  const [emailVerificado, setEmailVerificado] = useState<boolean | null>(null);

  useEffect(() => {
    // Escucha los cambios en el estado de autenticación de Firebase
    const unsubscribe = onAuthStateChanged(auth, (usuarioFirebase) => {
      if (usuarioFirebase) {
        setUsuario(usuarioFirebase);
        setEmailVerificado(usuarioFirebase.emailVerified); // Obtiene el estado de verificación del email
      } else {
        setUsuario(null);
        setEmailVerificado(false); // Si no hay usuario, el email no está verificado (o null si prefieres)
      }
      setCargando(false); // Termina la carga inicial, ya tenemos el estado de autenticación
    });

    // Función de limpieza para desuscribirse del listener cuando el componente se desmonta
    return () => unsubscribe();
  }, []); // El array vacío asegura que el efecto solo se ejecuta una vez al montar el componente


  const value: AuthContextValue = {
    usuario,
    cargando,
    emailVerificado,
  };

  return (
    <AuthContext.Provider value={value}>
      {!cargando && children} {/* Renderiza los hijos solo cuando 'cargando' sea false */}
    </AuthContext.Provider>
  );
};