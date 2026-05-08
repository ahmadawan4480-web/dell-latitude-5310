"use client";
import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;
    let mouseX = 0, mouseY = 0, ringX = 0, ringY = 0;
    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX; mouseY = e.clientY;
      dot.style.left = `${mouseX}px`; dot.style.top = `${mouseY}px`;
    };
    const animate = () => {
      ringX += (mouseX - ringX) * 0.12; ringY += (mouseY - ringY) * 0.12;
      ring.style.left = `${ringX}px`; ring.style.top = `${ringY}px`;
      requestAnimationFrame(animate);
    };
    const onEnter = () => { ring.style.transform = "translate(-50%,-50%) scale(1.8)"; ring.style.borderColor = "rgba(0,212,255,0.9)"; dot.style.transform = "translate(-50%,-50%) scale(0.5)"; };
    const onLeave = () => { ring.style.transform = "translate(-50%,-50%) scale(1)"; ring.style.borderColor = "rgba(0,212,255,0.5)"; dot.style.transform = "translate(-50%,-50%) scale(1)"; };
    document.addEventListener("mousemove", onMouseMove);
    animate();
    const links = document.querySelectorAll("a,button,[data-cursor]");
    links.forEach(el => { el.addEventListener("mouseenter", onEnter); el.addEventListener("mouseleave", onLeave); });
    return () => document.removeEventListener("mousemove", onMouseMove);
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot hidden md:block" />
      <div ref={ringRef} className="cursor-ring hidden md:block" />
    </>
  );
}
