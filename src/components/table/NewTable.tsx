import { FC } from "react";
import { useAppSelector } from "../../store/store";

const NewTable: FC = () => {
  const { local, guest } = useAppSelector((state) => state.marks);
  const { guestName, localName } = useAppSelector((state) => state.stats);

  const combinedTEam = [
    ...new Set([
      ...local.map((rec) => rec.stat),
      ...guest.map((rec) => rec.stat),
    ]),
  ];
  const teamNames = [
    ...new Set([
      ...local.map((rec) => rec.team),
      ...guest.map((rec) => rec.team),
    ]),
  ];
  console.log(combinedTEam, teamNames);
  return (
    <div
      style={{
        display: "grid",
        width: "100%",
        gridTemplateColumns: "1fr 1fr",
      }}
    >
      <div>
        <h1 style={{ textAlign: "center" }}>{localName}</h1>
        {local &&
          local.map((mark_local, index) => (
            <section key={index}>
              <article
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                <button>-</button>
                <strong style={{ textTransform: "uppercase" }}>
                  {mark_local.stat}
                </strong>
                <button>+</button>
              </article>
            </section>
          ))}
      </div>
      <div>
        <h1 style={{ textAlign: "center" }}>{guestName}</h1>
        {guest &&
          guest.map((mark_guest, index) => (
            <section key={index}>
              <article
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                <button>-</button>
                <strong style={{ textTransform: "uppercase" }}>
                  {mark_guest.stat}
                </strong>
                <button>+</button>
              </article>
            </section>
          ))}
      </div>
    </div>
  );
};

export default NewTable;
