import { useAppSelector } from "../../store/store"
import marcador_campof from '../../assets/svg/marcador_campof_512x512.svg'

const LocalTeam: React.FC = () => {
    const { local } = useAppSelector(state => state.marks)
    return local.map((mark, index) => {

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
                <span style={{ textTransform: 'capitalize', fontWeight: 600, fontSize: '.8rem' }}>{mark.stat}</span>
                <img src={marcador_campof} alt={mark.stat} title={mark.stat} width={32} />
            </div>
        )
    })
}

export default LocalTeam

