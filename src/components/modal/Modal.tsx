import { FC, ReactNode } from "react";
import { createPortal } from "react-dom";
import { useGlobalCtx } from "../../store/hooks/useGlobalCtx";
import modalCSS from './modal.module.css'

type Props = {
  children: ReactNode
}

export const Modal: FC<Props> = ({ children }) => {
  const { toggleModal } = useGlobalCtx()
  return createPortal(
    <section className={modalCSS.modal}>
      <article className={modalCSS.insideModal}>
        <header className={modalCSS.header}>
          <button className={modalCSS.closeModal} type="button" onClick={toggleModal}>Close Modal</button>
        </header>
        <section className={modalCSS.contentModal}>
          {children}
        </section>
      </article>
    </section>, document.querySelector("body") as HTMLElement,)
}