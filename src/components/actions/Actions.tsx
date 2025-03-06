import { FC } from "react";
import { downloadCSV, downloadPDF } from "../../utils";
import { RootState, useAppDispatch, useAppSelector } from "../../store/store";
import { resetStats, saveStats } from "../../store/slices/statsSlice";
import actionsCSS from "./actions.module.css";
import { Container } from "../container/Container";
import { useTranslation } from "react-i18next";
import { resetMarks } from "../../store/slices/markSlice";

export const Actions: FC = () => {
  const { t } = useTranslation();
  const stats = useAppSelector((state: RootState) => state.stats);
  const handlerSaveStats = () => {
    dispatch(saveStats());
  };
  const dispatch = useAppDispatch();

  const handlerReset = () => {
    dispatch(resetStats());
    dispatch(resetMarks());
  };

  return (
    <Container>
      <div className={actionsCSS.actions}>
        <button
          className={`${actionsCSS.button} ${actionsCSS.save_button}`}
          onClick={handlerSaveStats}
        >
          {t("keep")} {t("stats")}
        </button>
        <button
          className={`${actionsCSS.button} ${actionsCSS.reset_button}`}
          onClick={handlerReset}
        >
          {t("reboot")}
        </button>
        <button
          className={`${actionsCSS.button} ${actionsCSS.download_button}`}
          onClick={() => downloadCSV(stats)}
        >
          {t("keep")} CSV
        </button>
        <button
          className={`${actionsCSS.button} ${actionsCSS.pdf_button}`}
          onClick={() => downloadPDF(stats)}
        >
          {t("keep")} PDF
        </button>
      </div>
    </Container>
  );
};
