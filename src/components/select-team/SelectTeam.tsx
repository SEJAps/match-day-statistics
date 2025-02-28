import { FC } from "react";
import { RootState, useAppSelector } from "../../store/store";
import teamSelectCSS from './team-select.module.css'
import { useGlobalCtx } from "../../store/hooks/useGlobalCtx";

export const TeamSelect: FC = () => {
  const { localName, guestName } = useAppSelector((state: RootState) => state.stats)
  const { closeModal } = useGlobalCtx()
  // const handlerViewAddMArk = () => {
  //   toggleAddMarkModal()
  // }

  const handlerTeamSelected = () => {
    setTimeout(() => {
      // alert(`Seguro que quieres seleccionar este equipo? "${name}"`)
      closeModal()
    }, 300)

  }
  return (
    <>
      <button className={teamSelectCSS.navLink} onClick={() => handlerTeamSelected()}>
        {localName}
      </button>
      <div className={teamSelectCSS.textCenter}>
        <strong className={teamSelectCSS.strong}>
          VS
        </strong>
      </div>
      <button className={teamSelectCSS.navLink} onClick={() => handlerTeamSelected()}>
        {guestName}
      </button>

    </>
  )
}