import React from "react";

const DesktopIcon = ({ icon, label, selected, onClick, onDoubleClick }) => {
  const handleClick = (e) => {
    e.stopPropagation();
    onClick();
  };

  const handleDoubleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onDoubleClick();
  };

  return (
    <div
      className="flex flex-col items-center w-20 cursor-pointer"
      onClick={handleClick}
      onDoubleClick={handleDoubleClick}
    >
      <div className="w-14 h-14 flex items-center justify-center mb-1">
        {icon}
      </div>
      <span
        className="text-xs text-center px-1 py-0.5 truncate max-w-full"
        style={{
          fontFamily: "Tahoma, sans-serif",
          fontSize: "11px",
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
