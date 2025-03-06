import { FC } from "react";
import { Link } from "react-router";

const About: FC = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100dvh",
        backgroundImage: `url('./Leonardo_Anime_XL_About_the_ProjectMatch_Day_Statistics_is_an_0.jpg')`,
        backgroundSize: "cover",
      }}
    >
      <article
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          padding: "1rem",
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          height: "100%",
        }}
      >
        <header>
          <h1
            style={{
              padding: "1rem",
              fontSize: "2rem",
              textAlign: "center",
            }}
          >
            Acerca del Proyecto
          </h1>
        </header>
        <section>
          <p
            style={{
              fontSize: "1.5rem",
              textAlign: "center",
            }}
          >
            Match Day Statistics es una aplicación dedicada a mostrar las
            estadísticas de los partidos de manera detallada e intuitiva.
          </p>
          <p
            style={{
              fontSize: "1.5rem",
              textAlign: "center",
            }}
          >
            Con esta herramienta, los usuarios pueden analizar y comprender
            mejor el rendimiento y las tendencias de los encuentros.
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
              textAlign: "center",
              textDecoration: "none",
              color: "white",
              backgroundColor: "green",
              padding: ".66rem 1.2rem",
              borderRadius: "0.5rem",
            }}
            to="/inicio"
          >
            Login
          </Link>
        </footer>
      </article>
    </div>
  );
};

export default About;
