import { FC } from "react";
import personalAreaCSS from "./css/personalArea.module.css"
import { Link } from "react-router";

const PersonAreaPage: FC = () => {
    return (
        <section className={personalAreaCSS.container}>
            <header>
                <h1 className={personalAreaCSS.heading}>Personal Area</h1>
                <span className={personalAreaCSS.span}>This is the personal area of the user</span>
            </header>
            <article className={personalAreaCSS.content}>
                <header className={personalAreaCSS.contentHeader}>
                    <h2 className={personalAreaCSS.subheading}>User Information</h2>
                    <span className={personalAreaCSS.span}>This is the user information</span>
                </header>
                <section className={personalAreaCSS.contentBody}>
                    <h3 className={personalAreaCSS.subsubheading}>User Name</h3>
                    <span className={personalAreaCSS.span}>This is the user name</span>
                </section>
            </article>
            <footer className={personalAreaCSS.footer}>
                <Link to="/private/stats">Partidos</Link>
                <Link to="/private/template">Plantilla</Link>
            </footer>
        </section>
    )
}

export default PersonAreaPage;