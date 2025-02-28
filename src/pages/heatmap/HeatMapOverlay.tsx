import { FC, useEffect, useRef } from "react";
import heatmap from "heatmap.js";
import { useAppSelector } from "../../store/store";
// import svgHeatMap from "./campo_futbol_mapa_de_calor_plano.svg";

const HeatMapOverlay: FC = () => {
  const heatmapContainerRef = useRef<HTMLDivElement | null>(null);
  const heatmapInstance = useRef<ReturnType<typeof heatmap.create> | null>(null);
  const { heatMarksData } = useAppSelector((state) => state.heatMap);

  useEffect(() => {
    if (!heatmapContainerRef.current) return;

    // Inicializar heatmap.js solo si no existe
    if (!heatmapInstance.current) {
      heatmapInstance.current = heatmap.create({
        container: heatmapContainerRef.current,
        radius: 20,
        maxOpacity: 1,
        minOpacity: 1,
        blur: 0.9,
      });
    }

    // Transformar datos y actualizar heatmap
    // const points = heatMarksData.map(({ x, y, value }) => ({
    //   x,
    //   y,
    //   value: value * 100, // Escalamos para visibilidad
    // }));

    heatmapInstance.current.setData({
      max: 50,
      min: 1,
      data: [{ x: 10, y: 15, value: 5 }],
    });
    console.log(heatmapInstance)
  }, [heatMarksData]);

  return (
    <div ref={heatmapContainerRef}>
    </div>
  );
};

export default HeatMapOverlay;
