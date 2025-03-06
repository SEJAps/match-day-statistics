import { FC } from "react";
import { UserPanel } from "../../components/panel/UserPanel";
import UserPanelLayout from "../../layouts/UserPanelLayout";
import { Table } from "../../components/table/Table";
import { Actions } from "../../components/actions/Actions";

const Stats: FC = () => {
  return (
    <section>
      <UserPanel />
      <UserPanelLayout />
      <Table />
      <Actions />
    </section>
  );
};

export default Stats;
