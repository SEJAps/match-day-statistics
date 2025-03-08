import { FC } from "react";
import { Link } from "react-router";
import { MDSLogo } from "../../components/Logo";
import User from "../../components/user/User";

const About: FC = () => {
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundImage: `url('./Leonardo_Anime_XL_About_the_ProjectMatch_Day_Statistics_is_an_0.jpg')`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
       
      }}
    >
      <User />
      <article
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          height: "100%",
          padding: "0 0 4rem 0",
        }}
      >
        <header style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
          <MDSLogo width={256} height={128} />
          <h1
            style={{
              padding: "1rem",
              fontSize: "1.9rem",
              margin: "0",
            }}
          >
            Herramienta Integral para la recogida de datos instantaneamente.
          </h1>
        </header>
        <section>
          <h2 style={{
              padding: "1rem",
              fontSize: "1.6rem",
              margin: "0",
            }}>Recopilación de Datos en Vivo</h2>
          <p
            style={{
              fontSize: "1.4rem",
              padding: "1rem",
            }}
          >
            Registro instantáneo de eventos clave (goles, faltas, robos, perdidas, corners, fueras de juego, tiros, etc.) mediante una interfaz intuitiva
          </p>
          <p
            style={{
              fontSize: "1.4rem",
              padding: "1rem",
            }}
          >
            Gráficos y heatmaps personalizables para identificar patrones y debilidades del rival.
            Decisiones más rápidas, acceso a información crítica sin salir del banquillo.
          </p>
          <p
            style={{
              fontSize: "1.4rem",
              padding: "1rem",
            }}
          >
            Ahorro de tiempo con reportes a la media parte y post-partido, generación de resúmenes ejecutivos que se pueden compartir instantaneamente.
            Adaptable a cualquier formato de competición (desde categorías inferiores hasta élite).
          </p>
          <p
            style={{
              fontSize: "1.4rem",
              padding: "1rem",
            }}
          >
            Match Day Stats no es solo una herramienta, es un aliado estratégico para convertir cada partido en una oportunidad de crecimiento.
            <span>¿Listos para revolucionar su metodología de recogida de datos y análisis?</span>
          </p>
        </section>
        <footer
          style={{
            display: "flex",
            justifyContent: "center",
           
          }}
        >
          <Link
            style={{
              fontSize: "1.2rem",
              textDecoration: "none",
              color: "white",
              backgroundColor: "green",
              padding: ".66rem 1.2rem",
              borderRadius: "0.5rem",
            }}
            to="/cuenta"
          >
            Accede a Match Day Stats
          </Link>
        </footer>
      </article>
    </section>
  );
};

export default About;
