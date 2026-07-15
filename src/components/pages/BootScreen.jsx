import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WIN98_FLAG = (
  <svg width="64" height="64" viewBox="0 0 64 64" style={{imageRendering: "pixelated"}}>
    <defs>
      <linearGradient id="flagShine" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="rgba(255,255,255,0.3)" />
        <stop offset="50%" stopColor="rgba(255,255,255,0)" />
        <stop offset="100%" stopColor="rgba(255,255,255,0.1)" />
      </linearGradient>
    </defs>
    <rect x="4" y="4" width="26" height="26" fill="#FF4444" rx="3" />
    <rect x="4" y="4" width="26" height="26" fill="url(#flagShine)" rx="3" />
    <rect x="34" y="4" width="26" height="26" fill="#44BB44" rx="3" />
    <rect x="34" y="4" width="26" height="26" fill="url(#flagShine)" rx="3" />
    <rect x="4" y="34" width="26" height="26" fill="#4444FF" rx="3" />
    <rect x="4" y="34" width="26" height="26" fill="url(#flagShine)" rx="3" />
    <rect x="34" y="34" width="26" height="26" fill="#FFCC00" rx="3" />
    <rect x="34" y="34" width="26" height="26" fill="url(#flagShine)" rx="3" />
    <rect x="6" y="6" width="22" height="22" fill="#FF6666" rx="2" />
    <rect x="36" y="6" width="22" height="22" fill="#66DD66" rx="2" />
    <rect x="6" y="36" width="22" height="22" fill="#6666FF" rx="2" />
    <rect x="36" y="36" width="22" height="22" fill="#FFDD33" rx="2" />
  </svg>
);

const CRT = (
  <div
    className="fixed inset-0 z-10 pointer-events-none"
    style={{
      background: `repeating-linear-gradient(
        0deg,
        rgba(0,0,0,0.06) 0px,
        rgba(0,0,0,0.06) 1px,
        transparent 1px,
        transparent 3px
      )`,
    }}
  />
);

const BlockBar = ({ progress }) => {
  const blocks = 20;
  const filled = Math.floor((progress / 100) * blocks);

  return (
    <div className="flex gap-[2px]">
      {Array.from({ length: blocks }).map((_, i) => (
        <div
          key={i}
          className="h-4 w-[18px]"
          style={{
            background: i < filled
              ? i < filled - 2
                ? "#069"
                : "#09C"
              : i === filled
                ? "#06A"
                : "#222",
            border: "1px solid #444",
            borderTop: "1px solid #555",
            borderLeft: "1px solid #555",
          }}
        />
      ))}
    </div>
  );
};

const BootScreen = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);
  const [shown, setShown] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setShown(false), 600);
          return 100;
        }
        return Math.min(prev + Math.random() * 12 + 3, 100);
      });
    }, 250);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence onExitComplete={onFinish}>
      {shown && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
          style={{ backgroundColor: "#000" }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {CRT}

          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              className="flex items-center justify-center gap-4 mb-6"
              animate={{ opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            >
              {WIN98_FLAG}
              <h1
                className="text-white tracking-wide"
                style={{
                  fontFamily: "'Press Start 2P', monospace",
                  fontSize: "20px",
                  textShadow: "0 0 20px rgba(0,100,255,0.3)",
                }}
              >
                Microsoft Windows 98
              </h1>
            </motion.div>

            <div
              className="mx-auto"
              style={{
                padding: "6px 20px",
                background: "#0a0a0a",
                border: "2px solid #333",
                borderRadius: "2px",
              }}
            >
              <BlockBar progress={progress} />
            </div>

            <p
              className="text-gray-500 mt-4"
              style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "8px" }}
            >
              {progress < 100 ? "Please wait while Windows starts..." : "Welcome!"}
            </p>
          </motion.div>

          <motion.p
            className="text-gray-700 text-xs absolute bottom-8"
            style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "7px" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            &copy; Microsoft Corporation 1981-1998
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BootScreen;
