import { useRef, useEffect } from "react";


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
      width={'100px'}
      height={'100px'}
      style={{
        width: '100%',
        height: '100%',
        overflow: 'hidden',
      }}
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
