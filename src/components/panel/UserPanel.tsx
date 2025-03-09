import { FC } from "react";
import userPanelCss from "./user_panel.module.css";
import { Container } from "../container/Container";
import { Sticky } from "../Sticky";
import { Logout } from "../../assets/icons/Logout";
import { TrashStats } from "../../assets/icons/TrashStats";
import { Title } from "../title/Title";
import { MDSLogo } from "../mdslogo/MDSLogo";
import { useAuth } from "../../store/context/auth";

export const UserPanel: FC = () => {
 
  const {usuario} = useAuth();
  
  return (
    <Sticky
      styles={{
        borderBottom: "1px solid green",
      }}
    >
      <Container>
        <header className={userPanelCss.header}>
          <Title className={userPanelCss.busineTitle} level={1}>
            <MDSLogo width={256} height={128} />            
          </Title>
          <nav className={userPanelCss.nav}>
            <i className={userPanelCss.name} title={usuario?.email as string} >
              {usuario?.email}
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
