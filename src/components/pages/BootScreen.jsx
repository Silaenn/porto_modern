import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BootScreen = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onFinish, 500);
          return 100;
        }
        const increment = Math.random() * 15 + 2;
        return Math.min(prev + increment, 100);
      });
    }, 300);

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex flex-col items-center justify-center"
        style={{ backgroundColor: "#000000" }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-12 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500 via-green-500 to-blue-500 rounded-lg opacity-80 animate-pulse" />
              <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-sm">
                Win
              </span>
            </div>
            <h1
              className="text-white text-3xl font-bold tracking-wide"
              style={{
                fontFamily: "'Press Start 2P', monospace",
                fontSize: "18px",
                textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
              }}
            >
              Microsoft Windows 98
            </h1>
          </div>

          <div
            className="w-80 h-5 bg-gray-800 border-2 border-gray-600 rounded-sm overflow-hidden shadow-inner mx-auto"
            style={{ imageRendering: "pixelated" }}
          >
            <div
              className="h-full bg-gradient-to-r from-blue-600 via-blue-400 to-blue-300 transition-all duration-200 ease-out rounded-sm"
              style={{
                width: `${progress}%`,
                boxShadow: "inset 0 1px 2px rgba(255,255,255,0.3)",
              }}
            />
          </div>

          <p
            className="text-gray-400 text-xs mt-4"
            style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "8px" }}
          >
            {progress < 100
              ? "Starting Windows 98..."
              : "Welcome!"}
          </p>
        </div>

        <p
          className="text-gray-600 text-xs absolute bottom-8"
          style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "7px" }}
        >
          &copy; Microsoft Corporation 1981-1998
        </p>
      </motion.div>
    </AnimatePresence>
  );
};

export default BootScreen;
