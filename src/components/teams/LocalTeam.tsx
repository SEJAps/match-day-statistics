import { useAppSelector } from "../../store/store"
import marcador_campof from '../../assets/svg/marcador_campof_512x512.svg'
import teamsCSS from './css/teams.module.css'
interface Props {
    stat?: string
}

const LocalTeam: React.FC<Props> = ({ stat }) => {
    const { local } = useAppSelector(state => state.marks)
    return local.map((mark, index) => {
        return stat === mark.stat && (
            <img
                key={index}
                style={{ left: `${mark.x}px`, top: `${mark.y}px` }}
                className={teamsCSS.statisticalMark}
                src={marcador_campof}
                alt={mark.stat}
                title={mark.stat}
                width={16}
            />
        )
    })
}

export default LocalTeam

{/* <span style={{ textTransform: 'capitalize', fontWeight: 600, fontSize: '.8rem' }}>{mark.stat}</span> */ }