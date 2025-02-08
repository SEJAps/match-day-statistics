import { updateTeamName } from "../../store/slices/statsSlice";
import { RootState } from "../../store/store";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { createStatsByMatchActive } from "../../utils";
import { Container } from "../container/Container";
import teaminputCSS from './teaminput.module.css'
import { Logout } from "../../assets/icons/Logout";
import Layout from "../../layouts/Layout";
const TeamInput = () => {
  const dispatch = useAppDispatch();
  const { localName, guestName, local, guest, existStats } = useAppSelector((state: RootState) => state.stats);
  const { authentificate, user } = useAppSelector((state: RootState) => state.user);

  const handlerSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const form = event.target as HTMLFormElement
    const formCotrol = new FormData(form);
    const entries = [...formCotrol.entries()]
    const unike = [... new Set(entries.map(entrie => entrie[1]).flat())]

    dispatch(updateTeamName({ team: "local", name: unike[0] as string }))
    dispatch(updateTeamName({ team: "guest", name: unike[1] as string }))
    createStatsByMatchActive({ localName: unike[0] as string, guestName: unike[1] as string, local, guest, user: user });

    globalThis.location.reload()
  }


  return authentificate && !existStats && (

    <Layout src="./addteams.jpg">
      <Container>
        <header className={teaminputCSS.header}>
          <Logout />
        </header>
        <form onSubmit={handlerSubmit} className={teaminputCSS.create_stats}>
          <article className={teaminputCSS.form_control}>
            <input
              type="text"
              id="name__local"
              name="name__local"
              className="team-input"
              defaultValue={localName}
              placeholder="Equipo Local"
            />
            <span className={teaminputCSS.vs}>VS</span>
            <input
              type="text"
              id="name__guest"
              name="name__guest"
              className="team-input"
              defaultValue={guestName}
              placeholder="Equipo Visitante"
            />
          </article>
          <footer className={teaminputCSS.footer}>
            <button className={teaminputCSS.btn_create} type="submit">Crear estadística</button>
          </footer>
        </form>
      </Container>
    </Layout>


  );
};

export default TeamInput;
