// import { FC, Fragment, useState } from "react";
import { FC, Fragment } from "react";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { increment, decrement } from "../../store/slices/statsSlice";
import tableCSS from './table.module.css'
import { Container } from "../container/Container";
import { ILocation } from "../../types";
// import { StatAction } from "../stat-action/StatAction";
import { useTranslation } from "react-i18next";
import { Title } from "../title/Title";
import { CheckRojo, CheckVerde } from "../../assets/webp/Webp";
export const Table: FC = () => {
  const { local, guest } = useAppSelector(state => state.stats)
  const { t } = useTranslation()
  // const [currentStatAction, setCurrentStatAction] = useState<ILocation>()
  const dispatch = useAppDispatch();
  const updateDecrementStat = ({ team, stat }: ILocation) => {
    // setCurrentStatAction({ team, stat })
    dispatch(decrement({ team, stat: stat as keyof typeof local, value: -1 }))
  }
  return (
    <Container>
      <section className={tableCSS.tbody}>
        <article style={{
          textAlign: 'center',
          gridColumn: 'span 3',
          fontSize: '1.5rem'
        }}>
          <Title level={2}>{t("stats")}</Title>
        </article>
        {Object.keys(local).map((stat) =>
          <Fragment key={stat}>
            <div className={tableCSS.stat_control}>
              <CheckRojo onClick={() => updateDecrementStat({ team: "local", stat })} />
              <span className={tableCSS.stat_value}>{local[stat as keyof typeof local]}</span>
              <CheckVerde onClick={() => dispatch(increment({ team: "local", stat: stat as keyof typeof local, value: 1 }))} />

            </div>
            <div className={tableCSS.stat_control}>
              <strong className={tableCSS.stat}>{t(stat)}</strong>
            </div>
            <div className={tableCSS.stat_control}>
              <CheckRojo onClick={() => dispatch(decrement({ team: "guest", stat: stat as keyof typeof guest, value: -1 }))} />
              <span className={tableCSS.stat_value}>{guest[stat as keyof typeof guest]}</span>
              <CheckVerde onClick={() => dispatch(increment({ team: "guest", stat: stat as keyof typeof guest, value: 1 }))} />
            </div>
          </Fragment>
        )}
      </section>
    </Container>
  )
}
