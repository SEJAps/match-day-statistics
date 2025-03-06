import { FC } from "react";
import { RootState, useAppSelector } from "../../store/store";
import teamSelectCSS from './team-select.module.css'
import { TTeam } from "../../types";

export const TeamSelect: FC<{teamSelected: (team: TTeam) => void}> = ({teamSelected}) => {
  const { localName, guestName } = useAppSelector((state: RootState) => state.stats)
  return (
    <div className={teamSelectCSS.container}>
      <button className={teamSelectCSS.navLink} onClick={() => teamSelected("local")}>
        {localName}
      </button>
      <div className={teamSelectCSS.textCenter}>
        <strong className={teamSelectCSS.strong}>
          VS
        </strong>
      </div>
      <button className={teamSelectCSS.navLink} onClick={() => teamSelected("guest")}>
        {guestName}
      </button>

    </div>
  )
}