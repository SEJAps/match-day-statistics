import { useEffect, useState } from "react";
import timeCSS from "./MatchTimer.module.css";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "../../store/store";
import {
  startFirstHalf,
  endFirstHalf,
  startSecondHalf,
  endSecondHalf,
  tick,
  pause,
  reset,
  setExtraTime,
} from "../../store/slices/timerSlice";

export const MatchTimer = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const {
    isRunning,
    half,
    time,
    extraTime,
    firstHalfTime,
    secondHalfTime,
    firstHalfExtra,
    secondHalfExtra,
    isExtraTimeActive,
  } = useAppSelector((state) => state.timer);

  const [inputExtra, setInputExtra] = useState<number>(0);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  useEffect(() => {
    if (!isRunning) return;
    const timer = setInterval(() => dispatch(tick()), 1000);
    return () => clearInterval(timer);
  }, [isRunning, dispatch]);

  const confirmExtraTime = () => {
    dispatch(setExtraTime(inputExtra));
    setInputExtra(0);
  };

  return (
    <div className={timeCSS.match_controls}>
      {half !== "finished" ? (
        <>
          <div className={timeCSS.half_controls}>
            <button
              className={timeCSS.btnTime}
              onClick={() => dispatch(startFirstHalf())}
              disabled={half !== null}
            >
              {t("start")} 1ª {t("part")}
            </button>
            <button
              className={timeCSS.btnTime}
              onClick={() => dispatch(endFirstHalf())}
              disabled={half !== "first"}
            >
              {t("finish")} 1ª {t("part")}
            </button>
          </div>
          <div className={timeCSS.half_controls}>
            <button
              className={timeCSS.btnTime}
              onClick={() => dispatch(startSecondHalf())}
              disabled={half !== "second"}
            >
              {t("start")} 2ª {t("part")}
            </button>
            <button
              className={timeCSS.btnTime}
              onClick={() => dispatch(endSecondHalf())}
              disabled={half !== "second"}
            >
              {t("finish")} 2ª {t("part")}
            </button>
          </div>
          <div className={timeCSS.timer_display}>
            <span>{half === "first" ? t("part") : `${t("part")}:`}</span>
            <span className={timeCSS.timer_main}>{formatTime(time)}</span>
            {extraTime > 0 && (
              <span className="extra-time">+{formatTime(extraTime)}</span>
            )}
          </div>

          {isExtraTimeActive && (
            <div className={timeCSS.extra_time_input}>
              <input
                type="number"
                placeholder={t("enter_extra_time")}
                value={inputExtra}
                onChange={(e) => setInputExtra(Number(e.target.value))}
              />
              <button onClick={confirmExtraTime}>{t("confirm")}</button>
            </div>
          )}

          <div className={timeCSS.controls}>
            <button
              className={timeCSS.btn_pause}
              onClick={() => dispatch(pause())}
            >
              {isRunning ? t("pause") : t("resume")}
            </button>

            <button
              className={timeCSS.btn_reset}
              onClick={() => dispatch(reset())}
            >
              {t("reset_timer")}
            </button>
          </div>
        </>
      ) : (
        <div className={timeCSS.results}>
          <h3>{t("match_summary")}:</h3>
          <p>
            1ª {t("part")}: {formatTime(firstHalfTime)} +
            {formatTime(firstHalfExtra)}
          </p>
          <p>
            2ª {t("part")}: {formatTime(secondHalfTime)} +
            {formatTime(secondHalfExtra)}
          </p>
          <button
            className={timeCSS.btnReset}
            onClick={() => dispatch(reset())}
          >
            {t("reboot")}
          </button>
        </div>
      )}
    </div>
  );
};

export default MatchTimer;
