// import { FC, Fragment, useState } from "react";
import { FC, Fragment } from "react";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { decrement } from "../../store/slices/statsSlice";
import tableCSS from "./table.module.css";
import { Container } from "../container/Container";
import { TTeam } from "../../types";
// import { StatAction } from "../stat-action/StatAction";
import { useTranslation } from "react-i18next";
import { Title } from "../title/Title";
import { CheckRojo, CheckVerde } from "../../assets/webp/Webp";
import { removeLastMark } from "../../store/slices/markSlice";
import { useNavigate } from "react-router";
export const Table: FC = () => {
  const { local, guest } = useAppSelector((state) => state.stats);
  const goTo = useNavigate();
  const { t } = useTranslation();
  // const [currentStatAction, setCurrentStatAction] = useState<ILocation>()
  const dispatch = useAppDispatch();

  const updateDecrementStat = (team: TTeam, stat?: string) => {
    // setCurrentStatAction({ team, stat })
    dispatch(
      decrement({ team: team, stat: stat as keyof typeof local, value: -1 }),
    );
    dispatch(removeLastMark({ team }));
  };
  const updateIncrementStat = (team: TTeam, stat?: string) => {
    console.log(team);
    // setCurrentStatAction({ team, stat })
    goTo(`/marcas/${stat}`);
  };
  return (
    <Container>
      <section className={tableCSS.tbody}>
        <article
          style={{
            textAlign: "center",
            gridColumn: "span 3",
            fontSize: "1.5rem",
          }}
        >
          <Title level={2}>{t("stats")}</Title>
        </article>
        {Object.keys(local).map((stat) => (
          <Fragment key={stat}>
            <div className={tableCSS.stat_control}>
              <CheckRojo
                image_down
                onClick={() =>
                  updateDecrementStat("local", stat as keyof typeof local)
                }
              />
              <span className={tableCSS.stat_value}>
                {local[stat as keyof typeof local]}
              </span>
              <CheckVerde
                image_down
                onClick={() =>
                  updateIncrementStat("local", stat as keyof typeof local)
                }
              />
            </div>
            <div className={tableCSS.stat_control}>
              <strong className={tableCSS.stat}>{t(stat)}</strong>
            </div>
            <div className={tableCSS.stat_control}>
              <CheckRojo
                image_down
                onClick={() =>
                  updateDecrementStat("guest", stat as keyof typeof guest)
                }
              />
              <span className={tableCSS.stat_value}>
                {guest[stat as keyof typeof guest]}
              </span>
              <CheckVerde
                image_down
                onClick={() =>
                  updateIncrementStat("guest", stat as keyof typeof local)
                }
              />
            </div>
          </Fragment>
        ))}
      </section>
    </Container>
  );
};
