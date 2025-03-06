import { FC, ReactNode } from "react";
import { Navigate, Outlet } from "react-router";
import { RootState, useAppSelector } from "../store/store";

interface IProtectedRouter {
  children?: ReactNode;
}

const ProtectedRoute: FC<IProtectedRouter> = () => {
  const { authentificate } = useAppSelector((state: RootState) => state.user);

  if (!authentificate) {
    return <Navigate to={"/login"} replace />;
  }
  return <Outlet />;
};

export default ProtectedRoute;
