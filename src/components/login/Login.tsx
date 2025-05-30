import { FC } from "react";
import { RootState, useAppDispatch, useAppSelector } from "../../store/store";
import { login } from "../../store/slices/userSlice";
import { userLocalStorage } from "../../utils";
import loginCSS from "./login.module.css"
import { EMAIL_BUSINESS, TILE_AP } from "../../config";
import { Link, NavLink } from "react-router";
import Layout from "../../layouts/Layout";
import { Title } from "../title/Title";
import { useTranslation } from "react-i18next";
import logo from "../../assets/webp/MDS_blanco.webp"
// import logo2 from "../../assets/svg/match_day_stats_logo.svg"
export const Login: FC = () => {

  const { authentificate } = useAppSelector((state: RootState) => state.user);
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const handlerSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formControl = new FormData(event.target as HTMLFormElement);
    console.log(formControl.get("email"))
    dispatch(login({ user: { email: formControl.get("email"), name: formControl.get("name") } }))
    userLocalStorage({ email: formControl.get("email") as string, name: formControl.get("name") as string })
    globalThis.location.href = "/"
  }


  return !authentificate && (
    <Layout src="./webp/imagen_login_stats.webp">
      <section className={loginCSS.center} >
        <header className={loginCSS.header}>
          <Title className={loginCSS.title}>
            {TILE_AP}
          </Title>
        </header>

        <article className={loginCSS.article}>
          <form className={loginCSS.login} onSubmit={handlerSubmit}>
            <input type="email" id="email" name="email" placeholder={t("your_email")} required autoComplete="on" />
            <input type="text" id="name" name="name" placeholder={t("your_name")} required autoComplete="on" />
            <aside>
              <button className={loginCSS.submit} type="submit">{t("login")}</button>
            </aside>
          </form>
          <footer className={loginCSS.info}>
            <address>
              <img src={logo} alt="logo" width={128} height={96} />
              <Link className="email" to={`mailto:${EMAIL_BUSINESS}`}>{EMAIL_BUSINESS}</Link>
            </address>
            <strong className={loginCSS.created_by}>&copy; <time dateTime="2024-02-01">2024</time> Creado por <NavLink to={`mailto:}`}>Sergio Lopez</NavLink> y <NavLink to={`mailto:}`}>Juan Valdivia</NavLink> </strong>
          </footer>
        </article>
      </section >
    </Layout>
  )
}