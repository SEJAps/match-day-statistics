import { FC, useEffect, useState } from "react";
import MdsCanvas from "../../components/atoms/canvas/MdsCanvas";
import campo from "../../assets/webp/zonas_campo_new.webp"
import { useParams } from "react-router";
import { TeamSelect } from "../../components/select-team/SelectTeam";
import { ModalSelectTeam } from "../../components/modal/ModalSelectTeam";
import { IconMark } from "../../assets/webp/Webp";
import { useGlobalCtx } from "../../store/hooks/useGlobalCtx";

const Marcas: FC = () => {
  const [marks, setMarks] = useState<{ x: number; y: number }[]>([]);
  const { stat } = useParams();

  const handleCanvasClick = (x: number, y: number) => {
    setMarks((prevMarks) => [...prevMarks, { x, y }]);
  };
  const handleEditStat = () => {
    alert("Editar estadistica")
  };
  const { isOpenModal } = useGlobalCtx()

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
            left: `${mark.x}px`, top: `${mark.y}px`, transform: "translate(-50%, -50%)", position: 'absolute',
          }}
        > <IconMark onClick={handleEditStat} key={stat} stat={stat as string} /></div>
      ))}
    </div>);
};

export default Marcas