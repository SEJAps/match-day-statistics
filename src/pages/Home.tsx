import { FC } from "react";
import TeamInput from '../components/create-stats/TeamInput';
import { Actions } from '../components/actions/Actions';
import { Table } from '../components/table/Table';
import { RootState, useAppSelector } from '../store/store';
import { UserPanel } from '../components/panel/UserPanel';
import { Container } from "../components/container/Container";
export const Home: FC = () => {

  const { existStats } = useAppSelector((state: RootState) => state.stats)
  const { authentificate } = useAppSelector((state: RootState) => state.user);
  return (authentificate && (
    <>
      <TeamInput />
      <UserPanel />
      {existStats &&
        <Container>
          <Table />
          <Actions />
        </Container>
      }
    </>
  )


  )
}