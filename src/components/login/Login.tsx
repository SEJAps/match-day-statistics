import { FC } from "react";
import { RootState, useAppDispatch, useAppSelector } from "../../store/store";
import { login } from "../../store/slices/userSlice";
import { userLocalStorage } from "../../utils";
import loginCSS from "./login.module.css"
import imageLogin from '../../assets/Leonardo_Anime_XL_Estadisticas_de_futbol_combinalo_con_un_camp_3.png'
import { EMAIL_BUSINESS, TILE_AP } from "../../config";
import { Link } from "react-router";
export const Login: FC = () => {

  const { authentificate } = useAppSelector((state: RootState) => state.user);
  const dispatch = useAppDispatch();

  const handlerSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formControl = new FormData(event.target as HTMLFormElement);
    console.log(formControl.get("email"))
    dispatch(login({ user: { email: formControl.get("email"), name: formControl.get("name") } }))
    userLocalStorage({ email: formControl.get("email") as string, name: formControl.get("name") as string })
    globalThis.location.href = "/"
  }


  return !authentificate && (
    <section className={loginCSS.center} >
      <header className={loginCSS.header}>
        <h1 className={loginCSS.title}>{TILE_AP}</h1>
      </header>

      <article className={loginCSS.article}>
        <form className={loginCSS.login} onSubmit={handlerSubmit} style={{
          backgroundImage: `url(${imageLogin})`
        }}>
          <input type="email" id="email" name="email" placeholder='Tu correo electrónico' required autoComplete="on" />
          <input type="text" id="name" name="name" placeholder='Tu nombre o apodo' required autoComplete="on" />
          <aside>
            <button className={loginCSS.submit} type="submit">Login</button>
          </aside>
        </form>
        <footer className={loginCSS.info}>
          <address>
            <img src="./android-chrome-192x192.png" alt="logo" width={48} height={48} />
            <Link to={`mailto:${EMAIL_BUSINESS}`}>{EMAIL_BUSINESS}</Link>
          </address>
        </footer>
      </article>
    </section >
  )
}