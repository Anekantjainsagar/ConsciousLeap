"use client";
import React, { useEffect, useRef } from "react";

const YourComponent = () => {
  const canvasRef = useRef(null);
  const clouds = [];

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const LEFT = "LEFT";
    const RIGHT = "RIGHT";

    const getDir = () => {
      const dec = Math.floor(Math.random() * 30);
      return dec < 16 ? LEFT : RIGHT;
    };

    class Cloud {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.floor(Math.random() * 30);
        this.clr = "silver";
        this.dir = getDir();
        this.speed = Math.floor(Math.random() * 2) + 1;
      }

      moveLeft() {
        this.x -= this.speed;
      }

      moveRight() {
        this.x += this.speed;
      }

      update() {
        if (this.x <= 0) {
          this.dir = RIGHT;
        } else if (this.x >= canvas.width) {
          this.dir = LEFT;
        }

        if (this.dir === LEFT) {
          this.moveLeft();
        } else {
          this.moveRight();
        }
      }

      drawRoot(x, y) {
        let sx = x;
        let sy = y;
        let ex = sx + Math.floor(Math.random() * 50) - 15;
        let ey = sy + Math.floor(Math.random() * 30);
        let i = 0;
        let limit = Math.floor(Math.random() * 20);

        while (i < limit) {
          ctx.beginPath();
          ctx.strokeStyle = "silver";
          ctx.lineWidth = 1;
          ctx.moveTo(sx, sy);
          ctx.lineTo(ex, ey);
          ctx.stroke();

          sx = ex;
          sy = ey;
          ex = sx + Math.floor(Math.random() * 50) - 15;
          ey = sy + Math.floor(Math.random() * 30);
          i++;
        }
      }

      drawLightning() {
        ctx.fillStyle = "rgba(255, 255, 255, 0.1)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        let sx = this.x;
        let sy = this.y;
        let ex = sx + Math.floor(Math.random() * 30) - 15;
        let ey = sy + Math.floor(Math.random() * 30);
        let i = 0;
        let limit = Math.floor(Math.random() * 20) + 10;

        while (i < limit) {
          ctx.beginPath();
          ctx.strokeStyle = "silver";
          ctx.lineWidth = 3;
          ctx.moveTo(sx, sy);
          ctx.lineTo(ex, ey);
          ctx.stroke();

          sx = ex;
          sy = ey;
          ex = sx + Math.floor(Math.random() * 30) - 15;
          ey = sy + Math.floor(Math.random() * 30);

          let root = Math.floor(Math.random() * 1000);
          if (root < 50) {
            this.drawRoot(sx, sy);
          }

          i++;
        }
      }

      draw() {
        ctx.beginPath();
        ctx.fillStyle = this.clr;
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        ctx.fill();

        const strike = Math.floor(Math.random() * 100000);

        if (strike < 100) {
          this.drawLightning();
        }
      }
    }

    let i = 0;
    let canvasWidth = canvas.width;
    let canvasHeight = canvas.height;

    while (i < canvasWidth) {
      clouds.push(new Cloud(i, 0));
      i += Math.floor(Math.random() * 10) + 1;
    }

    const animate = () => {
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, canvasWidth, canvasHeight);
      ctx.shadowColor = "aliceblue";
      ctx.shadowBlur = 10;

      for (let c of clouds) {
        c.draw();
        c.update();
      }

      requestAnimationFrame(animate);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      canvasWidth = canvas.width;
      canvasHeight = canvas.height;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // empty dependency array to run useEffect only once on mount

  return (
    <canvas
      ref={canvasRef}
      className="your-component-canvas"
    ></canvas>
  );
};

export default YourComponent;
