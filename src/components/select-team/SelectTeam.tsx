import { FC } from "react";
import { RootState, useAppSelector } from "../../store/store";
import teamSelectCSS from './team-select.module.css'
import { useGlobalCtx } from "../../store/hooks/useGlobalCtx";

export const TeamSelect: FC = () => {
  const { localName, guestName } = useAppSelector((state: RootState) => state.stats)
  const { toggleModal } = useGlobalCtx()
  // const handlerViewAddMArk = () => {
  //   toggleAddMarkModal()
  // }
  const handlerTeamSelected = (name: string) => {
    setTimeout(() => {
      alert(`Seguro que quieres selecionar este equipo ${name}?`)
      toggleModal()
    }, 300)

  }
  return (
    <>
      <button className={teamSelectCSS.navLink} onClick={() => handlerTeamSelected(localName)}>
        {localName}
      </button>
      <div className={teamSelectCSS.textCenter}>
        <strong className={teamSelectCSS.strong}>
          VS
        </strong>
      </div>
      <button className={teamSelectCSS.navLink} onClick={() => handlerTeamSelected(guestName)}>
        {guestName}
      </button>

    </>
  )
}