import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

class Point {
  x: number;
  y: number;
  originX: number;
  originY: number;
  active: number;
  circle: Circle;

  constructor({
    x,
    y,
    originX,
    originY,
  }: {
    x: number;
    y: number;
    originX?: number;
    originY?: number;
  }) {
    this.x = x;
    this.y = y;
    this.originX = originX ?? x;
    this.originY = originY ?? y;
    this.active = 0;
    this.circle = new Circle(this, 2 + Math.random() * 2, 'rgba(255,255,255,0.3)');
  }
}

class Circle {
  pos: Point;
  radius: number;
  color: string;
  active: number;

  constructor(pos: Point, rad: number, color: string) {
    this.pos = pos;
    this.radius = rad;
    this.color = color;
    this.active = 0;
  }

  draw(ctx: CanvasRenderingContext2D) {
    if (!this.active) return;
    ctx.beginPath();
    ctx.arc(this.pos.x, this.pos.y, this.radius, 0, 2 * Math.PI, false);
    ctx.fillStyle = 'rgba(156,217,249,' + this.active + ')';
    ctx.fill();
  }
}

const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const largeHeaderRef = useRef<HTMLDivElement>(null);
  const points = useRef<Point[]>([]);
  const target = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const animateHeader = useRef(true);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const largeHeader = largeHeaderRef.current!;
    const ctx = canvas.getContext('2d')!;

    const initHeader = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      target.current = { x: width / 0.75, y: height / 5 };

      largeHeader.style.height = height + 'px';
      canvas.width = width;
      canvas.height = height;

      points.current = [];
      for (let x = 0; x < width; x += width / 20) {
        for (let y = 0; y < height; y += height / 20) {
          const px = x + Math.random() * (width / 20);
          const py = y + Math.random() * (height / 20);
          const p = new Point({ x: px, y: py });
          points.current.push(p);
        }
      }

      for (let i = 0; i < points.current.length; i++) {
        const c = new Circle(points.current[i], 2 + Math.random() * 2, 'rgba(255,255,255,0.3)');
        points.current[i].circle = c;
      }
    };

    const mouseMove = (e: MouseEvent) => {
      let posx = 0,
        posy = 0;
      if (e.pageX || e.pageY) {
        posx = e.pageX;
        posy = e.pageY;
      } else if (e.clientX || e.clientY) {
        posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
        posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
      }
      target.current.x = posx;
      target.current.y = posy;
    };

    const scrollCheck = () => {
      animateHeader.current = document.body.scrollTop <= window.innerHeight;
    };

    const resize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      largeHeader.style.height = height + 'px';
      canvas.width = width;
      canvas.height = height;
    };

    const drawLines = (p: Point) => {
      for (let i = 0; i < points.current.length; i++) {
        const distance = getDistance(p, points.current[i]);
        if (distance < 4000 && p.active > 0) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(points.current[i].x, points.current[i].y);
          ctx.strokeStyle = `rgba(156, 217, 249, ${1 - distance / 4000})`;
          ctx.stroke();
        }
      }
    };

    const getDistance = (p1: Point, p2: Point) => {
      return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
    };

    const shiftPoint = (p: Point) => {
      gsap.to(p, {
        duration: 1 + 1 * Math.random(),
        x: p.originX - 50 + Math.random() * 100,
        y: p.originY - 50 + Math.random() * 100,
        ease: 'power1.inOut',
        onComplete: () => {
          shiftPoint(p);
        },
      });
    };

    const animate = () => {
      if (animateHeader.current) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const targetPoint = new Point({ x: target.current.x, y: target.current.y });
        for (let i = 0; i < points.current.length; i++) {
          if (Math.abs(getDistance(targetPoint, points.current[i])) < 4000) {
            points.current[i].active = 0.3;
            points.current[i].circle.active = 0.6;
          } else if (Math.abs(getDistance(targetPoint, points.current[i])) < 20000) {
            points.current[i].active = 0.1;
            points.current[i].circle.active = 0.3;
          } else if (Math.abs(getDistance(targetPoint, points.current[i])) < 40000) {
            points.current[i].active = 0.02;
            points.current[i].circle.active = 0.1;
          } else {
            points.current[i].active = 0;
            points.current[i].circle.active = 0;
          }

          drawLines(points.current[i]);
          points.current[i].circle.draw(ctx);
        }
      }
      requestAnimationFrame(animate);
    };

    const initAnimation = () => {
      animate();
      for (let i = 0; i < points.current.length; i++) {
        shiftPoint(points.current[i]);
      }
    };

    const addListeners = () => {
      if (!('ontouchstart' in window)) {
        window.addEventListener('mousemove', mouseMove);
      }
      window.addEventListener('scroll', scrollCheck);
      window.addEventListener('resize', resize);
    };

    initHeader();
    initAnimation();
    addListeners();

    return () => {
      window.removeEventListener('mousemove', mouseMove);
      window.removeEventListener('scroll', scrollCheck);
      window.removeEventListener('resize', resize);
    };
  }, []); // Only run once on mount

  return (
    <div
      id="large-header"
      className="bg-cover bg-center bg-no-repeat large-header -z-10 absolute"
      ref={largeHeaderRef}
    >
      <canvas id="demo-canvas" ref={canvasRef}></canvas>
    </div>
  );
};

export default AnimatedBackground;
