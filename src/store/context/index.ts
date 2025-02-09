import { createContext } from "react";

export interface PropsGlobal {
  stat: string,
  isOpenModal: boolean,
  toggleModal: () => void
}
export const GlobalContext = createContext<PropsGlobal | null>(null);