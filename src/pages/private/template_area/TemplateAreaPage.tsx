import { FC } from "react";
import templateAreaCSS from "./css/templateArea.module.css"
import { Link } from "react-router";

const TemplateAreaPage: FC = () => {
    return (
        <section className={templateAreaCSS.container}>
            <header>
                <h1 className={templateAreaCSS.heading}>Gestión de platilla</h1>
                <span className={templateAreaCSS.span}>Esta es la página que gestiona todo sobre como gestionar una plantilla</span>
            </header>
            <article className={templateAreaCSS.content}>
                <header className={templateAreaCSS.contentHeader}>
                    <h2 className={templateAreaCSS.subheading}>User Information</h2>
                    <span className={templateAreaCSS.span}>This is the user information</span>
                </header>
                <section className={templateAreaCSS.contentBody}>
                    <h3 className={templateAreaCSS.subsubheading}>User Name</h3>
                    <span className={templateAreaCSS.span}>This is the user name</span>
                </section>
            </article>
            <footer className={templateAreaCSS.footer}>
                <Link to="/private/stats">Partidos</Link>
                <Link to="/private/template">Plantilla</Link>
            </footer>
        </section>
    )
}

export default TemplateAreaPage;