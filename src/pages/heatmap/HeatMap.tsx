import campo from "./campo_futbol_mapa_de_calor_plano.svg"
import { useRef, useEffect, useState } from "react";

interface HeatPoint {
  x: number;
  y: number;
  normalizedX: number;
  normalizedY: number;
  intensity: number;
  action: string;
  timestamp: string;
}

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
  shoot_out: "rgba(173, 216, 230, 1)"
};

const HeatmapCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [heatPoints, setHeatPoints] = useState<HeatPoint[]>([]);
  const [selectedAction, setSelectedAction] = useState<string>("goals");
  const [intensity, setIntensity] = useState<number>(1);
  const [isSettingsOpen, setIsSettingsOpen] = useState<boolean>(false);
  const backgroundImageRef = useRef<HTMLImageElement | null>(null);
  const [canvasSize, setCanvasSize] = useState({ width: window.innerWidth, height: window.innerHeight });

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
  }, [heatPoints, canvasSize]);

  const handleCanvasClick = (event: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const normalizedX = x / canvas.width;
    const normalizedY = y / canvas.height;
    const timestamp = new Date().toLocaleTimeString();

    setHeatPoints((prevPoints) => [...prevPoints, { x, y, normalizedX, normalizedY, intensity, action: selectedAction, timestamp }]);
  };

  const drawCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (backgroundImageRef.current) {
      ctx.drawImage(backgroundImageRef.current, 0, 0, canvas.width, canvas.height);
    }

    heatPoints.forEach(({ x, y, intensity, action }) => {
      drawHeatPoint(ctx, x, y, intensity, action);
    });
  };

  const drawHeatPoint = (ctx: CanvasRenderingContext2D, x: number, y: number, intensity: number, action: string) => {
    const radius = 20 + intensity * 10;
    const color = actionColors[action] || "rgba(255, 255, 255, 1)";
    const gradient = ctx.createRadialGradient(x, y, 5, x, y, radius);
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
      <button onClick={() => setIsSettingsOpen(true)} style={{ color: 'white', position: "fixed", top: 0, left: 0, background: "transparent", border: "1px solid black", zIndex: '50' }}>⚙️ Configuración</button>
      {isSettingsOpen && (
        <div style={{ position: "fixed", top: 0, right: 0, padding: "1rem", background: "white", border: "1px solid black", zIndex: '50' }}>
          <button onClick={() => setIsSettingsOpen(false)}>❌</button>
          <h3>Configuración</h3>
          <label>
            Acción:
            <select onChange={(e) => setSelectedAction(e.target.value)} value={selectedAction}>
              {Object.keys(actionColors).map((action) => (
                <option key={action} value={action}>{action.replace("_", " ")}</option>
              ))}
            </select>
          </label>
          <label>
            Intensidad:
            <input type="range" min="1" max="5" value={intensity} onChange={(e) => setIntensity(Number(e.target.value))} />
          </label>
          <h4>Historial de Eventos</h4>
          <ol style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
            color: 'black',
          }}>
            {heatPoints.map((point, index) => (
              <li key={index}>{point.timestamp} - {point.action.replace("_", " ")}</li>
            ))}
          </ol>
        </div>
      )}
      <canvas ref={canvasRef} onClick={handleCanvasClick}
        style={{ position: "fixed", top: 0, left: 0 }} />
    </>
  );
};

export default HeatmapCanvas;


