"use client";

import { useEffect, useRef } from "react";

const MetaballsBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const numBalls = 10;
    const balls = Array.from({ length: numBalls }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 40 + 20,
      dx: (Math.random() - 0.5) * 2,
      dy: (Math.random() - 0.5) * 2,
    }));

    const drawMetaballs = () => {
      ctx.clearRect(0, 0, width, height);

      ctx.fillStyle = "rgba(255, 100, 200, 0.6)";
      ctx.globalCompositeOperation = "lighter";

      balls.forEach((ball) => {
        ctx.beginPath();
        ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.globalCompositeOperation = "source-over";
    };

    const update = () => {
      balls.forEach((ball) => {
        ball.x += ball.dx;
        ball.y += ball.dy;

        if (ball.x - ball.radius < 0 || ball.x + ball.radius > width) {
          ball.dx *= -1;
        }
        if (ball.y - ball.radius < 0 || ball.y + ball.radius > height) {
          ball.dy *= -1;
        }
      });

      drawMetaballs();
      requestAnimationFrame(update);
    };

    update();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
    />
  );
};

export default MetaballsBackground;
