import { FC } from "react";
import { Actions } from '../components/actions/Actions';
import { Table } from '../components/table/Table';
import { RootState, useAppSelector } from '../store/store';
import { UserPanel } from '../components/panel/UserPanel';
import TeamInput from '../components/create-stats/TeamInput';
import Layout from "../layouts/Layout";
import UserPanelLayout from "../layouts/UserPanelLayout";
import { Modal } from "../components/modal/Modal";
import { Title } from "../components/title/Title";
import { useGlobalCtx } from "../store/hooks/useGlobalCtx";

export const Home: FC = () => {
  const { isOpenModal } = useGlobalCtx()
  const { existStats } = useAppSelector((state: RootState) => state.stats)
  const { authentificate } = useAppSelector((state: RootState) => state.user);
  return authentificate && (
    <Layout>
      {isOpenModal && <Modal>
        <button>Local</button>
        <Title level={1}>VS</Title>
        <button>Visitante</button>
      </Modal>}
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