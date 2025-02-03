import { FC } from "react";
import { downloadCSV, downloadPDF } from "../../utils";
import { RootState, useAppDispatch, useAppSelector } from "../../store/store";
import { resetStats, saveStats } from "../../store/slices/statsSlice";
import actionsCSS from './actions.module.css'
import { Container } from "../container/Container";

export const Actions: FC = () => {
  const stats = useAppSelector((state: RootState) => state.stats)
  const { authentificate } = useAppSelector((state: RootState) => state.user);
  const handlerSaveStats = () => {
    dispatch(saveStats())
  }
  const dispatch = useAppDispatch()
  return authentificate && (
    <Container>
      <div className={actionsCSS.actions}>
        <button className={`${actionsCSS.button} ${actionsCSS.save_button}`} onClick={handlerSaveStats}>Guardar Estadísticas</button>
        <button className={`${actionsCSS.button} ${actionsCSS.reset_button}`} onClick={() => dispatch(resetStats())} >Reiniciar Estadísticas</button>
        <button className={`${actionsCSS.button} ${actionsCSS.download_button}`} onClick={() => downloadCSV(stats)}>Descargar CSV</button>
        <button className={`${actionsCSS.button} ${actionsCSS.pdf_button}`} onClick={() => downloadPDF(stats)}>Descargar PDF</button>
      </div>
    </Container>
  )
}