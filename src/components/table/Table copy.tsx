// import { FC, Fragment, useState } from "react";
import { FC, FormEvent, Fragment } from "react";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { increment, decrement } from "../../store/slices/statsSlice";
import tableCSS from "./table.module.css";
import { ArrowLeft } from "../../assets/icons/ArrowLeft";
import { ArrowRight } from "../../assets/icons/ArrowRight";
import { Container } from "../container/Container";
import { ILocation } from "../../types";
// import { StatAction } from "../stat-action/StatAction";
import { useTranslation } from "react-i18next";

export const Table: FC = () => {
  const { local, guest, guestName, localName } = useAppSelector(
    (state) => state.stats,
  );
  // const [currentStatAction, setCurrentStatAction] = useState<ILocation>()
  const { t, i18n } = useTranslation();

  const dispatch = useAppDispatch();

  const updateDecrementStat = ({ team, stat }: ILocation) => {
    // setCurrentStatAction({ team, stat })
    dispatch(decrement({ team, stat: stat as keyof typeof local, value: -1 }));
  };
  const handlerInput = (event: FormEvent<HTMLSelectElement>) => {
    const value: string = (event.target as HTMLSelectElement).value;
    const formData = new FormData();
    formData.set("lang", value);

    i18n.changeLanguage(`${formData.get("lang")}`);
  };

  return (
    <Container>
      <>
        {/* {currentStatAction && <>
          <StatAction stat={currentStatAction.stat} />
          {JSON.stringify(currentStatAction)}
        </>} */}

        <section className={tableCSS.thead}>
          <article className={tableCSS.tr}>
            <h2 className={tableCSS.title}>Local</h2>
            <strong className={tableCSS.goal}>{local.goals}</strong>
            <h3 className={tableCSS.nameTeam}>{localName}</h3>
          </article>
          <article className={tableCSS.tr}>
            <h2 className={`${tableCSS.title} ${tableCSS.titlExtra}`}>
              Estadística
            </h2>
          </article>
          <article className={tableCSS.tr}>
            <h2 className={tableCSS.title}>Visitante</h2>
            <strong className={tableCSS.goal}>{guest.goals}</strong>
            <h3 className={tableCSS.nameTeam}>{guestName}</h3>
          </article>
        </section>
        <section className={tableCSS.tbody}>
          <div className={tableCSS.lang}>
            <label htmlFor="lang">
              <strong>Seleciona idioma</strong>
              <select id="lang" name="lang" onInput={handlerInput}>
                {/* <option disabled>ES</option> */}
                <option value="es">ES</option>
                <option value="en">EN</option>
                <option value="ca">Cat</option>
                <option value="fr">FR</option>
              </select>
            </label>
          </div>
          {Object.keys(local).map((stat) => (
            <Fragment key={stat}>
              <div className={tableCSS.stat_control}>
                <button
                  className={`${tableCSS.stat_button} ${tableCSS.subtract_stat}`}
                  onClick={() => updateDecrementStat({ team: "local", stat })}
                >
                  <ArrowLeft />
                </button>

                <span className={tableCSS.stat_value}>
                  {local[stat as keyof typeof local]}
                </span>
                <button
                  className={`${tableCSS.stat_button} ${tableCSS.add_stat}`}
                  onClick={() =>
                    dispatch(
                      increment({
                        team: "local",
                        stat: stat as keyof typeof local,
                        value: 1,
                      }),
                    )
                  }
                >
                  <ArrowRight />
                </button>
              </div>
              <div className={tableCSS.stat_control}>
                <strong className={tableCSS.stat}>{t(stat)}</strong>
              </div>
              <div className={tableCSS.stat_control}>
                <button
                  className={`${tableCSS.stat_button} ${tableCSS.subtract_stat}`}
                  onClick={() =>
                    dispatch(
                      decrement({
                        team: "guest",
                        stat: stat as keyof typeof guest,
                        value: -1,
                      }),
                    )
                  }
                >
                  <ArrowLeft />
                </button>
                <span className={tableCSS.stat_value}>
                  {guest[stat as keyof typeof guest]}
                </span>
                <button
                  className={`${tableCSS.stat_button} ${tableCSS.add_stat}`}
                  onClick={() =>
                    dispatch(
                      increment({
                        team: "guest",
                        stat: stat as keyof typeof guest,
                        value: 1,
                      }),
                    )
                  }
                >
                  <ArrowRight />
                </button>
              </div>
            </Fragment>
          ))}
        </section>
      </>
    </Container>
  );
};
