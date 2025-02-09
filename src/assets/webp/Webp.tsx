import { FC } from "react"
import check_rojo from "./check_rojo.webp"
import check_verde from "./check_verde.webp"
import Icono_falta from "./Icono_falta.webp"
import Icono_falta_peligrosa from "./Icono_falta_peligrosa.webp"
import Icono_fuera_de_juego from "./Icono_fuera_de_juego.webp"
import Icono_ocasion from "./Icono_ocasion.webp"
import Icono_tiro_3_palos from "./Icono_tiro_3_palos.webp"
import Icono_tiro_fuera from "./Icono_tiro_fuera.webp"
import Icono_parada from "./Icono_parada.webp"
import Icono_gol from "./Icono_gol.webp"
import Icono_ataque_centro from "./Icono_ataque_centro.webp"
import Icono_ataque_derecha from "./Icono_ataque_derecha.webp"
import Icono_ataque_izquierda from "./Icono_ataque_izquierda.webp"
import Icono_centro_area from "./Icono_centro-area.webp"
import Icono_corner from "./Icono_corner.webp"
import webpCSS from './webp.module.css'
import { useTranslation } from "react-i18next"

type TImage = {
  src: string,
  alt: string,
  title?: string,
  onClick: () => void
}
const statIcons = [
  {
    stat: "goals",
    src: Icono_gol
  },
  {
    stat: "center_attacks",
    src: Icono_ataque_centro
  },
  {
    stat: "right_attacks",
    src: Icono_ataque_derecha
  },
  {
    stat: "left_attacks",
    src: Icono_ataque_izquierda
  },
  {
    stat: "crosses",
    src: Icono_centro_area
  },
  {
    stat: "corners",
    src: Icono_corner
  },
  {
    stat: "fouls",
    src: Icono_falta
  },
  {
    stat: "dangerous_fouls",
    src: Icono_falta_peligrosa
  },
  {
    stat: "offsides",
    src: Icono_fuera_de_juego
  },
  {
    stat: "chances",
    src: Icono_ocasion
  },
  {
    stat: "goal_cahances_in",
    src: Icono_tiro_3_palos
  },
  {
    stat: "merit_stop",
    src: Icono_parada
  },
  {
    stat: "shoot_out",
    src: Icono_tiro_fuera
  }
]
const ImageWebp: FC<TImage> = ({ src, alt, onClick, title }) => {
  return <img onClick={onClick} className={`${webpCSS.image} ${webpCSS.icon}`} src={src} alt={alt} width={32} height={32} title={title} />
}

const CheckRojo: FC<{ onClick: () => void }> = ({ onClick }) => {
  return (<ImageWebp onClick={onClick} src={check_rojo} alt="Check Rojo" />)
}
const CheckVerde: FC<{ onClick: () => void }> = ({ onClick }) => {
  return (<ImageWebp onClick={onClick} src={check_verde} alt="Check Rojo" />)
}

const IconStat: FC<{ onClick: () => void, title?: string, stat: string }> = ({ onClick, title, stat }) => {
  const { t } = useTranslation();
  return (<button className={webpCSS.btn}>
    <ImageWebp onClick={onClick} src={(statIcons.find(record => record.stat === stat.toLowerCase()))?.src as string} alt={stat} title={title} />
    <small>{t(stat)}</small>
  </button>)
}
export {
  CheckRojo,
  CheckVerde,
  IconStat
}