import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/store";
import {
  incrementExtraTime,
  incrementTime,
  nextPeriod,
  startPauseResume,
} from "../../store/slices/newTimerSlice";

const NewMatchTimer: React.FC = () => {
  const dispatch = useAppDispatch();
  const { time, isRunning, period, extraTime, isExtraTimeRunning } =
    useAppSelector((state) => state.newTimer);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (isRunning) {
      interval = setInterval(() => {
        dispatch(incrementTime());
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning, dispatch]);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (isExtraTimeRunning) {
      interval = setInterval(() => {
        dispatch(incrementExtraTime());
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isExtraTimeRunning, dispatch]);

  return (
    <div>
      <h1>
        Tiempo: {Math.floor(time / 60)}:
        {(time % 60).toString().padStart(2, "0")}{" "}
        {period === 2 || period === 4 ? `(+${extraTime})` : ""}
      </h1>
      <h2>
        Periodo:{" "}
        {period === 1
          ? "Primer tiempo"
          : period === 2
            ? "Descuento primer tiempo"
            : period === 3
              ? "Segundo tiempo"
              : period === 4
                ? "Descuento segundo tiempo"
                : "Finalizado"}
      </h2>
      <button onClick={() => dispatch(startPauseResume())}>
        {isRunning ? "Pausar" : period < 5 ? "Iniciar/Reanudar" : "Finalizado"}
      </button>
      {period === 1 && time >= 45 * 60 && (
        <button onClick={() => dispatch(nextPeriod())}>
          Iniciar descuento
        </button>
      )}
      {period === 2 && (
        <button onClick={() => dispatch(nextPeriod())}>
          Finalizar primer tiempo
        </button>
      )}
      {period === 3 && time >= 45 * 60 && (
        <button onClick={() => dispatch(nextPeriod())}>
          Iniciar descuento
        </button>
      )}
      {period === 4 && (
        <button onClick={() => dispatch(nextPeriod())}>
          Finalizar partido
        </button>
      )}
    </div>
  );
};

export default NewMatchTimer;
