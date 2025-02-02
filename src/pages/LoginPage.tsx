import { FC, useEffect } from "react";
import { Login } from "../components/login/Login";
import { useNavigate } from "react-router";
import { RootState, useAppSelector } from "../store/store";

export const LoginPage: FC = () => {
  const navigation = useNavigate()
  const { authentificate } = useAppSelector((state: RootState) => state.user)
  useEffect(() => {
    if (authentificate) navigation("/")
  }, [authentificate, navigation])
  return (
    <Login />
  )
}