import { useReducer, useEffect } from "react";
import timeCSS from "./MatchTimer.module.css";

// Definimos los tipos de acción
type ActionType =
  | { type: "START_FIRST_HALF" }
  | { type: "END_FIRST_HALF" }
  | { type: "START_SECOND_HALF" }
  | { type: "END_SECOND_HALF" }
  | { type: "TICK" }
  | { type: "RESET" };

// Estado inicial del partido
const initialState = {
  time: 0,
  extraTime: 0,
  half: null as "first" | "second" | "finished" | null,
  isRunning: false,
  firstHalfTime: 0,
  firstHalfExtra: 0,
  secondHalfTime: 0,
  secondHalfExtra: 0,
};

// Reducer para manejar el estado del partido
const matchReducer = (state: typeof initialState, action: ActionType): typeof initialState => {
  switch (action.type) {
    case "START_FIRST_HALF":
      return { ...initialState, half: "first", isRunning: true };
    case "END_FIRST_HALF":
      return {
        ...state,
        isRunning: false,
        half: "second",
        firstHalfTime: state.time,
        firstHalfExtra: state.extraTime,
        time: 0,
        extraTime: 0,
      };
    case "START_SECOND_HALF":
      return { ...state, isRunning: true };
    case "END_SECOND_HALF":
      return {
        ...state,
        isRunning: false,
        half: "finished",
        secondHalfTime: state.time,
        secondHalfExtra: state.extraTime,
      };
    case "TICK":
      if (!state.isRunning) return state;
      if (state.time < 2700) {
        return { ...state, time: state.time + 1 };
      }
      return { ...state, extraTime: state.extraTime + 1 };
    case "RESET":
      return initialState;
    default:
      return state;
  }
};

export const MatchTimer = () => {
  const [state, dispatch] = useReducer(matchReducer, initialState, () => initialState);

  useEffect(() => {
    if (!state.isRunning) return;
    const timer = setInterval(() => dispatch({ type: "TICK" }), 1000);
    return () => clearInterval(timer);
  }, [state.isRunning]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  return (
    <div className={timeCSS.match_controls}>
      {state.half !== "finished" ? (
        <>
          <div className={timeCSS.half_controls}>
            <button className={timeCSS.btnTime} onClick={() => dispatch({ type: "START_FIRST_HALF" })} disabled={state.half !== null}>
              Iniciar 1ª Parte
            </button>
            <button className={timeCSS.btnTime} onClick={() => dispatch({ type: "END_FIRST_HALF" })} disabled={state.half !== "first"}>
              Finalizar 1ª Parte
            </button>
          </div>
          <div className={timeCSS.half_controls}>
            <button className={timeCSS.btnTime} onClick={() => dispatch({ type: "START_SECOND_HALF" })} disabled={state.half !== "second"}>
              Iniciar 2ª Parte
            </button>
            <button className={timeCSS.btnTime} onClick={() => dispatch({ type: "END_SECOND_HALF" })} disabled={state.half !== "second"}>
              Finalizar 2ª Parte
            </button>
          </div>
          <div className={timeCSS.timer_display}>
            <span>{state.half === "first" ? "1ª Parte:" : "2ª Parte:"}</span>
            <span className={timeCSS.timer_main}>{formatTime(state.time)}</span>
            {state.extraTime > 0 && <span className="extra-time">+{formatTime(state.extraTime)}</span>}
          </div>
        </>
      ) : (
        <div className={timeCSS.results}>
          <h3>Resumen del partido:</h3>
          <p>1ª Parte: {formatTime(state.firstHalfTime)} +{formatTime(state.firstHalfExtra)}</p>
          <p>2ª Parte: {formatTime(state.secondHalfTime)} +{formatTime(state.secondHalfExtra)}</p>
          <button onClick={() => dispatch({ type: "RESET" })}>Reiniciar</button>
        </div>
      )}
    </div>
  );
};

export default MatchTimer;
