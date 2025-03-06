import { FC } from "react";
import { RootState, useAppSelector } from "../../store/store";
import userPanelCss from "./user_panel.module.css";
import { Container } from "../container/Container";
import { Sticky } from "../Sticky";
// import { TILE_AP } from "../../config";
import { Logout } from "../../assets/icons/Logout";
import { TrashStats } from "../../assets/icons/TrashStats";
import { Title } from "../title/Title";
// import logo from "../../assets/svg/match_day_stats_logo.svg"
import logo2 from "../../assets/webp/MDS_blanco.webp";
export const UserPanel: FC = () => {
  const {  user } = useAppSelector(
    (state: RootState) => state.user,
  );
  

  return (
    <Sticky
      styles={{
        borderBottom: "1px solid green",
      }}
    >
      <Container>
        <header className={userPanelCss.header}>
          <Title className={userPanelCss.busineTitle} level={1}>
            {/* {TILE_AP} */}
            <img src={logo2} alt="" width={256} height={128} />
          </Title>
          <nav className={userPanelCss.nav}>
            <i className={userPanelCss.name} title={user.name}>
              {user.name}
            </i>
            <aside className={userPanelCss.userActions}>
              <i title="Borrar estadísticas">
                <TrashStats />
              </i>
              <i title="Cerrar sesión">
                <Logout />
              </i>
            </aside>
          </nav>
        </header>
      </Container>
    </Sticky>
  );
};
