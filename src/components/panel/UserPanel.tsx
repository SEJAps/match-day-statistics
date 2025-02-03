import { FC } from "react";
import { logout } from "../../store/slices/userSlice";
import { RootState, useAppDispatch, useAppSelector } from "../../store/store";
import { removeStatsByMatchActive, removeUserLocalStorage } from "../../utils";
import userPanelCss from './user_panel.module.css'
import { Container } from "../container/Container";
import { Sticky } from "../Sticky";

export const UserPanel: FC = () => {
  const dispatch = useAppDispatch();
  const { authentificate, user } = useAppSelector((state: RootState) => state.user)
  const { existStats } = useAppSelector((state: RootState) => state.stats)
  const handlerLogout = () => {
    dispatch(logout())
    removeUserLocalStorage()
  }
  const handlerClearStats = () => {
    removeStatsByMatchActive()
    globalThis.location.reload()
  }
  return authentificate && existStats && (

    <Sticky styles={{
      borderBottom: "1px solid green",
      background: 'white'
    }}>
      <Container>
        <nav className={userPanelCss.nav}>
          <i className={userPanelCss.user_email}>{user.name}</i>
          <button className={userPanelCss.clearStats} onClick={handlerClearStats} type="button">Clear stats</button>
          <button className={userPanelCss.logout} onClick={handlerLogout} type="button">Logout</button>
        </nav>
      </Container>
    </Sticky>

  )
}