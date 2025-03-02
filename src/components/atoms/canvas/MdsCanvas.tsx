import { useRef, useEffect } from "react";
import canvasCSS from './canvas.module.css'

interface CanvasProps {
  onCanvasClick: (x: number, y: number) => void;
}

const MdsCanvas = ({ onCanvasClick }: CanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Configurar el canvas
    ctx.fillStyle = "transparent";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }, []);

  // const drawMark = (x: number, y: number) => {
  //   const canvas = canvasRef.current;
  //   if (!canvas) return;
  //   const ctx = canvas.getContext("2d");
  //   if (!ctx) return;

  //   // Dibujar una marca (círculo rojo)
  //   ctx.fillStyle = "red";
  //   ctx.beginPath();
  //   ctx.arc(x, y, 5, 0, Math.PI * 2);
  //   ctx.fill();
  // };

  return (
    <canvas
      ref={canvasRef}
      className={canvasCSS.default_canvas}
      onClick={(event) => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const rect = canvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        onCanvasClick(x, y);
      }}
    />
  );
};

export default MdsCanvas;
