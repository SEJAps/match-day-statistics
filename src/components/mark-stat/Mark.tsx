import { FC, MouseEvent, useState } from "react";
import viewMarks from '../../assets/webp/zonas_campo.webp'
import { useAppDispatch } from "../../store/store";
import { createHeatMark } from "../../store/slices/heatMapSlice";
interface Mark {
  x: number,
  y: number
}

export const MarkStat: FC = () => {
  const [marks, setMarks] = useState<Mark[]>([])
  const dispacth = useAppDispatch()
  const handlerClick = (eve: MouseEvent) => {
    setMarks((state) => [...state, { x: eve.clientX, y: eve.clientY }])
    console.log("HOla marka")
    dispacth(createHeatMark({ team: 'asdasd', data: { x: Number(eve.clientX), y: Number(eve.clientY), value: 10 } }))
  }

  return (
    <>
      <div style={{
        position: 'fixed',
        bottom: '0',

        background: 'rgba(0,0,0,.1)'
      }}>
        {marks && marks.map((rec, id) => <div key={id}><strong>x:</strong> {rec.x}&nbsp;-&nbsp;<strong>y:</strong>{rec.y}</div>)}
      </div>
      <img onMouseDown={handlerClick} src={viewMarks} alt={'Campo selección'} style={{
        objectFit: 'cover',
        width: '100%',
        height: '100svh'
      }} />
    </>
  )
}