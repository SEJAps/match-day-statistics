import { FC } from "react";
import { Link } from "react-router";
import { MDSLogo } from "../../components/Logo";
import User from "../../components/user/User";
import aboutCSS from "./css/about.module.css";

const About: FC = () => {
  return (
    <section className={aboutCSS.container}
      style={{
       
        backgroundImage: `url('./addteams.jpg')`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
       
      }}
    >
      <User />
      <article className={aboutCSS.content} >
        <header className={aboutCSS.contentHeader}>
          <MDSLogo width={256} height={128} />
          <h1  className={aboutCSS.heading} >
            Herramienta Integral para la recogida de datos instantaneamente.
          </h1>
        </header>
        <section>
          <h2 className={aboutCSS.title}>Recopilación de Datos en Vivo</h2>
          <p className={aboutCSS.paragraph}>
            Registro instantáneo de eventos clave (goles, faltas, robos, perdidas, corners, fueras de juego, tiros, etc.) mediante una interfaz intuitiva
          </p>
          <p className={aboutCSS.paragraph}>
            Gráficos y heatmaps personalizables para identificar patrones y debilidades del rival.
            Decisiones más rápidas, acceso a información crítica sin salir del banquillo.
          </p>
          <p className={aboutCSS.paragraph}>
            Ahorro de tiempo con reportes a la media parte y post-partido, generación de resúmenes ejecutivos que se pueden compartir instantaneamente.
            Adaptable a cualquier formato de competición (desde categorías inferiores hasta élite).
          </p>
          <p className={aboutCSS.paragraph}>
            Match Day Stats no es solo una herramienta, es un aliado estratégico para convertir cada partido en una oportunidad de crecimiento.
            <span>¿Listos para revolucionar su metodología de recogida de datos y análisis?</span>
          </p>
        </section>
        <footer className={aboutCSS.footer}>
          <Link className={aboutCSS.link} to="/cuenta">
            Accede a Match Day Stats
          </Link>
        </footer>
      </article>
    </section>
  );
};

export default About;
