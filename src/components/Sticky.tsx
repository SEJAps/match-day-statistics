import { FC } from "react";
import { Props } from "../types";

interface Sticky {
  bg?: string
}

export const Sticky: FC<Props & Sticky> = ({ children, bg }) => {

  return (
    <section style={{
      position: 'sticky',

      top: '0',
      background: bg,
      zIndex: 50
    }}>
      {children}
    </section>
  )
}