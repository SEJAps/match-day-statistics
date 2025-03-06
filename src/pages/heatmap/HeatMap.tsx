import { useParams } from "react-router";
import { useAppSelector } from "../../store/store";
import campo from "./campo_futbol_mapa_de_calor_plano.svg";
import { useRef, useEffect, useState, FC } from "react";

const actionColors: Record<string, string> = {
  goals: "rgba(255, 0, 0, 1)",
  center_attacks: "rgba(0, 0, 255, 1)",
  right_attacks: "rgba(0, 255, 0, 1)",
  left_attacks: "rgba(255, 255, 0, 1)",
  crosses: "rgba(128, 0, 128, 1)",
  corners: "rgba(255, 165, 0, 1)",
  fouls: "rgba(0, 0, 0, 1)",
  dangerous_fouls: "rgba(139, 0, 0, 1)",
  offsides: "rgba(255, 255, 255, 1)",
  goal_chances_in: "rgba(165, 42, 42, 1)",
  merit_stop: "rgba(0, 100, 0, 1)",
  shoot_out: "rgba(173, 216, 230, 1)",
};

const Heatmap: FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { team } = useParams();
  const { local, guest } = useAppSelector((state) => state.marks);
  const [selectedAction, setSelectedAction] = useState<string>("goals");
  const [intensity, setIntensity] = useState<number>(1);
  const [isSettingsOpen, setIsSettingsOpen] = useState<boolean>(false);
  const backgroundImageRef = useRef<HTMLImageElement | null>(null);
  const [canvasSize, setCanvasSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const updateCanvasSize = () => {
      setCanvasSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener("resize", updateCanvasSize);
    return () => window.removeEventListener("resize", updateCanvasSize);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = canvasSize.width;
    canvas.height = canvasSize.height;

    if (!backgroundImageRef.current) {
      backgroundImageRef.current = new Image();
      backgroundImageRef.current.src = campo;
      backgroundImageRef.current.onload = () => drawCanvas();
    } else {
      drawCanvas();
    }
  }, [local, guest, team, canvasSize]);

  const drawCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (backgroundImageRef.current) {
      ctx.drawImage(
        backgroundImageRef.current,
        0,
        0,
        canvas.width,
        canvas.height,
      );
    }
    if (team === "all") {
      local.forEach(({ x, y, intensity, stat }) => {
        drawHeatPoint(ctx, x, y, intensity, stat);
      });
      guest.forEach(({ x, y, intensity, stat }) => {
        drawHeatPoint(ctx, x, y, intensity, stat);
      });
    }
    if (team === "local") {
      local.forEach(({ x, y, intensity, stat }) => {
        drawHeatPoint(ctx, x, y, intensity, stat);
      });
    }
    if (team === "guest") {
      guest.forEach(({ x, y, intensity, stat }) => {
        drawHeatPoint(ctx, x, y, intensity, stat);
      });
    }
  };

  const drawHeatPoint = (
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    intensity: number,
    action: string,
  ) => {
    const radius = 20 + intensity * 10;
    const color = actionColors[action] || "rgba(255, 255, 255, 1)";
    const gradient = ctx.createRadialGradient(x, y, 5, x, y, radius);

    // Añade el nombre de la stadistica en el canvas
    ctx.fillStyle = "black";
    ctx.font = "12px Arial";
    ctx.textAlign = "center";
    ctx.fillText(action.replace("_", " "), x, y - radius - 5);

    gradient.addColorStop(0, color.replace("1)", "0.8)"));
    gradient.addColorStop(0.5, color.replace("1)", "0.4)"));
    gradient.addColorStop(1, "rgba(255, 255, 255, 0)");

    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();
  };

  return (
    <>
      <button
        onClick={() => setIsSettingsOpen(true)}
        style={{
          color: "white",
          position: "fixed",
          top: 0,
          left: 0,
          background: "transparent",
          border: "1px solid black",
          zIndex: "50",
        }}
      >
        ⚙️ Configuración
      </button>
      {isSettingsOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            right: 0,
            padding: "1rem",
            background: "white",
            border: "1px solid black",
            zIndex: "50",
          }}
        >
          <button onClick={() => setIsSettingsOpen(false)}>❌</button>
          <h3>Configuración</h3>
          <label>
            Acción:
            <select
              onChange={(e) => setSelectedAction(e.target.value)}
              value={selectedAction}
            >
              {Object.keys(actionColors).map((action) => (
                <option key={action} value={action}>
                  {action.replace("_", " ")}
                </option>
              ))}
            </select>
          </label>
          <label>
            Intensidad:
            <input
              type="range"
              min="1"
              max="5"
              value={intensity}
              onChange={(e) => setIntensity(Number(e.target.value))}
            />
          </label>
          <h4>Historial de Eventos</h4>
          <ol
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
              color: "black",
            }}
          >
            {local.map((point, index) => (
              <li key={index}>
                {point.time_stamp} - {point.stat.replace("_", " ")}
                {point.stat}s
              </li>
            ))}
            {guest.map((point, index) => (
              <li key={index}>
                {point.time_stamp} - {point.stat.replace("_", " ")}
                {point.stat}
              </li>
            ))}
          </ol>
        </div>
      )}
      <canvas ref={canvasRef} style={{ position: "fixed", top: 0, left: 0 }} />
    </>
  );
};

export default Heatmap;
