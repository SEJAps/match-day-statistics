import { FC, ReactNode } from "react";

type Props = {
  children?: ReactNode,
  level: number
}

export const Title: FC<Props> = ({ children, level }) => {

  if (level === 1) <h1>{children}</h1>
  if (level === 2) <h2>{children}</h2>
  if (level === 3) <h3>{children}</h3>
  if (level === 4) <h4>{children}</h4>
  if (level === 5) <h5>{children}</h5>
  if (level === 6) <h6>{children}</h6>
  return false
}