import { FC, ReactNode } from "react";
import { createPortal } from "react-dom";
import { useGlobalCtx } from "../../store/hooks/useGlobalCtx";
import modalCSS from './modal.module.css'

type Props = {
  children: ReactNode,
  nameModal?: string
}

export const Modal: FC<Props> = ({ children, nameModal }) => {
  const { toggleModal, toggleAddMarkModal } = useGlobalCtx()

  return createPortal(
    <section className={modalCSS.modal}>
      <article className={modalCSS.insideModal}>
        <header className={modalCSS.header}>
          {nameModal === "team" && <button className={modalCSS.closeModal} type="button" onClick={toggleModal}>X</button>}
          {nameModal === "view" && <button className={modalCSS.closeModal} type="button" onClick={toggleAddMarkModal}>X</button>}
        </header>
        <section className={modalCSS.contentModal}>
          {children}
        </section>
      </article>
    </section>, document.querySelector("body") as HTMLElement,)
}