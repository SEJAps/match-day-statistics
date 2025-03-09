// src/components/PrivateRoute.tsx
import { FC, useEffect } from 'react';
import { useAuth } from '../store/context/auth';
import { Navigate, Outlet, useLocation, useNavigate } from 'react-router';
import {auth, onIdTokenChanged} from "../apis/firebase/firebase"
interface PrivateRouteProps {
    children?: React.ReactNode;
    requireEmailVerification?: boolean;
}

const PrivateRoute: FC<PrivateRouteProps> = ({  requireEmailVerification = false }) => {
    const { usuario, cargando, emailVerificado } = useAuth();
    const location = useLocation();
    const goto = useNavigate();

    useEffect(() => {
        const unsubscribe = onIdTokenChanged(auth, (user) => {
          if (!user) {
            // El usuario no está autenticado, redirigimos al login
            goto('/');
          }
          if (user?.isAnonymous) {
            // El usuario no está autenticado, redirigimos al login
            goto('/');
          }
        });
        return () => unsubscribe();
      },[goto])


    if (cargando) {
        return <div>Cargando...</div>;
    }

    if (!usuario) {
        return <Navigate to="/cuenta" state={{ from: location }} replace />;
    }

    if (requireEmailVerification && emailVerificado === false) {
        return (
            <div>
                <h1>Email no verificado</h1>
                <p>Para acceder a esta sección, por favor verifica tu email.</p>
            </div>
        );
    }

    return <Outlet />; // <--- ¡Este Outlet es crucial y sigue siendo necesario!
};

export default PrivateRoute;