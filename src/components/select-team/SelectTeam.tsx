import { FC } from "react";
import { RootState, useAppSelector } from "../../store/store";
import { useGlobalCtx } from "../../store/hooks/useGlobalCtx";
import { ModalAddMark } from "../modal/ModalAddMark";
import viewMarks from '../../assets/webp/zonas_campo.webp'

export const SelectTeam: FC = () => {
  const { localName, guestName } = useAppSelector((state: RootState) => state.stats)
  const { toggleAddMarkModal } = useGlobalCtx()
  const handlerViewAddMArk = () => {
    toggleAddMarkModal()
  }
  return (
    <>
      <ModalAddMark nameModal="view">
        <section style={{
          display: 'grid',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100svw',
          height: '100svh',
          background: 'gray',
          backgroundImage: `url(${viewMarks})`,
          backgroundSize: '100vw 100vh',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}>

        </section>
      </ModalAddMark>
      <button style={{
        display: 'inline-flex',
        padding: '1rem',
        fontSize: '4rem',
        fontWeight: '900',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid silver',
        backgroundColor: 'transparent',
        borderRadius: '8px',
        color: 'silver',
        textShadow: '2px 2px 1px black'
      }} onClick={handlerViewAddMArk}>
        {localName}
      </button>
      <div style={{
        textAlign: 'center'
      }}>
        <strong style={{
          fontSize: '8rem',
          fontWeight: '900',
        }}>
          VS
        </strong>
      </div>
      <button style={{
        display: 'inline-flex',
        padding: '1rem',
        fontSize: '4rem',
        fontWeight: '900',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid silver',
        backgroundColor: 'transparent',
        borderRadius: '8px',
        color: 'silver',
        textShadow: '2px 2px 1px black'
      }} onClick={handlerViewAddMArk}>
        {guestName}
      </button>
    </>
  )
}