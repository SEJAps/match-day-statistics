import { FormEvent, useState } from "react";
import { FormDataSignUpWithEmailAndPass } from "../../../types";
import { auth, createUserWithEmailAndPassword, db, doc, getFirebaseErrorMessage, sendEmailVerification, setDoc } from '../../../apis/firebase/firebase';


const useSignup = () => {
    const [formData, setFormData] = useState<FormDataSignUpWithEmailAndPass>({
        email: '',
        password: '', // Aunque es opcional en la interfaz, lo necesitamos en el estado
        nombre: '',
        club: '',
        pais: '',
        codigoPostal: '',
        categoria: ''
      });
      const [error, setError] = useState<string | null>(null);
      const [successMessage, setSuccessMessage] = useState<string | null>(null);
    
      const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setError(null); // Limpia errores previos
        setSuccessMessage(null); // Limpia mensajes de éxito previos
    
        const { email, password, nombre, club, pais, codigoPostal, categoria } = formData;
    
        if (!password) {
          setError("La contraseña es obligatoria.");
          return;
        }
    
        try {
          // 1. Crear usuario con email y contraseña en Firebase Auth
          const userCredential = await createUserWithEmailAndPassword(auth, email, password);
          const user = userCredential.user;
    
          // 2. Guardar datos adicionales del usuario en Firestore
          const userDocRef = doc(db, 'usuarios', user.uid); // 'usuarios' será tu colección
          await setDoc(userDocRef, {
            uid: user.uid,
            email: email,
            nombre: nombre,
            club: club,
            pais: pais,
            codigoPostal: codigoPostal,
            categoria: categoria
            // Puedes añadir más campos si necesitas
          });
          sendEmailVerification(user); // Envia email de verificación
          setSuccessMessage("Usuario registrado con éxito!");
          // Limpia el formulario si el registro es exitoso (opcional)
          setFormData({
            email: '',
            password: '',
            nombre: '',
            club: '',
            pais: '',
            codigoPostal: '',
            categoria: ''
          });
    
    
        } catch (firebaseError: any) {
          console.error("Error al registrar usuario:", firebaseError);
          setError(getFirebaseErrorMessage(firebaseError.code)); // Función para manejar errores Firebase
        }
      };
    
    return {handleChange, handleSubmit, formData, error, successMessage}
}

export  {
    useSignup
}