import { FC } from "react";
import { Actions } from '../components/actions/Actions';
import { Table } from '../components/table/Table';
import { RootState, useAppSelector } from '../store/store';
import { UserPanel } from '../components/panel/UserPanel';
import TeamInput from '../components/create-stats/TeamInput';
import Layout from "../layouts/Layout";
import UserPanelLayout from "../layouts/UserPanelLayout";
import { ModalSelectTeam } from "../components/modal/ModalSelectTeam";
import { SelectTeam } from "../components/select-team/SelectTeam";
// import { useTranslation } from "react-i18next";

export const Home: FC = () => {
  // const { t } = useTranslation()
  const { existStats } = useAppSelector((state: RootState) => state.stats)
  const { authentificate } = useAppSelector((state: RootState) => state.user);
  return authentificate && (
    <Layout>
      <ModalSelectTeam nameModal="team">
        <SelectTeam />
      </ModalSelectTeam>
      <TeamInput />
      <UserPanel />
      {existStats &&
        <>
          <UserPanelLayout />
          <Table />
          <Actions />
        </>
      }
    </Layout>
  )
}