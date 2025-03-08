// src/components/Cabecera.tsx
import { FC } from 'react';
import { signOut } from 'firebase/auth';
import { useAuth } from '../../store/context/auth'; // Importa el hook useAuth
import { auth } from '../../apis/firebase/firebase';


const User: FC = () => {
  const { usuario, cargando, emailVerificado } = useAuth(); // Usa el hook para acceder al contexto

  const handleCerrarSesion = async () => {
    try {
      await signOut(auth);
      // Opcional: Redirigir al usuario a la página de inicio de sesión
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
      // Manejar el error, mostrar mensaje al usuario, etc.
    }
  };

  if (cargando) {
    return <div>Cargando estado de autenticación...</div>; // Muestra mensaje mientras carga
  }

  return (
    <article style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'fixed', top: '0', right: '0', padding: '1rem' }}>
        {usuario ? ( // Si hay usuario autenticado
          <>
            <span>Bienvenido, {usuario.displayName || usuario.email}</span> {/* Muestra nombre o email */}
            {emailVerificado === false && ( // Comprueba si emailVerificado es explícitamente false
              <p style={{ color: 'orange' }}>¡Email no verificado! Por favor, verifica tu email.</p>
            )}
            <button type='button' onClick={handleCerrarSesion}>Cerrar Sesión</button>
          </>
        ) : ( // Si no hay usuario autenticado
          <p>No has iniciado sesión</p>
        )}
     
    </article>
  );
};

export default User;