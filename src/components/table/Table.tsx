import { FC, Fragment } from "react";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { increment, decrement } from "../../store/slices/statsSlice";
import tableCSS from './tablev.module.css'
import { ArrowLeft } from "../../assets/icons/ArrowLeft";
import { ArrowRight } from "../../assets/icons/ArrowRight";
import { Container } from "../container/Container";
import MatchTimer from "../matchtimer/MatchTimer";

export const Table: FC = () => {
  const { local, guest, guestName, localName } = useAppSelector(state => state.stats)
  const dispatch = useAppDispatch();
  return (
    <Container>
      <>
        <MatchTimer />
        <section className={tableCSS.thead}>
          <article className={tableCSS.tr}>
            <h2 className={tableCSS.title}>Local</h2>
            <h3 className={tableCSS.nameTeam}>{localName}</h3>
          </article>
          <article className={tableCSS.tr}>
            <h2 className={`${tableCSS.title} ${tableCSS.titlExtra}`}>Estadística</h2>
          </article>
          <article className={tableCSS.tr}>
            <h2 className={tableCSS.title}>Visitante</h2>
            <h3 className={tableCSS.nameTeam}>{guestName}</h3>
          </article>
        </section>
        <section className={tableCSS.tbody}>
          {Object.keys(local).map((stat) =>
            <Fragment key={stat}>
              <div className={tableCSS.stat_control}>
                <button
                  className={`${tableCSS.stat_button} ${tableCSS.subtract_stat}`}
                  onClick={() => dispatch(decrement({ team: "local", stat: stat as keyof typeof local, value: -1 }))}>
                  <ArrowLeft />
                </button>
                <span className={tableCSS.stat_value}>{local[stat as keyof typeof local]}</span>
                <button
                  className={`${tableCSS.stat_button} ${tableCSS.add_stat}`}
                  onClick={() => dispatch(increment({ team: "local", stat: stat as keyof typeof local, value: 1 }))}>
                  <ArrowRight />
                </button>
              </div>
              <div className={tableCSS.stat_control}>
                <strong className={tableCSS.stat}>{stat}</strong>
              </div>
              <div className={tableCSS.stat_control}>
                <button className={`${tableCSS.stat_button} ${tableCSS.subtract_stat}`}
                  onClick={() => dispatch(decrement({ team: "guest", stat: stat as keyof typeof guest, value: -1 }))}>
                  <ArrowLeft />
                </button>
                <span className={tableCSS.stat_value}>{guest[stat as keyof typeof guest]}</span>
                <button className={`${tableCSS.stat_button} ${tableCSS.add_stat}`}
                  onClick={() => dispatch(increment({ team: "guest", stat: stat as keyof typeof guest, value: 1 }))}>
                  <ArrowRight />
                </button>
              </div>
            </Fragment>
          )}
        </section>
      </>
    </Container>
  )
}
