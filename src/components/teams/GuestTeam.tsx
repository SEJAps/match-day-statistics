import { useAppSelector } from "../../store/store"
import marcador_campof from '../../assets/svg/marcador_campof_512x512.svg'

interface Props {
    stat?: string
}

const GuestTeam: React.FC<Props> = ({ stat }) => {
    const { guest } = useAppSelector(state => state.marks)

    if (guest.length === 0) return null
    if (guest.length > 0 && guest[0].team !== "guest") return null

    return guest.map((mark, index) => stat === mark.stat && (
        <img key={index} src={marcador_campof} alt={mark.stat} title={mark.stat} width={16} style={{
            left: `${mark.x}px`,
            top: `${mark.y}px`,
            transform: "translate(-50%, -50%)",
            position: 'absolute',
        }} />
    ))
}

export default GuestTeam

