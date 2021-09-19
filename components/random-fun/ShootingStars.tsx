import React, { useEffect, useRef, useState } from "react";
import { setCanvasStyleRatio } from "../../utils/canvasResolution";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import Image from "next/image";

const drawShootingStar = (
  context: CanvasRenderingContext2D,
  star: ShootingStar
) => {
  const grad = context.createLinearGradient(star.x1, star.y1, star.x2, star.y2);
  grad.addColorStop(0, "#FCAF82");
  grad.addColorStop(1, "#A7D4FF");
  context.strokeStyle = grad;
  context.moveTo(star.x1, star.y1);
  context.lineTo(star.x2, star.y2);
  context.stroke();

  context.beginPath();
  context.arc(star.x2, star.y2, 2, 0, 2 * Math.PI);
  context.fillStyle = "#A7D4FF";
  context.fill();
};

interface ShootingStar {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  direction: {
    x: number;
    y: number;
  };
}

export const ShootingStars = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const bgCanvasRef = useRef<HTMLCanvasElement>(null);
  const windowDimensions = useWindowDimensions();

  const [stars, setStars] = useState<[number, number, number][]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const bgCanvas = bgCanvasRef.current;
    const context = canvas?.getContext("2d");
    const bgContext = bgCanvas?.getContext("2d");

    if (canvas && bgCanvas && windowDimensions) {
      setCanvasStyleRatio(
        canvas,
        context,
        windowDimensions.width,
        windowDimensions.height
      );
      setCanvasStyleRatio(
        bgCanvas,
        bgContext,
        windowDimensions.width,
        windowDimensions.height
      );

      if (bgContext) {
        const grd = bgContext.createLinearGradient(
          0,
          bgCanvas.height,
          bgCanvas.width / 8,
          0
        );
        grd.addColorStop(0, "#444466");
        grd.addColorStop(1, "#212529");

        // Fill with gradient
        bgContext.fillStyle = grd;
        bgContext.fillRect(0, 0, bgCanvas.width, bgCanvas.height);
      }

      setStars(
        new Array(1000)
          .fill(1)
          .map((_) => [
            Math.random() * canvas.width,
            Math.random() * canvas.height,
            Math.random() * 2 * Math.PI,
          ])
      );
    }
  }, [setStars, windowDimensions]);

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const context = canvas?.getContext("2d");

      if (context) {
        context.fillStyle = "#ffffff";

        let requestId: number,
          i = 0;

        let shootingStar: ShootingStar;

        const render = () => {
          context.clearRect(0, 0, canvas.width, canvas.height);
          i += 0.01;

          // Rendering stars
          stars.forEach((star) => {
            context.beginPath();
            context.arc(
              star[0],
              star[1],
              0.2 * (star[2] * Math.abs(Math.cos(i + star[2]))),
              0,
              2 * Math.PI
            );
            context.fill();
          });

          // Rendering shooting stars

          if (requestId % 240 === 0) {
            const x = Math.random() * canvas.width;
            const y = Math.random() * canvas.height;
            const direction = {
              x: 2 * Math.random() - 1,
              y: Math.random(),
            };
            shootingStar = {
              x1: x,
              y1: y,
              x2: x,
              y2: y,
              direction: direction,
            };
          } else if (requestId % 240 < 40) {
            if (shootingStar) {
              shootingStar = {
                x1: shootingStar.x1 + shootingStar.direction.x,
                y1: shootingStar.y1 + shootingStar.direction.y,
                x2: shootingStar.x2 + 4 * shootingStar.direction.x,
                y2: shootingStar.y2 + 4 * shootingStar.direction.y,
                direction: shootingStar.direction,
              };
              drawShootingStar(context, shootingStar);
            }
          }

          requestId = requestAnimationFrame(render);
        };

        render();

        return () => {
          cancelAnimationFrame(requestId);
        };
      }
    }
  }, [stars, windowDimensions]);

  if (!windowDimensions) return null;

  return (
    <>
      <div className="absolute top-0 right-0 cursor-pointer z-10 mr-12 mt-16">
        <Image
          alt="moon image"
          src="/images/moon.png"
          height={32}
          width={32}
          onClick={() =>
            window.alert("Please be respectful and leave the moon alone!")
          }
        />
      </div>
      <canvas
        ref={bgCanvasRef}
        className="fixed top-0"
        id="bgCanvas"
        style={{ zIndex: -2 }}
        width={windowDimensions?.width}
        height={windowDimensions?.height}
      ></canvas>
      <canvas
        ref={canvasRef}
        id="myCanvas"
        className="fixed top-0"
        style={{ zIndex: -1 }}
        width={windowDimensions?.width}
        height={windowDimensions?.height}
      ></canvas>
    </>
  );
};
