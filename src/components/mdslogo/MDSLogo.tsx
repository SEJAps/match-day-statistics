import { FC } from "react";
import MDS_blanco from "./MDS_blanco.webp"
interface MDSLogoProps {
    width: number;
    height: number;
    alt?: string;
}
export const MDSLogo: FC<MDSLogoProps> = ({width,height, alt}) => <img src={MDS_blanco} alt={alt ?? "Logo"} width={width ?? 256} height={height ?? 128}/>