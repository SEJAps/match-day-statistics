import { FC, useEffect, useState } from "react";
import MdsCanvas from "../../components/atoms/canvas/MdsCanvas";
import campo from "../../assets/webp/zonas_campo_new.webp"
import marcasCSS from "./marcas.module.css";
import { Link, useNavigate, useParams } from "react-router";
import { TeamSelect } from "../../components/select-team/SelectTeam";
// import { IconMark } from "../../assets/webp/Webp";
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
    console.log(team)
  }
  // const handleEditStat = () => {
  //   alert("Editar estadistica")
  // };

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
      {team === "local" ? local.map((mark, index) => {
        return (
          <div
            key={index}
            style={{
              left: `${mark.x}px`, top: `${mark.y}px`, transform: "translate(-50%, -50%)", position: 'absolute', display: 'flex', flexDirection: 'column', alignItems: 'center'
            }}
          >
            {/* <IconMark onClick={handleEditStat} key={stat} stat={stat as string} /> */}
            {team}
            {stat}
          </div>
        )
      }) : guest.map((mark, index) => (
        <div
          key={index}
          style={{
            left: `${mark.x}px`, top: `${mark.y}px`, transform: "translate(-50%, -50%)", position: 'absolute', display: 'flex', flexDirection: 'column', alignItems: 'center'
          }}
        >
          {/* <IconMark onClick={handleEditStat} key={stat} stat={stat as string} /> */}
          {team}
          {stat}
        </div>
      ))}
    </div>);
};

export default Marcas