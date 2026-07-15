import React, { useState, useRef, useCallback } from "react";

const Window = ({
  title,
  icon,
  onClose,
  isFocused,
  onFocus,
  children,
  defaultPosition = { x: 100, y: 100 },
  defaultSize = { width: 600, height: 400 },
  zIndex: propZIndex = null,
}) => {
  const [position, setPosition] = useState(defaultPosition);
  const [size, setSize] = useState(defaultSize);
  const [isDragging, setIsDragging] = useState(false);
  const [isResizing, setIsResizing] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const [maximizedState, setMaximizedState] = useState(null);
  const dragRef = useRef({ startX: 0, startY: 0, startPosX: 0, startPosY: 0 });
  const resizeRef = useRef({ startX: 0, startY: 0, startW: 0, startH: 0 });

  const handleMouseDown = useCallback(
    (e) => {
      onFocus();
      if (isMaximized) return;
      setIsDragging(true);
      dragRef.current = {
        startX: e.clientX,
        startY: e.clientY,
        startPosX: position.x,
        startPosY: position.y,
      };
    },
    [position, isMaximized, onFocus]
  );

  const handleMouseMove = useCallback(
    (e) => {
      if (isDragging) {
        const dx = e.clientX - dragRef.current.startX;
        const dy = e.clientY - dragRef.current.startY;
        setPosition({
          x: Math.max(0, dragRef.current.startPosX + dx),
          y: Math.max(0, dragRef.current.startPosY + dy),
        });
      }
      if (isResizing) {
        const dw = e.clientX - resizeRef.current.startX;
        const dh = e.clientY - resizeRef.current.startY;
        setSize({
          width: Math.max(300, resizeRef.current.startW + dw),
          height: Math.max(200, resizeRef.current.startH + dh),
        });
      }
    },
    [isDragging, isResizing]
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
    setIsResizing(false);
  }, []);

  const handleMaximize = () => {
    if (isMaximized) {
      setPosition(maximizedState.position);
      setSize(maximizedState.size);
      setIsMaximized(false);
    } else {
      setMaximizedState({ position, size });
      setPosition({ x: 0, y: 0 });
      setSize({ width: window.innerWidth, height: window.innerHeight - 50 });
      setIsMaximized(true);
    }
  };

  const handleResizeMouseDown = useCallback((e) => {
    e.stopPropagation();
    setIsResizing(true);
    resizeRef.current = {
      startX: e.clientX,
      startY: e.clientY,
      startW: size.width,
      startH: size.height,
    };
  }, [size]);

  React.useEffect(() => {
    if (isDragging || isResizing) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, isResizing, handleMouseMove, handleMouseUp]);

  const zIndex = propZIndex ?? (isFocused ? 1000 : 999);

  if (isMinimized) return null;

  return (
    <div
      className="absolute"
      style={{
        left: position.x,
        top: position.y,
        width: isMaximized ? "100vw" : size.width,
        height: isMaximized ? "calc(100vh - 50px)" : size.height,
        zIndex,
      }}
    >
      <div
        className="flex flex-col h-full select-none"
        style={{
          boxShadow: "2px 2px 10px rgba(0,0,0,0.5)",
          border: "2px solid #808080",
          borderTop: "2px solid #C0C0C0",
          borderLeft: "2px solid #C0C0C0",
        }}
      >
        <div
          className="flex items-center px-1 py-0.5 cursor-default"
          style={{
            background: "linear-gradient(90deg, #000080 0%, #1084D0 100%)",
            height: "28px",
            minHeight: "28px",
          }}
          onMouseDown={handleMouseDown}
        >
          {icon && (
            <span className="flex items-center mr-1.5 ml-0.5">{icon}</span>
          )}
          <span
            className="text-white text-sm font-bold flex-1 truncate"
            style={{ fontFamily: "Tahoma, sans-serif", fontSize: "12px" }}
          >
            {title}
          </span>

          <div className="flex gap-1">
            <button
              className="win-btn text-xs flex items-center justify-center"
              style={{
                width: "21px",
                height: "21px",
                background: "#C0C0C0",
                border: "1px solid #808080",
                borderTop: "1px solid #FFF",
                borderLeft: "1px solid #FFF",
                fontSize: "10px",
                fontWeight: "bold",
                fontFamily: "Tahoma, sans-serif",
                cursor: "pointer",
                padding: 0,
                lineHeight: "1",
              }}
              onClick={() => setIsMinimized(true)}
              onMouseDown={(e) => e.stopPropagation()}
            >
              _
            </button>
            <button
              className="win-btn text-xs flex items-center justify-center"
              style={{
                width: "21px",
                height: "21px",
                background: "#C0C0C0",
                border: "1px solid #808080",
                borderTop: "1px solid #FFF",
                borderLeft: "1px solid #FFF",
                fontSize: "10px",
                fontWeight: "bold",
                fontFamily: "Tahoma, sans-serif",
                cursor: "pointer",
                padding: 0,
                lineHeight: "1",
              }}
              onClick={handleMaximize}
              onMouseDown={(e) => e.stopPropagation()}
            >
              {isMaximized ? "\u2296" : "\u25A1"}
            </button>
            <button
              className="win-btn text-xs flex items-center justify-center"
              style={{
                width: "21px",
                height: "21px",
                background: "#C0C0C0",
                border: "1px solid #808080",
                borderTop: "1px solid #FFF",
                borderLeft: "1px solid #FFF",
                fontSize: "10px",
                fontWeight: "bold",
                fontFamily: "Tahoma, sans-serif",
                cursor: "pointer",
                padding: 0,
                lineHeight: "1",
              }}
              onClick={onClose}
              onMouseDown={(e) => e.stopPropagation()}
            >
              ✕
            </button>
          </div>
        </div>

        <div
          className="flex-1 overflow-auto"
          style={{
            background: "#C0C0C0",
            cursor: "default",
          }}
          onClick={onFocus}
        >
          {children}
        </div>

        <div
          className="h-1 cursor-se-resize"
          style={{ background: "#C0C0C0" }}
          onMouseDown={handleResizeMouseDown}
        />
      </div>
    </div>
  );
};

export default Window;
