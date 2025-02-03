import { CSSProperties, FC } from "react";
import { Props } from "../types";

type Sticky = {
  styles?: CSSProperties;
}

export const Sticky: FC<Props & Sticky> = ({ children, styles }) => {

  return (
    <section style={{
      ...styles,
      position: 'sticky',
      top: '0',
      zIndex: 50
    }}>
      {children}
    </section>
  )
}