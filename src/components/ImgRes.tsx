import { FC, useEffect, useState } from "react";


const ImgRes: FC = () => {
  const [isMobile, setIsMobile] = useState<boolean>();

  const images = {
    desktop: 'webp/picture-desktop-899x604.webp',
    tablet: 'webp/picture-tablet-768x516.webp',
    mobil: 'webp/picture-mobile-375x667.webp'
  }

  useEffect(() => {
    (() => {
      globalThis.addEventListener("resize", () => {
        setIsMobile(() => globalThis.innerWidth < 768)
      })
    })()
  }, [isMobile, setIsMobile])
  return (
    isMobile ? <img src={images.mobil} alt={images.mobil} /> : <img src={images.desktop} alt={images.desktop} />
  );
};

export default ImgRes;

{/* <img className={marcasCSS.marcas} src={imgPng} alt="Marcas png" /> */ }
{/* <img src='./webp/picture-desktop-899x604.webp'
        srcSet={`./webp/picture-desktop-899x604.webp 1024w, 
             ./webp/picture-mobile-375x667.webp 768w, 
              ./webp/picture-mobile-375x667.webp 480w`}
        sizes="(width:1024px) 100vw, 
              (width:768px) 768px, (width<480px) 100%"
        alt="Descripción de la imagen" /> */}
//   <img
//   src="webp/picture-desktop-899x604.webp 1024w"
//   srcSet="webp/picture-desktop-899x604.webp 1024w, webp/picture-mobile-375x667.webp 375w"
//   sizes="(max-width: 1024px) 100vw, (min-width: 768px) 768px, (max-width: 480px) 100%"
//   alt="asdasd"
// />