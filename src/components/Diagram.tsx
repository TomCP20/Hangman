import { useEffect, useRef } from "react";

export default function Diagram(props: Readonly<{ stage: number; }>) {
  const { stage: wrongGuessesCount } = props;
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    function draw(context: CanvasRenderingContext2D) {
      function line(x1: number, y1: number, x2: number, y2: number) {
        context.beginPath();
        context.moveTo(x1, y1);
        context.lineTo(x2, y2);
        context.stroke();
      }
      context.clearRect(0, 0, 400, 500);
      context.lineWidth = 3;

      line(20, 480, 380, 480);

      context.beginPath();
      context.moveTo(100, 480);
      context.lineTo(100, 50);
      context.lineTo(250, 50);
      context.lineTo(250, 100);
      context.stroke();

      line(150, 50, 100, 100);
      line(50, 480, 100, 430);
      line(150, 480, 100, 430);

      if (wrongGuessesCount >= 1) {
        context.beginPath();
        context.arc(250, 130, 30, 0, 2 * Math.PI);
        context.stroke();
      }

      if (wrongGuessesCount >= 2) {
        line(250, 160, 250, 270);
      }

      if (wrongGuessesCount >= 3) {
        line(250, 180, 200, 200);
      }

      if (wrongGuessesCount >= 4) {
        line(250, 180, 300, 200);
      }

      if (wrongGuessesCount >= 5) {
        line(250, 270, 220, 340);
      }

      if (wrongGuessesCount >= 6) {
        line(250, 270, 280, 340);
      }
    }
    const canvas = ref.current;
    if (canvas != null) {
      const context = canvas.getContext("2d");
      if (context != null) {
        draw(context);
      }
    }
  }, [wrongGuessesCount])

  return (
    <div>
      <canvas ref={ref} width={400} height={500}>
        {wrongGuessesCount}/6
      </canvas>
    </div>

  );
}
