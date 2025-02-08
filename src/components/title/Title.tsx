import { FC, ReactNode } from "react";
import titleCSS from './title.module.css'

type Props = {
  children?: ReactNode,
  level?: number,
  className?: string,
}

export const Title: FC<Props> = ({ children, level, className }) => {

  if (level === 1) return <h1 className={`${titleCSS.busine} ${className}`}>{children}</h1>
  if (level === 2) return <h2 className={className}>{children}</h2>
  if (level === 3) return <h3 className={className}>{children}</h3>
  if (level === 4) return <h4 className={className}>{children}</h4>
  if (level === 5) return <h5 className={className}>{children}</h5>
  if (level === 6) return <h6 className={className}>{children}</h6>

  return <h1 className={`${titleCSS.busine} ${className}`}>{children}</h1>
}