import { FC, ReactNode } from "react";
import { Modal } from "./Modal";
import { useGlobalCtx } from "../../store/hooks/useGlobalCtx";

export const ModalSelectTeam: FC<{ children: ReactNode, nameModal?: string }> = ({ children, nameModal }) => {
  const { isOpenModal } = useGlobalCtx()

  return (
    isOpenModal && <Modal nameModal={nameModal}>
      {children}
    </Modal>
  )
}