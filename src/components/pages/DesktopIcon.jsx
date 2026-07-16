import React, { useRef, useCallback } from "react";

const isTouchDevice = typeof window !== "undefined" && "ontouchstart" in window;

const DesktopIcon = ({ icon, label, selected, onClick, onDoubleClick, iconSize = 32 }) => {
  const lastTap = useRef(0);

  const handleClick = useCallback((e) => {
    e.stopPropagation();
    if (isTouchDevice) {
      const now = Date.now();
      if (now - lastTap.current < 300) return;
      lastTap.current = now;
      onClick();
      setTimeout(() => onDoubleClick(), 250);
    } else {
      onClick();
    }
  }, [onClick, onDoubleClick]);

  const handleDoubleClick = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!isTouchDevice) onDoubleClick();
  }, [onDoubleClick]);

  return (
    <div
      className="flex flex-col items-center cursor-pointer"
      style={{ width: iconSize + 36 }}
      onClick={handleClick}
      onDoubleClick={handleDoubleClick}
    >
      <div
        className="flex items-center justify-center mb-1"
        style={{ width: iconSize + 4, height: iconSize + 4 }}
      >
        {icon}
      </div>
      <span
        className="text-xs text-center px-1 py-0.5 truncate max-w-full"
        style={{
          fontFamily: "Tahoma, sans-serif",
          fontSize: Math.max(9, Math.min(11, iconSize * 0.35)) + "px",
          color: selected ? "#FFF" : "#FFF",
          background: selected ? "rgba(0,0,128,0.6)" : "transparent",
          border: selected ? "1px dotted rgba(255,255,255,0.5)" : "1px solid transparent",
        }}
      >
        {label}
      </span>
    </div>
  );
};

export default DesktopIcon;
