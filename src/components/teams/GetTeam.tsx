import GuestTeam from "../../components/teams/GuestTeam";
import LocalTeam from "../../components/teams/LocalTeam";
import { TTeam } from "../../types";

interface Props {
    team: TTeam,
    stat?: string
}

const GetTeam: React.FC<Props> = ({ team, stat }) => {
    return (
        <>
            {team === "local" && <LocalTeam stat={stat} />}
            {team === "guest" && <GuestTeam stat={stat} />}
        </>
    )
}

export default GetTeam