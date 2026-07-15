import React, { useState } from "react";

const Taskbar = ({ openWindows, activeWindow, onWindowClick, onStartClick }) => {
  const [clock, setClock] = React.useState(new Date());

  React.useEffect(() => {
    const interval = setInterval(() => setClock(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const timeStr = clock.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[9999] flex items-center"
      style={{
        height: "40px",
        background: "#C0C0C0",
        borderTop: "2px solid #FFF",
        boxShadow: "0 -1px 0 #808080",
      }}
    >
      <div
        className="flex items-center gap-1 h-full px-1 cursor-pointer active:scale-[0.98]"
        style={{
          borderRight: "1px solid #808080",
          borderLeft: "1px solid #FFF",
          minWidth: "80px",
        }}
        onClick={onStartClick}
      >
        <div
          className="flex items-center gap-1 px-1 py-0.5 h-5/6"
          style={{
            background: onStartClick ? undefined : undefined,
            boxShadow: "inset 1px 1px 0 #FFF, inset -1px -1px 0 #808080",
          }}
        >
          <img
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Crect x='1' y='1' width='6' height='6' fill='%23FF4444'/%3E%3Crect x='9' y='1' width='6' height='6' fill='%2344FF44'/%3E%3Crect x='1' y='9' width='6' height='6' fill='%234444FF'/%3E%3Crect x='9' y='9' width='6' height='6' fill='%23FFFF44'/%3E%3C/svg%3E"
            alt="Start"
            className="w-4 h-4"
          />
          <span
            className="font-bold text-sm"
            style={{
              fontFamily: "Tahoma, sans-serif",
              fontSize: "13px",
            }}
          >
            Start
          </span>
        </div>
      </div>

      <div className="flex-1 flex items-center gap-0.5 px-1 overflow-x-auto">
        {openWindows.map((w) => (
          <button
            key={w.id}
            className="flex items-center gap-1 px-2 h-5/6 text-xs truncate max-w-[150px] cursor-pointer"
            style={{
              background: activeWindow === w.id ? "#C0C0C0" : "#D4D4D4",
              border: "1px solid #808080",
              borderTop: "1px solid #FFF",
              borderLeft: "1px solid #FFF",
              fontFamily: "Tahoma, sans-serif",
              fontSize: "11px",
              boxShadow:
                activeWindow === w.id
                  ? "inset 1px 1px 0 #808080, inset -1px -1px 0 #FFF"
                  : undefined,
            }}
            onClick={() => onWindowClick(w.id)}
          >
            {w.icon && <span className="text-xs">{w.icon}</span>}
            <span className="truncate">{w.title}</span>
          </button>
        ))}
      </div>

      <div
        className="flex items-center h-full px-2"
        style={{
          borderLeft: "1px solid #808080",
          borderRight: "1px solid #FFF",
          minWidth: "80px",
        }}
      >
        <span
          className="text-xs w-full text-right"
          style={{
            fontFamily: "Tahoma, sans-serif",
            fontSize: "11px",
          }}
        >
          {timeStr}
        </span>
      </div>
    </div>
  );
};

export default Taskbar;
