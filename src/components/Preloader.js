import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [done, setDone] = useState(false);
  const [count, setCount] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Only show once per session
    if (typeof window !== "undefined" && sessionStorage.getItem("sf_loaded")) {
      setDone(true);
      setMounted(true);
      return;
    }
    setMounted(true);

    let current = 0;
    const interval = setInterval(() => {
      current += 1;
      setCount(current);
      if (current >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          if (typeof window !== "undefined") {
            sessionStorage.setItem("sf_loaded", "1");
          }
          setDone(true);
        }, 350);
      }
    }, 20);

    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="preloader"
          exit={{ y: "-100%", transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-stone-950 overflow-hidden"
        >
          {/* Dot grid */}
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(circle, rgb(163,230,53) 1px, transparent 1px)`,
              backgroundSize: "36px 36px",
            }}
          />

          {/* Ambient glow orb */}
          <motion.div
            animate={{ scale: [1, 1.35, 1], opacity: [0.12, 0.22, 0.12] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] bg-lime-500 rounded-full blur-[120px] pointer-events-none"
          />

          {/* Secondary orb offset */}
          <motion.div
            animate={{ scale: [1.1, 0.9, 1.1], opacity: [0.06, 0.14, 0.06] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-lime-400 rounded-full blur-[100px] pointer-events-none"
          />

          {/* Center content */}
          <div className="relative z-10 flex flex-col items-center gap-7">

            {/* Logo mark */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5, filter: "blur(12px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <motion.div
                animate={{ opacity: [0.4, 0.8, 0.4] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 rounded-full bg-lime-400 blur-2xl scale-110 pointer-events-none"
              />
              <img
                src="/logo-mark.png"
                alt="ShipFactory"
                className="relative h-24 w-auto invert drop-shadow-[0_0_32px_rgba(163,230,53,0.5)]"
              />
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="text-stone-500 text-xs tracking-[0.25em] uppercase"
            >
              Building what ships
            </motion.p>

            {/* Progress track */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0.4 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="relative w-56 h-[2px] bg-white/8 rounded-full overflow-hidden"
            >
              <motion.div
                animate={{ width: `${count}%` }}
                transition={{ ease: "linear", duration: 0 }}
                className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-lime-600 to-lime-400"
              />
              {/* Shimmer on the bar */}
              <motion.div
                animate={{ x: ["-100%", "200%"] }}
                transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut", repeatDelay: 0.2 }}
                className="absolute inset-y-0 w-12 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-full"
              />
            </motion.div>

            {/* Counter */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.85 }}
              className="text-stone-500 text-xs font-mono tabular-nums tracking-widest -mt-4"
            >
              {String(count).padStart(3, "0")}
            </motion.p>
          </div>

          {/* Corner accents */}
          {[
            "top-6 left-6 border-t border-l",
            "top-6 right-6 border-t border-r",
            "bottom-6 left-6 border-b border-l",
            "bottom-6 right-6 border-b border-r",
          ].map((cls, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + i * 0.06, duration: 0.5 }}
              className={`absolute w-6 h-6 border-lime-500/30 ${cls}`}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
