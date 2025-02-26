import { FC, ReactNode } from "react";
import { Modal } from "./Modal";

export const ModalSelectTeam: FC<{ children: ReactNode, nameModal?: string }> = ({ children, nameModal }) => {
  return (
    <Modal nameModal={nameModal}>
      {children}
    </Modal>
  )
}