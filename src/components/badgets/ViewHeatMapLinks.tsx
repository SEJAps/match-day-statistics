import { TTeam } from "../../types"
import { Link } from "react-router"

interface Props {
    viewHeatMap: boolean,
    team: TTeam
}

const ViewHeatMapLinks: React.FC<Props> = ({ viewHeatMap, team }) => {

    return viewHeatMap && team === "all" ?
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

export default ViewHeatMapLinks