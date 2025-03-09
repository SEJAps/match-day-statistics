import { FC } from "react";
import { MDSLogo } from "../../components/mdslogo/MDSLogo";
import accountCSS from "./css/account.module.css";
import { Link } from "react-router";
interface AccountProps {
    bgImage?: string;
}
const defaultBgImage = 'addteams.jpg';

const Account: FC<AccountProps> = ({ bgImage = defaultBgImage }) => {
    const styles = {
        backgroundImage: `url(${bgImage})`,
    }
    return <section className={accountCSS.container} style={styles}>
        <article className={accountCSS.content}>
            <header className={accountCSS.header}>
                <MDSLogo width={256} height={128} />
            </header>
            <section className={accountCSS.body}>
                <article style={{
                    display: 'flex',
                    flexDirection: 'column',

                }}>
                    <div className={accountCSS.welcome}>
                        <h1>Bienvenido</h1>
                        <span>Accede fácilmente a tu cuenta usando uno de los siguientes métodos</span>
                    </div>
                    <aside className={accountCSS.accesMethod}>
                        <Link to="/login" className={accountCSS.link} style={{ color: "white" }}>
                            <i>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="1em"
                                    height="1em"

                                >
                                    <path
                                        fill="currentColor"
                                        d="M12 21.95h5v-2h-5c-4.34 0-8-3.66-8-8s3.66-8 8-8s8 3.66 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57v-1.43c0-2.76-2.24-5-5-5s-5 2.24-5 5s2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47c.65.89 1.77 1.47 2.96 1.47c1.97 0 3.5-1.6 3.5-3.57v-1.43c0-5.52-4.48-10-10-10s-10 4.48-10 10s4.48 10 10 10m0-7c-1.66 0-3-1.34-3-3s1.34-3 3-3s3 1.34 3 3s-1.34 3-3 3"
                                    ></path>
                                </svg>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="1em"
                                    height="1em"

                                >
                                    <path
                                        fill="currentColor"
                                        fillRule="evenodd"
                                        d="M5.25 10.055V8a6.75 6.75 0 0 1 13.5 0v2.055c1.115.083 1.84.293 2.371.824C22 11.757 22 13.172 22 16s0 4.243-.879 5.121C20.243 22 18.828 22 16 22H8c-2.828 0-4.243 0-5.121-.879C2 20.243 2 18.828 2 16s0-4.243.879-5.121c.53-.531 1.256-.741 2.371-.824M6.75 8a5.25 5.25 0 0 1 10.5 0v2.004Q16.676 9.999 16 10H8q-.677-.001-1.25.004zM8 17a1 1 0 1 0 0-2a1 1 0 0 0 0 2m4 0a1 1 0 1 0 0-2a1 1 0 0 0 0 2m5-1a1 1 0 1 1-2 0a1 1 0 0 1 2 0"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                            </i>
                            Email y Contraseña
                        </Link>
                        <Link to="#google" className={accountCSS.link} style={{ color: "white" }}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 128 128"
                                width="1em"
                                height="1em"
                            >
                                <path
                                    fill="#fff"
                                    d="M44.59 4.21a63.28 63.28 0 0 0 4.33 120.9a67.6 67.6 0 0 0 32.36.35a57.13 57.13 0 0 0 25.9-13.46a57.44 57.44 0 0 0 16-26.26a74.33 74.33 0 0 0 1.61-33.58H65.27v24.69h34.47a29.72 29.72 0 0 1-12.66 19.52a36.16 36.16 0 0 1-13.93 5.5a41.29 41.29 0 0 1-15.1 0A37.16 37.16 0 0 1 44 95.74a39.3 39.3 0 0 1-14.5-19.42a38.31 38.31 0 0 1 0-24.63a39.25 39.25 0 0 1 9.18-14.91A37.17 37.17 0 0 1 76.13 27a34.28 34.28 0 0 1 13.64 8q5.83-5.8 11.64-11.63c2-2.09 4.18-4.08 6.15-6.22A61.22 61.22 0 0 0 87.2 4.59a64 64 0 0 0-42.61-.38z"
                                ></path>
                                <path
                                    fill="#e33629"
                                    d="M44.59 4.21a64 64 0 0 1 42.61.37a61.22 61.22 0 0 1 20.35 12.62c-2 2.14-4.11 4.14-6.15 6.22Q95.58 29.23 89.77 35a34.28 34.28 0 0 0-13.64-8a37.17 37.17 0 0 0-37.46 9.74a39.25 39.25 0 0 0-9.18 14.91L8.76 35.6A63.53 63.53 0 0 1 44.59 4.21z"
                                ></path>
                                <path
                                    fill="#f8bd00"
                                    d="M3.26 51.5a62.93 62.93 0 0 1 5.5-15.9l20.73 16.09a38.31 38.31 0 0 0 0 24.63q-10.36 8-20.73 16.08a63.33 63.33 0 0 1-5.5-40.9z"
                                ></path>
                                <path
                                    fill="#587dbd"
                                    d="M65.27 52.15h59.52a74.33 74.33 0 0 1-1.61 33.58a57.44 57.44 0 0 1-16 26.26c-6.69-5.22-13.41-10.4-20.1-15.62a29.72 29.72 0 0 0 12.66-19.54H65.27c-.01-8.22 0-16.45 0-24.68z"
                                ></path>
                                <path
                                    fill="#319f43"
                                    d="M8.75 92.4q10.37-8 20.73-16.08A39.3 39.3 0 0 0 44 95.74a37.16 37.16 0 0 0 14.08 6.08a41.29 41.29 0 0 0 15.1 0a36.16 36.16 0 0 0 13.93-5.5c6.69 5.22 13.41 10.4 20.1 15.62a57.13 57.13 0 0 1-25.9 13.47a67.6 67.6 0 0 1-32.36-.35a63 63 0 0 1-23-11.59A63.73 63.73 0 0 1 8.75 92.4z"
                                ></path>
                            </svg>
                            Google
                        </Link>
                    </aside>
                </article>
            </section>
            <footer className={accountCSS.footer}>
                <span className={accountCSS.notAccount}>
                    No tienes una cuenta? <Link className={accountCSS.link} to="/registro">Registrarse</Link>
                </span>
            </footer>
        </article>
    </section>;
}

export default Account;

