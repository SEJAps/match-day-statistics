import { createContext } from "react";

export interface PropsGlobal {
  stat: string,
  isOpenModal: boolean,
  isOpenAddMarkModal: boolean,
  openModal: () => void,
  closeModal: () => void,
  toggleModal: () => void,
  toggleAddMarkModal: () => void
}
export const GlobalContext = createContext<PropsGlobal | null>(null);