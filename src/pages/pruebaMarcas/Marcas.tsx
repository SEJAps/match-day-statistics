import { FC, useEffect } from "react";
// import desktop from './picture-desktop-899x604.webp';
// import tablet from './picture-tablet-768x516.webp';
// import mobile from './picture-mobile-375x667.webp';
import marcasCSS from './marcas.module.css'
import ImgRes from "../../components/ImgRes";

const Marcas: FC = () => {

  useEffect(() => {

  })

  return (
    <section className={marcasCSS.campo}>


      <ImgRes />

    </section>
  )
}

export default Marcas;