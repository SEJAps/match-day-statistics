import { FC } from "react";
import userPanelCss from './css/user-panel.module.css'
import { statNames } from "../config";
import { useAppSelector } from "../store/store";
import MatchTimer from "../components/matchtimer/MatchTimer";
import { Title } from "../components/title/Title";
import { Container } from "../components/container/Container";
import { useTranslation } from "react-i18next";
import { SelectLanguage } from "../components/select-language/SelectLanguage";
import { IconStat } from "../assets/webp/Webp";
import { useNavigate } from "react-router";
// import NewMatchTimer from "../components/matchtimer/NewMatchTimer";
// import Icono_gol from "../svg/gol_512x512.svg"
const UserPanelLayout: FC = () => {
  const { t } = useTranslation();
  const goTo = useNavigate()
  const { guestName, localName, local, guest } = useAppSelector(state => state.stats)

  const handlerGoto = (stat: string) => {

    goTo(`/marcas/${stat}`)
  }
  const stats = Object.keys(statNames)

  return (
    <Container>
      <SelectLanguage />
      <section className={userPanelCss.panel}>
        <section className={userPanelCss.content}>
          <header className={userPanelCss.teams}>
            <article className={userPanelCss.team}>
              <Title level={2}>{t("local")}</Title>
              <Title level={3}>{localName}</Title>
              <strong className={userPanelCss.goal}>{local.goals}</strong>
            </article>
            <article className={userPanelCss.team}>
              <Title level={2}>{t("visitor")}</Title>
              <Title level={3}>{guestName}</Title>
              <strong className={userPanelCss.goal}>{guest.goals}</strong>
            </article>
            <aside className={userPanelCss.time}><MatchTimer /></aside>
          </header>
        </section>
        <section className={userPanelCss.gridStatsButtons}>
          {stats.map(stat => (
            <IconStat key={stat} onClick={() => handlerGoto(stat)} title={t(stat)} stat={stat} />
          ))}
        </section>
      </section>
    </Container>
  )
}

export default UserPanelLayout