import React from "react";

const DesktopIcon = ({ icon, label, onDoubleClick }) => {
  const handleDoubleClick = (e) => {
    e.preventDefault();
    onDoubleClick();
  };

  return (
    <div
      className="flex flex-col items-center w-20 cursor-pointer group"
      onDoubleClick={handleDoubleClick}
    >
      <div className="w-12 h-12 flex items-center justify-center mb-1">
        {typeof icon === "string" ? (
          <span className="text-4xl">{icon}</span>
        ) : (
          icon
        )}
      </div>
      <span
        className="text-white text-xs text-center px-1 py-0.5 rounded group-hover:bg-blue-900/50 group-active:bg-blue-800/70 truncate max-w-full"
        style={{
          fontFamily: "Tahoma, sans-serif",
          fontSize: "11px",
          textShadow: "1px 1px 2px rgba(0,0,0,0.8)",
        }}
      >
        {label}
      </span>
    </div>
  );
};

export default DesktopIcon;
