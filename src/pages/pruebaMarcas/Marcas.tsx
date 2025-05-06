import { FC, useState } from "react";
import MdsCanvas from "../../components/atoms/canvas/MdsCanvas";
import campo from "../../assets/webp/zonas_campo_new.webp"
import marcasCSS from "./marcas.module.css";
import { useNavigate, useParams } from "react-router";
import { TeamSelect } from "../../components/select-team/SelectTeam";
import { useAppDispatch } from "../../store/store";
import { createMark } from "../../store/slices/markSlice";
import { TeamStats, TTeam } from "../../types";
import { increment } from "../../store/slices/statsSlice";
import ViewHeatMapLinks from "../../components/badgets/ViewHeatMapLinks";
import GetTeam from "../../components/teams/GetTeam";

const Marcas: FC = () => {
  const [team, setTeam] = useState<TTeam>("all")
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

  return (
    <div className={marcasCSS.container} style={{ backgroundImage: `url(${campo})` }}>
      <MdsCanvas onCanvasClick={handleCanvasClick} />
      <ViewHeatMapLinks viewHeatMap={viewHeatMap} team={team} />
      {team === "all" && <TeamSelect teamSelected={handlerTeamSelected} />}
      <GetTeam team={team} />
    </div>
  );
};

export default Marcas