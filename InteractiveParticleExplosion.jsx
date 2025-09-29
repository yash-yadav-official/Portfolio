import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function InteractiveParticleExplosion({ onFinish, particleCount = 50 }) {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const particles = Array.from({ length: particleCount });

  // Track cursor
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMouse({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // End splash after 2.5s
  useEffect(() => {
    const timer = setTimeout(onFinish, 2500);
    return () => clearTimeout(timer);
  }, [onFinish]);

  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black z-50 overflow-hidden">
      {particles.map((_, i) => {
        const angle = Math.random() * 2 * Math.PI;
        const distance = 200 + Math.random() * 300;
        const size = 5 + Math.random() * 10;

        // Particle slightly attracted/repelled by cursor
        const cursorOffsetX = (mouse.x - centerX) * 0.05;
        const cursorOffsetY = (mouse.y - centerY) * 0.05;

        return (
          <motion.div
            key={i}
            className="rounded-full"
            style={{
              width: size,
              height: size,
              background: "radial-gradient(circle, #FFFF00 0%, #FF8C00 80%)",
              position: "absolute",
            }}
            initial={{ x: 0, y: 0, opacity: 1 }}
            animate={{
              x: Math.cos(angle) * distance + cursorOffsetX,
              y: Math.sin(angle) * distance + cursorOffsetY,
              opacity: 0,
            }}
            transition={{ duration: 2, ease: "easeOut" }}
          />
        );
      })}
    </div>
  );
}
