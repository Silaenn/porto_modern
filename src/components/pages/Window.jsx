import React, { useState, useRef, useCallback, useEffect } from "react";
import { motion } from "framer-motion";

const MIN_BTN = (
  <svg width="10" height="10" viewBox="0 0 10 10" style={{display: "block"}}>
    <rect x="1" y="7" width="8" height="2" fill="#000" />
  </svg>
);

const MAX_BTN = (
  <svg width="10" height="10" viewBox="0 0 10 10" style={{display: "block"}}>
    <rect x="1" y="1" width="8" height="8" fill="none" stroke="#000" strokeWidth="1.5" />
  </svg>
);

const RESTORE_BTN = (
  <svg width="10" height="10" viewBox="0 0 10 10" style={{display: "block"}}>
    <rect x="3" y="0" width="7" height="7" fill="#C0C0C0" stroke="#000" strokeWidth="1" />
    <rect x="0" y="3" width="7" height="7" fill="#C0C0C0" stroke="#000" strokeWidth="1" />
  </svg>
);

const CLOSE_BTN = (
  <svg width="10" height="10" viewBox="0 0 10 10" style={{display: "block"}}>
    <line x1="1" y1="1" x2="9" y2="9" stroke="#000" strokeWidth="1.5" />
    <line x1="9" y1="1" x2="1" y2="9" stroke="#000" strokeWidth="1.5" />
  </svg>
);

const Btn = ({ children, onClick, onMouseDown, onTouchStart }) => (
  <button
    className="win-btn"
    style={{
      width: "21px",
      height: "21px",
      background: "#C0C0C0",
      border: "1px solid #808080",
      borderTop: "1px solid #FFF",
      borderLeft: "1px solid #FFF",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      padding: 0,
    }}
    onClick={onClick}
    onMouseDown={onMouseDown}
    onTouchStart={onTouchStart}
  >
    {children}
  </button>
);

const RESIZE_GRIP = (
  <div
    style={{
      position: "absolute",
      bottom: "0",
      right: "0",
      width: "14px",
      height: "14px",
      cursor: "se-resize",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end",
      justifyContent: "flex-end",
      padding: "1px",
      gap: "1px",
    }}
    className="resize-grip"
  >
    <svg width="12" height="12" viewBox="0 0 12 12">
      <line x1="8" y1="12" x2="12" y2="8" stroke="#808080" strokeWidth="1" />
      <line x1="5" y1="12" x2="12" y2="5" stroke="#808080" strokeWidth="1" />
      <line x1="8" y1="12" x2="12" y2="8" stroke="#FFF" strokeWidth="0.5" transform="translate(0.5, -0.5)" />
      <line x1="5" y1="12" x2="12" y2="5" stroke="#FFF" strokeWidth="0.5" transform="translate(0.5, -0.5)" />
      <line x1="10" y1="12" x2="12" y2="10" stroke="#808080" strokeWidth="1" />
      <line x1="10" y1="12" x2="12" y2="10" stroke="#FFF" strokeWidth="0.5" transform="translate(0.5, -0.5)" />
    </svg>
  </div>
);

const Window = ({
  title,
  icon,
  onClose,
  onMinimize,
  isFocused,
  onFocus,
  children,
  defaultPosition = { x: 100, y: 100 },
  defaultSize = { width: 600, height: 400 },
  initial,
  animate,
  exit,
  transition,
  style: externalStyle,
  defaultMaximized = false,
  defaultMinimized = false,
}) => {
  const [position, setPosition] = useState(defaultPosition);
  const [size, setSize] = useState(defaultSize);
  const [isDragging, setIsDragging] = useState(false);
  const [isResizing, setIsResizing] = useState(false);
  const [isHidden, setIsHidden] = useState(defaultMinimized);
  const [isMinimizing, setIsMinimizing] = useState(false);
  const [isMaximized, setIsMaximized] = useState(defaultMaximized);
  const [maximizedState, setMaximizedState] = useState(
    defaultMaximized ? { position: defaultPosition, size: defaultSize } : null
  );
  const dragRef = useRef({ startX: 0, startY: 0, startPosX: 0, startPosY: 0 });
  const resizeRef = useRef({ startX: 0, startY: 0, startW: 0, startH: 0 });
  const minimizeTimer = useRef(null);

  useEffect(() => {
    if (defaultMaximized) {
      setPosition({ x: 0, y: 0 });
      setSize({ width: window.innerWidth, height: window.innerHeight - 50 });
    }
  }, [defaultMaximized]);

  useEffect(() => {
    return () => {
      if (minimizeTimer.current) clearTimeout(minimizeTimer.current);
    };
  }, []);

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

  const handleTouchStart = useCallback(
    (e) => {
      onFocus();
      if (isMaximized) return;
      const touch = e.touches[0];
      setIsDragging(true);
      dragRef.current = {
        startX: touch.clientX,
        startY: touch.clientY,
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

  const handleTouchMove = useCallback(
    (e) => {
      if (isDragging) {
        const touch = e.touches[0];
        const dx = touch.clientX - dragRef.current.startX;
        const dy = touch.clientY - dragRef.current.startY;
        setPosition({
          x: Math.max(0, dragRef.current.startPosX + dx),
          y: Math.max(0, dragRef.current.startPosY + dy),
        });
      }
    },
    [isDragging]
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
    setIsResizing(false);
  }, []);

  const handleTouchEnd = useCallback(() => {
    setIsDragging(false);
    setIsResizing(false);
  }, []);

  const handleResizeMouseDown = useCallback(
    (e) => {
      e.stopPropagation();
      onFocus();
      setIsResizing(true);
      resizeRef.current = {
        startX: e.clientX,
        startY: e.clientY,
        startW: size.width,
        startH: size.height,
      };
    },
    [size, onFocus]
  );

  useEffect(() => {
    if (isDragging || isResizing) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchmove", handleTouchMove, { passive: false });
      window.addEventListener("touchend", handleTouchEnd);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isDragging, isResizing, handleMouseMove, handleMouseUp, handleTouchMove, handleTouchEnd]);

  const handleMinimize = () => {
    if (onMinimize) {
      setIsMinimizing(true);
      minimizeTimer.current = setTimeout(() => {
        onMinimize();
        setIsMinimizing(false);
        setIsHidden(true);
      }, 200);
    }
  };

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

  if (isHidden) return null;

  const titleBarGrad = isFocused
    ? "linear-gradient(90deg, #000080 0%, #1084D0 100%)"
    : "linear-gradient(90deg, #808080 0%, #B0B0B0 100%)";

  const animProps = isMinimizing
    ? { animate: { opacity: 0, scale: 0.3, y: 300 }, transition: { duration: 0.2, ease: "easeIn" } }
    : { initial, animate, exit, transition };

  const Root = (initial || isMinimizing) ? motion.div : "div";

  return (
    <Root
      className="absolute"
      style={{
        left: isMaximized ? 0 : position.x,
        top: isMaximized ? 0 : position.y,
        width: isMaximized ? "100vw" : size.width,
        height: isMaximized ? "calc(100vh - 50px)" : size.height,
        maxWidth: "100vw",
        maxHeight: "calc(100vh - 50px)",
        ...externalStyle,
      }}
      {...animProps}
    >
      <div
        className="flex flex-col h-full select-none overflow-hidden"
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
            background: titleBarGrad,
            height: "28px",
            minHeight: "28px",
          }}
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
        >
          {icon && (
            <span className="flex items-center mr-1.5 ml-0.5">{icon}</span>
          )}
          <span
            className="text-sm font-bold flex-1 truncate"
            style={{
              fontFamily: "Tahoma, sans-serif",
              fontSize: "12px",
              color: isFocused ? "#FFF" : "#DDD",
            }}
          >
            {title}
          </span>

          <div className="flex gap-1">
            <Btn onClick={handleMinimize} onMouseDown={(e) => e.stopPropagation()} onTouchStart={(e) => e.stopPropagation()}>
              {MIN_BTN}
            </Btn>
            <Btn onClick={handleMaximize} onMouseDown={(e) => e.stopPropagation()} onTouchStart={(e) => e.stopPropagation()}>
              {isMaximized ? RESTORE_BTN : MAX_BTN}
            </Btn>
            <Btn onClick={onClose} onMouseDown={(e) => e.stopPropagation()} onTouchStart={(e) => e.stopPropagation()}>
              {CLOSE_BTN}
            </Btn>
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

        {!isMaximized && (
          <div
            style={{ position: "relative", height: "14px", background: "#C0C0C0" }}
            onMouseDown={handleResizeMouseDown}
          >
            {RESIZE_GRIP}
          </div>
        )}
      </div>
    </Root>
  );
};

export default Window;
