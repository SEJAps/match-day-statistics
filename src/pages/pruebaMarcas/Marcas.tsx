import { FC, useState } from "react";
import MdsCanvas from "../../components/atoms/canvas/MdsCanvas";
import campo from "../../assets/webp/zonas_campo_new.webp"
import Icono_falta from "../../assets/webp/Icono_falta.webp"
import { useParams } from "react-router";

const Marcas: FC = () => {
  const [marks, setMarks] = useState<{ x: number; y: number }[]>([]);
  const { team } = useParams();
  const handleCanvasClick = (x: number, y: number) => {
    setMarks((prevMarks) => [...prevMarks, { x, y }]);

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
      <h1 style={{
        position: 'fixed',
        top: '0',
        margin: '0',
        color: 'white',
        textTransform: 'capitalize',
        padding: '1rem'
      }}>{team}</h1>
      <MdsCanvas onCanvasClick={handleCanvasClick} />
      {marks.map((mark, index) => (
        <div
          key={index}
          style={{
            left: `${mark.x}px`, top: `${mark.y}px`, transform: "translate(-50%, -50%)", position: 'absolute',
            width: '64px',
            height: '64px',
            backgroundImage: `url(${Icono_falta})`,
            backgroundSize: 'cover',
            borderRadius: '50%'
          }}
        ></div>
      ))}
    </div>);
};

export default Marcas