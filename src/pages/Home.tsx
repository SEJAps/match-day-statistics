import { FC } from "react";
import TeamInput from '../components/TeamInput';
import { Actions } from '../components/Actions';
import { Table } from '../components/Table';
import { RootState, useAppSelector } from '../store/store';
import { UserPanel } from '../components/UserPanel';
export const Home: FC = () => {

  const { existStats } = useAppSelector((state: RootState) => state.stats)
  const { authentificate } = useAppSelector((state: RootState) => state.user);
  return (
    <div className="container">
      {authentificate && (
        <>
          <TeamInput />
          <UserPanel />
          {existStats &&
            <>
              <div className="stats-container">
                <div className="stats-display">
                  <div id="statsTable">
                    <Table />
                  </div>
                </div>
              </div>
              <Actions />
            </>
          }
        </>
      )
      }
    </div>
  )
}