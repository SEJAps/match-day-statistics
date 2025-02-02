import { FC, ReactNode } from 'react';
import { Navigate, Outlet } from 'react-router';
import { RootState, useAppSelector } from '../store/store';

interface IProtectedRouter {

  children: ReactNode
}

const ProtectedRoute: FC<IProtectedRouter> = ({ children }) => {

  const { authentificate } = useAppSelector((state: RootState) => state.user)

  if (!authentificate) {
    return <Navigate to={'/login'} replace />;
  }
  return children ? children : <Outlet />;
};

export default ProtectedRoute;