"use client";
import { useEffect, useRef } from "react";

interface Particle { x: number; y: number; vx: number; vy: number; size: number; opacity: number; color: string; life: number; maxLife: number; }

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let animId: number;
    const particles: Particle[] = [];
    const colors = ["#00d4ff","#7c3aed","#0099cc","#4f46e5","#06b6d4"];
    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    resize();
    window.addEventListener("resize", resize);
    const create = (): Particle => ({ x: Math.random()*canvas.width, y: canvas.height+10, vx: (Math.random()-0.5)*0.5, vy: -(Math.random()*0.8+0.3), size: Math.random()*2+0.5, opacity: Math.random()*0.6+0.2, color: colors[Math.floor(Math.random()*colors.length)], life: 0, maxLife: Math.random()*300+200 });
    for (let i=0;i<60;i++) { const p=create(); p.y=Math.random()*canvas.height; p.life=Math.random()*p.maxLife; particles.push(p); }
    const draw = () => {
      ctx.clearRect(0,0,canvas.width,canvas.height);
      if (particles.length<80 && Math.random()<0.3) particles.push(create());
      particles.forEach((p,i) => {
        p.x+=p.vx; p.y+=p.vy; p.life++;
        const lr=p.life/p.maxLife, alpha=p.opacity*(1-Math.pow(lr-0.5,2)*4);
        ctx.save(); ctx.globalAlpha=Math.max(0,alpha); ctx.fillStyle=p.color; ctx.shadowBlur=6; ctx.shadowColor=p.color;
        ctx.beginPath(); ctx.arc(p.x,p.y,p.size,0,Math.PI*2); ctx.fill(); ctx.restore();
        if (p.life>=p.maxLife||p.y<-10) particles.splice(i,1);
      });
      for (let i=0;i<particles.length;i++) for (let j=i+1;j<particles.length;j++) {
        const dx=particles[i].x-particles[j].x, dy=particles[i].y-particles[j].y, dist=Math.sqrt(dx*dx+dy*dy);
        if (dist<120) { ctx.save(); ctx.globalAlpha=(1-dist/120)*0.08; ctx.strokeStyle="#00d4ff"; ctx.lineWidth=0.5; ctx.beginPath(); ctx.moveTo(particles[i].x,particles[i].y); ctx.lineTo(particles[j].x,particles[j].y); ctx.stroke(); ctx.restore(); }
      }
      animId=requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(animId); window.removeEventListener("resize",resize); };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" style={{ opacity: 0.6 }} />;
}
