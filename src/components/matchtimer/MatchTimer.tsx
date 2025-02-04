import { useState, useEffect } from "react";
import timeCSS from "./MatchTimer.module.css";

export const MatchTimer = () => {
  const [time, setTime] = useState(0);
  const [extraTime, setExtraTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [half, setHalf] = useState<"first" | "second" | "finished" | null>(null);
  const [isExtraTime, setIsExtraTime] = useState(false);

  useEffect(() => {
    let timer: ReturnType<typeof setInterval>;
    if (isRunning) {
      timer = setInterval(() => {
        if (time < 2700) {
          setTime((prev) => prev + 1);
        } else {
          setIsExtraTime(true);
          setExtraTime((prev) => prev + 1);
        }
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning, time]);

  const startFirstHalf = () => {
    setTime(0);
    setExtraTime(0);
    setIsRunning(true);
    setHalf("first");
  };

  const endFirstHalf = () => {
    setIsRunning(false);
    setHalf("second");
  };

  const startSecondHalf = () => {
    setTime(0);
    setExtraTime(0);
    setIsRunning(true);
    setIsExtraTime(false);
  };

  const endSecondHalf = () => {
    setIsRunning(false);
    setHalf("finished");
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  return (
    <div className={timeCSS.match_controls}>
      <div className={timeCSS.half_controls}>
        <button
          className={timeCSS.btnTime}
          onClick={startFirstHalf}
          disabled={half !== null} // Solo activo al inicio
        >
          Iniciar 1ª Parte
        </button>
        <button
          className={timeCSS.btnTime}
          onClick={endFirstHalf}
          disabled={half !== "first"} // Solo activo durante la 1ª parte
        >
          Finalizar 1ª Parte
        </button>
      </div>

      <div className={timeCSS.half_controls}>
        <button
          className={timeCSS.btnTime}
          onClick={startSecondHalf}
          disabled={half !== "second"} // Solo activo tras finalizar 1ª parte
        >
          Iniciar 2ª Parte
        </button>
        <button
          className={timeCSS.btnTime}
          onClick={endSecondHalf}
          disabled={half !== "second"} // Solo activo durante la 2ª parte
        >
          Finalizar 2ª Parte
        </button>
      </div>

      <div className={timeCSS.timer_display}>
        <div className={timeCSS.timer}>
          <div className={timeCSS.timer_section}>
            <span>
              {half === "first" ? "1ª Parte:" : half === "second" ? "2ª Parte:" : "Finalizado"}
            </span>
            <span className={timeCSS.timer_main}>{formatTime(time)}</span>
            {isExtraTime && <span className="extra-time">+{formatTime(extraTime)}</span>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchTimer;
