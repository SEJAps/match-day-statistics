import { FC } from "react";
import { RootState, useAppSelector } from "../../store/store";
import userPanelCss from './user_panel.module.css'
import { Container } from "../container/Container";
import { Sticky } from "../Sticky";
import { TILE_AP } from "../../config";
import { Logout } from "../../assets/icons/Logout";
import { TrashStats } from "../../assets/icons/TrashStats";

export const UserPanel: FC = () => {
  const { authentificate, user } = useAppSelector((state: RootState) => state.user)
  const { existStats } = useAppSelector((state: RootState) => state.stats)

  return authentificate && existStats && (

    <Sticky styles={{
      borderBottom: "1px solid green",
      background: 'white'
    }}>
      <Container>
        <header className={userPanelCss.header}>
          <h1 className={userPanelCss.busineTitle}>{TILE_AP}</h1>
          <nav className={userPanelCss.nav}>
            <i className={userPanelCss.user_email} title={user.name}>{user.name}</i>
            <aside className={userPanelCss.userActions}>
              <i title="Borrar estadísticas"><TrashStats /></i>
              <i title="Cerrar sesión"><Logout /></i>
            </aside>
          </nav>
        </header>
      </Container>
    </Sticky>

  )
}