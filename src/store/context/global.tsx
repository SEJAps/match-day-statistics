import { FC, ReactNode } from "react";
import { GlobalContext, PropsGlobal } from ".";
import { useModal } from "../hooks/useModal";

type Props = {
  children: ReactNode
}

const GlobalCTX: FC<Props> = ({ children }) => {

  const value: PropsGlobal = {
    stat: 'juan',
    ...useModal()
  }

  return (
    <GlobalContext.Provider value={value}>
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalCTX