import { FC } from "react";
import mdsImgCSS from "./css/mds-image.module.css"

type MdsImageVariants = "default" | "fixed"

interface MdsImageProps {
  src: string,
  alt: string
  width: number,
  height: number,
  variant?: MdsImageVariants,
  onClick?: () => void
}

export const MdsImage: FC<MdsImageProps> = (props) => {
  const { src, alt, width, height, variant, onClick } = props

  const classList = {
    default: mdsImgCSS.default,
    fixed: mdsImgCSS.fixed,
  }

  return props && (
    <img onClick={onClick} className={variant ? classList[variant] : classList['default']} src={src} alt={alt} width={width} height={height} />
  )
}