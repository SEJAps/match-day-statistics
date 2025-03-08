 // Función de utilidad para mapear códigos de error de Firebase a mensajes amigables
 const getFirebaseErrorMessage = (errorCode: string): string => {
    switch (errorCode) {
      case 'auth/email-already-in-use':
        return 'Este correo electrónico ya está registrado.';
      case 'auth/invalid-email':
        return 'Correo electrónico no válido.';
      case 'auth/weak-password':
        return 'La contraseña debe tener al menos 6 caracteres.';
      // Añade más casos según los errores que quieras manejar
      default:
        return 'Error al registrar usuario. Inténtalo de nuevo más tarde.';
    }
  };

  export {
    getFirebaseErrorMessage
  }