import GuestTeam from "../../components/teams/GuestTeam";
import LocalTeam from "../../components/teams/LocalTeam";
import { TTeam } from "../../types";

interface Props {
    team: TTeam
}

const GetTeam: React.FC<Props> = ({ team }) => {
    return (
        <>
            {team === "local" && <LocalTeam />}
            {team === "guest" && <GuestTeam />}
        </>
    )
}

export default GetTeam