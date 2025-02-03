import { FC } from "react";
import { useAppDispatch } from "../../store/store";
import { removeUserLocalStorage } from "../../utils";
import { logout } from "../../store/slices/userSlice";
import { SVGP } from "../../types";

export const Logout: FC<SVGP> = ({ props }) => {
  const dispatch = useAppDispatch();
  const handlerLogout = () => {
    dispatch(logout())
    removeUserLocalStorage()
  }
  return (
    <svg
      onClick={handlerLogout}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 14 14"
      width="2em"
      height="2em"
      strokeWidth={.3}
      stroke="black"
      {...props}
    >
      <path
        fill="red"
        fillRule="evenodd"
        d="M0 1.5A1.5 1.5 0 0 1 1.5 0h7A1.5 1.5 0 0 1 10 1.5v1.939a2 2 0 0 0-.734 1.311H5.75a2.25 2.25 0 1 0 0 4.5h3.516A2 2 0 0 0 10 10.561V12.5A1.5 1.5 0 0 1 8.5 14h-7A1.5 1.5 0 0 1 0 12.5zm10.963 2.807A.75.75 0 0 0 10.5 5v1H5.75a1 1 0 0 0 0 2h4.75v1a.75.75 0 0 0 1.28.53l2-2a.75.75 0 0 0 0-1.06l-2-2a.75.75 0 0 0-.817-.163"
        clipRule="evenodd"
      ></path>
    </svg>
  )
}
