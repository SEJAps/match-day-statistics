import { FC, ReactNode } from "react";
import { Modal } from "./Modal";
import { useGlobalCtx } from "../../store/hooks/useGlobalCtx";

export const ModalAddMark: FC<{ children: ReactNode, nameModal?: string }> = ({ children, nameModal }) => {
  const { isOpenAddMarkModal } = useGlobalCtx()

  return (
    isOpenAddMarkModal && <Modal nameModal={nameModal}>
      {children}
    </Modal>
  )
}