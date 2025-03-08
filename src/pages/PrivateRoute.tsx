// src/components/PrivateRoute.tsx
import { FC } from 'react';
import { useAuth } from '../store/context/auth';
import { Navigate, Outlet, useLocation } from 'react-router';

interface PrivateRouteProps {
    children?: React.ReactNode;
    requireEmailVerification?: boolean;
}

const PrivateRoute: FC<PrivateRouteProps> = ({  requireEmailVerification = false }) => {
    const { usuario, cargando, emailVerificado } = useAuth();
    const location = useLocation();

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