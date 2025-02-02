import { FC } from "react";
import { downloadCSV, downloadPDF } from "../utils";
import { RootState, useAppDispatch, useAppSelector } from "../store/store";
import { resetStats, saveStats } from "../store/slices/statsSlice";

export const Actions: FC = () => {
  const stats = useAppSelector((state: RootState) => state.stats)
  const { authentificate } = useAppSelector((state: RootState) => state.user);
  const handlerSaveStats = () => {
    dispatch(saveStats())
  }
  const dispatch = useAppDispatch()
  return authentificate && (
    <div className="actions">
      <button onClick={handlerSaveStats} className="download-button pdf-button">Guardar Estadísticas</button>
      <button onClick={() => dispatch(resetStats())} className="reset-button">Reiniciar Estadísticas</button>
      <button onClick={() => downloadCSV(stats)} className="download-button">Descargar CSV</button>
      <button onClick={() => downloadPDF(stats)} className="download-button pdf-button">Descargar PDF</button>
    </div>
  )
}