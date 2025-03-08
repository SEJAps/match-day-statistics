import { FC } from "react";
interface MDSLogo {
    width: number;
    height: number;
    alt?: string;
}
export const MDSLogo: FC<MDSLogo> = ({width,height, alt}) => <img src="./webp/MDS_blanco.webp" alt={alt ?? "Logo"} width={width ?? 256} height={height ?? 128}/>