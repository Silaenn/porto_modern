import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const Btn = ({ children, onClick }) => (
  <button
    className="px-6 py-1 text-xs cursor-pointer"
    style={{
      background: "#C0C0C0",
      border: "2px solid #808080",
      borderTop: "2px solid #FFF",
      borderLeft: "2px solid #FFF",
      fontFamily: "Tahoma, sans-serif",
      color: "#000",
      minWidth: "75px",
    }}
    onClick={onClick}
  >
    {children}
  </button>
);

const Win98Dialog = ({ open, title, message, onClose, actions }) => {
  return (
    <AnimatePresence>
      {open && (
        <>
          <div
            className="fixed inset-0 z-[10000]"
            onClick={onClose}
          />
          <motion.div
            className="fixed z-[10001]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.12 }}
            style={{
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              minWidth: "280px",
              maxWidth: "360px",
            }}
          >
            <div
              style={{
                border: "2px solid #808080",
                borderTop: "2px solid #C0C0C0",
                borderLeft: "2px solid #C0C0C0",
                boxShadow: "3px 3px 8px rgba(0,0,0,0.4)",
                background: "#C0C0C0",
              }}
            >
              <div
                className="flex items-center px-1 py-0.5"
                style={{
                  background: "linear-gradient(90deg, #000080, #1084D0)",
                  height: "24px",
                }}
              >
                <span
                  className="text-white text-xs font-bold flex-1 truncate ml-0.5"
                  style={{ fontFamily: "Tahoma, sans-serif", fontSize: "11px" }}
                >
                  {title || "Notice"}
                </span>
              </div>

              <div className="p-4 flex items-start gap-3">
                <div
                  className="flex items-center justify-center w-10 h-10 flex-shrink-0"
                  style={{
                    border: "2px solid #808080",
                    borderTop: "2px solid #FFF",
                    borderLeft: "2px solid #FFF",
                    background: "#D4D4D4",
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 32 32" style={{imageRendering: "pixelated"}}>
                    <circle cx="16" cy="16" r="14" fill="#000080" />
                    <text x="16" y="22" textAnchor="middle" fill="#FFF" fontSize="18" fontWeight="bold">i</text>
                  </svg>
                </div>
                <p
                  className="text-black text-xs flex-1"
                  style={{ fontFamily: "Tahoma, sans-serif", lineHeight: "1.3" }}
                >
                  {message}
                </p>
              </div>

              <div className="flex justify-center gap-2 pb-3">
                {actions ? (
                  actions.map((a, i) => (
                    <Btn key={i} onClick={a.onClick}>{a.label}</Btn>
                  ))
                ) : (
                  <Btn onClick={onClose}>OK</Btn>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Win98Dialog;
