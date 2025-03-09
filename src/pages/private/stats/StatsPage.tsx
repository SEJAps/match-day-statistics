import { FC } from "react";
import UserPanelLayout from "../../../layouts/UserPanelLayout";
import { Table } from "../../../components/table/Table";
import { Actions } from "../../../components/actions/Actions";
import statsCSS from "./css/stats.module.css";
import { Link } from "react-router";
import { SelectLanguage } from "../../../components/select-language/SelectLanguage";

const Stats: FC = () => {
  return (
    <section className={statsCSS.container}>
      <header className={statsCSS.header}>
        <SelectLanguage />
        <UserPanelLayout />
      </header>
      <article className={statsCSS.content}>
        <Table />
        <Actions />
      </article>
      <footer className={statsCSS.footer}>
        <Link to="/private/person-area">Area Personal</Link>
        <Link to="/private/template">Plantilla</Link>
      </footer>
    </section>
  );
};

export default Stats;
