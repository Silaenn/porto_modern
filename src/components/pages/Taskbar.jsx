import React from "react";

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

  const dateStr = clock.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
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
      <button
        className="flex items-center gap-1 h-full px-1 cursor-pointer"
        style={{
          borderRight: "1px solid #808080",
          borderLeft: "1px solid #FFF",
          minWidth: "80px",
          background: "transparent",
          fontFamily: "Tahoma, sans-serif",
        }}
        onClick={onStartClick}
      >
        <div
          className="flex items-center gap-1 px-1 py-0.5 h-5/6"
          style={{
            boxShadow: "inset 1px 1px 0 #FFF, inset -1px -1px 0 #808080",
          }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" style={{imageRendering: "pixelated"}}>
            <rect x="1" y="1" width="6" height="6" fill="#FF4444" />
            <rect x="9" y="1" width="6" height="6" fill="#44FF44" />
            <rect x="1" y="9" width="6" height="6" fill="#4444FF" />
            <rect x="9" y="9" width="6" height="6" fill="#FFFF44" />
          </svg>
          <span className="font-bold text-sm" style={{fontSize: "13px"}}>Start</span>
        </div>
      </button>

      <div className="flex-1 flex items-center gap-0.5 px-1 overflow-x-auto">
        {openWindows.map((w) => (
          <button
            key={w.id}
            className="flex items-center gap-1.5 px-2 h-5/6 text-xs truncate max-w-[150px] cursor-pointer"
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
            {w.iconCmp && <w.iconCmp size={14} />}
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
        title={dateStr}
      >
        <span className="text-xs w-full text-right" style={{fontSize: "11px"}}>
          {timeStr}
        </span>
      </div>
    </div>
  );
};

export default Taskbar;
