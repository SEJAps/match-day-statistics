import { FC, useState } from "react";
import loginCSS from "./login.module.css";
import { EMAIL_BUSINESS, TILE_AP } from "../../config";
import { Link, NavLink, useNavigate } from "react-router";
import Layout from "../../layouts/Layout";
import { Title } from "../title/Title";
import { useTranslation } from "react-i18next";
import logo from "../../assets/webp/MDS_blanco.webp";
import { auth, getFirebaseErrorMessage, signInWithEmailAndPassword } from "../../apis/firebase/firebase";
import { FormDataSignInWithEmailAndPass } from "../../types";

export const Login: FC = () => {
  const goTo = useNavigate();
  const [formData, setFormData] = useState<FormDataSignInWithEmailAndPass>({
    email: '',
    password: ''
  });
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const { t } = useTranslation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlerSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null); // Limpia errores previos
    setSuccessMessage(null); // Limpia mensajes de éxito previos
    const { email, password } = formData;

    if (!email) {
      setError("El email es obligatorio.");
      return;
    }
    if (!password) {
      setError("La contraseña es obligatoria.");
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        setSuccessMessage("Usuario logeado con éxito!");
        setFormData(() => ({
          email: '',
          password: ''
        }))
        goTo("/stats");
      })
      .catch((firebaseError) => {
        console.error("Error inesperado:", firebaseError);
        setError(getFirebaseErrorMessage(firebaseError.code));
      });

    // dispatch(
    //   login({
    //     user: {
    //       email: formControl.get("email"),
    //       name: formControl.get("name"),
    //     },
    //   }),
    // );
    // userLocalStorage({
    //   email: formControl.get("email") as string,
    //   name: formControl.get("name") as string,
    // });
    // globalThis.location.href = "/";
  };

  return (

    <Layout src="./addteams.jpg">
      <section className={loginCSS.center}>
        <header className={loginCSS.header}>
          <Title className={loginCSS.title}>{TILE_AP}</Title>
        </header>
        <article className={loginCSS.article}>
          <form className={loginCSS.login} onSubmit={handlerSubmit}>
            <aside>
              {error && <p className={loginCSS.error} style={{color: 'red'}}>{error}</p>}
              {successMessage && <p className={loginCSS.success} style={{color: 'green'}}>{successMessage}</p>}
            </aside>
            <input
              type="email"
              id="email"
              name="email"
              placeholder={t("your_email")}
              required
              autoComplete="on"
              onChange={handleChange}
            />
            <input
              type="password"
              id="password"
              name="password"
              placeholder={"Contraseña"}
              required
              autoComplete="on"
              onChange={handleChange}
            />
            <aside>
              <button className={loginCSS.submit} type="submit">
                {t("login")}
              </button>
            </aside>
          </form>
          <footer className={loginCSS.info}>
            <address>
              <img src={logo} alt="logo" width={128} height={96} />
              <Link className="email" to={`mailto:${EMAIL_BUSINESS}`}>
                {EMAIL_BUSINESS}
              </Link>
            </address>
            <strong className={loginCSS.created_by}>
              &copy; <time dateTime="2024-02-01">2024</time> Creado por{" "}
              <NavLink to={`mailto:}`}>Sergio Lopez</NavLink> y{" "}
              <NavLink to={`mailto:}`}>Juan Valdivia</NavLink>{" "}
            </strong>
          </footer>
        </article>
      </section>
    </Layout>
  );
};
