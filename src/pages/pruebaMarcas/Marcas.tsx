import { FC, useState } from "react";
import MdsCanvas from "../../components/atoms/canvas/MdsCanvas";
import campo from "../../assets/webp/zonas_campo_new.webp"
import { Link, useParams } from "react-router";
import { TeamSelect } from "../../components/select-team/SelectTeam";
import { ModalSelectTeam } from "../../components/modal/ModalSelectTeam";
import { IconMark } from "../../assets/webp/Webp";
import { useGlobalCtx } from "../../store/hooks/useGlobalCtx";
import { useAppDispatch } from "../../store/store";
import { createHeatMark } from "../../store/slices/heatMapSlice";

const Marcas: FC = () => {
  // const { team } = useAppSelector(state => state.heatMap)
  const [marks, setMarks] = useState<{ x: number; y: number }[]>([]);
  const { stat } = useParams();
  const { isOpenModal } = useGlobalCtx()
  const dispacth = useAppDispatch()
  const [viewHeatMap, setViewHeatMap] = useState<boolean>()
  // const goTo = useNavigate();
  const handleCanvasClick = (x: number, y: number) => {
    setMarks((prevMarks) => [...prevMarks, { x, y }]);
    setViewHeatMap(true)

    dispacth(createHeatMark({ team: 'asdasd', data: { x, y, value: 1 } }))
    // setTimeout(() => {
    //   alert("Cerrar ")
    //   openModal()
    //   goTo("/")

    // }, 1000)
  };
  const handleEditStat = () => {
    alert("Editar estadistica")
  };


  return (
    <div style={{
      position: 'relative',
      width: '100%',
      height: '100svh',
      overflow: 'clip',
      backgroundImage: `url(${campo})`,
      backgroundSize: '100% 100%',
    }}>
      <MdsCanvas onCanvasClick={handleCanvasClick} />
      {isOpenModal && <ModalSelectTeam nameModal="team">
        <TeamSelect />
      </ModalSelectTeam>}
      {marks.map((mark, index) => (
        <div
          key={index}
          style={{
            left: `${mark.x}px`, top: `${mark.y}px`, transform: "translate(-50%, -50%)", position: 'absolute', display: 'flex', flexDirection: 'column', alignItems: 'center'
          }}
        >
          <IconMark onClick={handleEditStat} key={stat} stat={stat as string} />
          {viewHeatMap && <Link style={{ color: 'white' }} to={`/heatmap`}>Click para proba el mapa de calor</Link>}
        </div>
      ))}

    </div>);
};

export default Marcas