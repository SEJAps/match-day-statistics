import { FC } from "react"
import check_rojo from "./check_rojo.webp"
import check_verde from "./check_verde.webp"
import Icono_falta from "../svg/falta_512x512.svg"
import Icono_falta_peligrosa from "../svg/falta_peligrosa_512x512.svg"
import Icono_fuera_de_juego from "../svg/fuera_de juego_512x512.svg"

import Icono_tiro_3_palos from "../svg/tiro_a_puerta 512x512.svg"
import Icono_tiro_fuera from "../svg/tiro_fuera_512x512.svg"
import Icono_parada from "../svg/parada_512x512.svg"
import Icono_gol from "../svg/gol_512x512.svg"
import Icono_ataque_centro from "../svg/ataque_centro_512x512.svg"
import Icono_ataque_derecha from "../svg/ataque_derecha_512x512.svg"
import Icono_ataque_izquierda from "../svg/ataque_izquierda_512x512.svg"
import Icono_centro_area from "../svg/centro_al_area_512x512.svg"
import Icono_corner from "../svg/corner_512x512.svg"
import webpCSS from './webp.module.css'
// import { useTranslation } from "react-i18next"

type TImage = {
  src: string,
  alt: string,
  title?: string,
  image_down?: boolean,
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
const ImageWebp: FC<TImage> = ({ src, alt, onClick, title, image_down }) => {
  return <img onClick={onClick} className={`${image_down ? webpCSS.image_down : webpCSS.image} ${webpCSS.icon}`} src={src} alt={alt} width={32} height={32} title={title} />
}

const CheckRojo: FC<{ onClick: () => void, image_down?:boolean }> = ({ onClick, image_down }) => {
  return (<ImageWebp image_down={image_down} onClick={onClick} src={check_rojo} alt="Check Rojo" />)
}
const CheckVerde: FC<{ onClick: () => void , image_down?:boolean}> = ({ onClick,image_down }) => {
  return (<ImageWebp image_down={image_down} onClick={onClick} src={check_verde} alt="Check Rojo" />)
}

const IconStat: FC<{ onClick: () => void, title?: string, stat: string }> = ({ onClick, title, stat }) => {
  // const { t } = useTranslation();
  return (<button className={webpCSS.btn}>
    <ImageWebp onClick={onClick} src={(statIcons.find(record => record.stat === stat.toLowerCase()))?.src as string} alt={stat} title={title} />
    {/* <small>{t(stat)}</small> */}
  </button>)
}
export {
  CheckRojo,
  CheckVerde,
  IconStat
}