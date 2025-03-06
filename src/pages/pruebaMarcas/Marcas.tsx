import { FC, useEffect, useState } from "react";
import MdsCanvas from "../../components/atoms/canvas/MdsCanvas";
import campo from "../../assets/webp/zonas_campo_new.webp"
import marcasCSS from "./marcas.module.css";
import { Link, useNavigate, useParams } from "react-router";
import { TeamSelect } from "../../components/select-team/SelectTeam";
import marcador_campof from '../../assets/svg/marcador_campof_512x512.svg'
import { useAppDispatch, useAppSelector } from "../../store/store";
import { createMark } from "../../store/slices/markSlice";
import { TeamStats, TTeam } from "../../types";
import { increment } from "../../store/slices/statsSlice";

const Marcas: FC = () => {
  const [team, setTeam] = useState<TTeam>("all")
  const { local, guest } = useAppSelector(state => state.marks)
  const { stat } = useParams();
  const dispacth = useAppDispatch()
  const [viewHeatMap, setViewHeatMap] = useState<boolean>(true)
  const goTo = useNavigate()

  const handleCanvasClick = (x: number, y: number) => {
    setViewHeatMap(true)
    const newData = { team, x, y, intensity: 1, stat: stat as keyof TeamStats, time_stamp: new Date().getTime() }
    dispacth(createMark({ team, data: newData }))
    dispacth(increment({ team, stat: newData.stat, value: 1 }))
    goTo(`/`)
  };

  const handlerTeamSelected = (team: TTeam) => {
    setTeam(() => team)
  }

  useEffect(() => { }, [local, guest, handlerTeamSelected])

  return (
    <div className={marcasCSS.container} style={{ backgroundImage: `url(${campo})` }}>
      <MdsCanvas onCanvasClick={handleCanvasClick} />
      {viewHeatMap && team === "all" ?
        <Link style={{ color: 'white', position: 'fixed', zIndex: 100, background: 'black' }} to={`/heatmap/all`}>
          Click para proba el mapa de calor
        </Link>
        : team === "local" ?
          <Link style={{ color: 'white', position: 'fixed', zIndex: 100, background: 'black' }} to={`/heatmap/local`}>
            Click para proba el mapa de calor
          </Link>
          :
          <Link style={{ color: 'white', position: 'fixed', zIndex: 100, background: 'black' }} to={`/heatmap/guest`}>
            Click para proba el mapa de calor
          </Link>
      }
      {team === "all" && <TeamSelect teamSelected={handlerTeamSelected} />}
      {team === "local" && local.map((mark, index) => {
        return (
          <div
            key={index}
            style={{
              left: `${mark.x}px`, 
              top: `${mark.y}px`, 
              transform: "translate(-50%, -50%)", 
              position: 'absolute',
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center',
            }}
          >
            <span style={{textTransform: 'capitalize',  fontWeight: 600, fontSize: '.8rem'}}>{mark.stat}</span>
            <img src={marcador_campof} alt={mark.stat} title={mark.stat} width={32}/>
          </div>
        )
      }) }
      {team === "guest" && guest.map((mark, index) => (
        <div
          key={index}
          style={{
            left: `${mark.x}px`, top: `${mark.y}px`, transform: "translate(-50%, -50%)", position: 'absolute', display: 'flex', flexDirection: 'column', alignItems: 'center'
          }}
        >
           <span style={{textTransform: 'capitalize',  fontWeight: 600, fontSize: '.8rem'}}>{mark.stat}</span>
          <img src={marcador_campof} alt={mark.stat} title={mark.stat} width={32}/>
        </div>
      ))}
    </div>);
};

export default Marcas