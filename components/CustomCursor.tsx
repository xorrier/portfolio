"use client";

import { useEffect, useState, useRef } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const cursorRef = useRef({ x: 0, y: 0 });
  const currentPosRef = useRef({ x: 0, y: 0 });
  const rafId = useRef<number>();

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      cursorRef.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      // Smooth interpolation for the circle to follow cursor
      const dx = cursorRef.current.x - currentPosRef.current.x;
      const dy = cursorRef.current.y - currentPosRef.current.y;

      currentPosRef.current.x += dx * 0.15;
      currentPosRef.current.y += dy * 0.15;

      setPosition({
        x: currentPosRef.current.x,
        y: currentPosRef.current.y,
      });

      rafId.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", updateCursor);
    rafId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", updateCursor);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <div
      className="custom-cursor"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    />
  );
}
