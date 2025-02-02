import { FC } from "react";
import { Props } from "../../types";
import containerCSS from './container.module.css'

export const Container: FC<Props> = ({ children }) => {
  return <section className={containerCSS.container}>
    {children}
  </section>
}