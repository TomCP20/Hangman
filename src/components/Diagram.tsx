import { useEffect, useRef } from "react";

export default function Diagram(props: Readonly<{ wrongGuessesCount: number; }>) {
  const { wrongGuessesCount } = props;
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    function draw(context: CanvasRenderingContext2D) {
      context.clearRect(0, 0, 400, 500);
      context.lineWidth = 3;

      context.beginPath();
      context.moveTo(20, 480);
      context.lineTo(380, 480);
      context.stroke();

      context.beginPath();
      context.moveTo(100, 480);
      context.lineTo(100, 50);
      context.lineTo(250, 50);
      context.lineTo(250, 100);
      context.stroke();

      if (wrongGuessesCount >= 1) {
        context.beginPath();
        context.arc(250, 130, 30, 0, 2 * Math.PI);
        context.stroke();
      }

      if (wrongGuessesCount >= 2) {
        context.beginPath();
        context.moveTo(250, 160);
        context.lineTo(250, 270);
        context.stroke();
      }

      if (wrongGuessesCount >= 3) {
        context.beginPath();
        context.moveTo(250, 180);
        context.lineTo(200, 200);
        context.stroke();
      }

      if (wrongGuessesCount >= 4) {
        context.beginPath();
        context.moveTo(250, 180);
        context.lineTo(300, 200);
        context.stroke();
      }

      if (wrongGuessesCount >= 5) {
        context.beginPath();
        context.moveTo(250, 270);
        context.lineTo(220, 340);
        context.stroke();
      }

      if (wrongGuessesCount >= 6) {
        context.beginPath();
        context.moveTo(250, 270);
        context.lineTo(280, 340);
        context.stroke();
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
