import React, { useState, useCallback, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Window from "./Window";
import DesktopIcon from "./DesktopIcon";
import Taskbar from "./Taskbar";
import AboutPage from "./AboutPage";
import ExperiencePage from "./ExperiencePage";
import SkillsPage from "./SkillsPage";
import ProjectsPage from "./ProjectsPage";
import ContactPage from "./ContactPage";
import Win98Dialog from "../Win98Dialog";
import { NoteIcon, BriefcaseIcon, TerminalIcon, FolderIcon, MailIcon } from "../DesktopAppIcons";

const desktopApps = [
  { id: "about", iconName: "note", label: "About Me", title: "About Me" },
  { id: "work", iconName: "briefcase", label: "Work", title: "Work Experience" },
  { id: "skills", iconName: "code", label: "Skills", title: "Technical Skills" },
  { id: "projects", iconName: "folder", label: "Projects", title: "Projects" },
  { id: "contact", iconName: "mail", label: "Contact", title: "Contact Me" },
];

const iconComponents = {
  note: NoteIcon,
  briefcase: BriefcaseIcon,
  code: TerminalIcon,
  folder: FolderIcon,
  mail: MailIcon,
};

const appComponents = {
  about: AboutPage,
  work: ExperiencePage,
  skills: SkillsPage,
  projects: ProjectsPage,
  contact: ContactPage,
};

const Desktop = () => {
  const [openWindows, setOpenWindows] = useState([]);
  const [activeWindow, setActiveWindow] = useState(null);
  const [selectedIcon, setSelectedIcon] = useState(null);
  const [zCounter, setZCounter] = useState(100);
  const [showStartMenu, setShowStartMenu] = useState(false);
  const [minimizedWindows, setMinimizedWindows] = useState(new Set());
  const [windowKeys, setWindowKeys] = useState({});
  const [showShutdown, setShowShutdown] = useState(false);
  const openWindowsRef = useRef(openWindows);
  openWindowsRef.current = openWindows;

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const focusWindow = useCallback((id) => {
    setActiveWindow(id);
    setZCounter((prev) => prev + 1);
  }, []);

  const openApp = useCallback(
    (id) => {
      setSelectedIcon(null);
      setShowStartMenu(false);
      setMinimizedWindows((prev) => {
        const next = new Set(prev);
        next.delete(id);
        return next;
      });
      if (!openWindowsRef.current.find((w) => w.id === id)) {
        const app = desktopApps.find((a) => a.id === id);
        const IconCmp = iconComponents[app.iconName];
        setOpenWindows((prev) => [
          ...prev,
          { id, title: app.title, iconName: app.iconName, iconCmp: IconCmp },
        ]);
      } else if (minimizedWindows.has(id)) {
        setWindowKeys((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
      }
      setTimeout(() => focusWindow(id), 50);
    },
    [focusWindow, minimizedWindows]
  );

  const closeWindow = useCallback((id) => {
    setOpenWindows((prev) => prev.filter((w) => w.id !== id));
    setActiveWindow((prev) => (prev === id ? null : prev));
    setMinimizedWindows((prev) => {
      const next = new Set(prev);
      next.delete(id);
      return next;
    });
  }, []);

  const handleMinimize = useCallback((id) => {
    setMinimizedWindows((prev) => new Set([...prev, id]));
    setWindowKeys((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
    setActiveWindow((prev) => {
      if (prev === id) {
        const remaining = [];
        for (const w of openWindowsRef.current) {
          if (w.id !== id) remaining.push(w.id);
        }
        return remaining.length > 0 ? remaining[0] : null;
      }
      return prev;
    });
  }, []);

  const handleRestore = useCallback(
    (id) => {
      setMinimizedWindows((prev) => {
        const next = new Set(prev);
        next.delete(id);
        return next;
      });
      setWindowKeys((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
      focusWindow(id);
    },
    [focusWindow]
  );

  const handleTaskbarClick = useCallback(
    (id) => {
      if (minimizedWindows.has(id)) {
        handleRestore(id);
      } else if (activeWindow === id) {
        handleMinimize(id);
      } else {
        focusWindow(id);
      }
    },
    [minimizedWindows, activeWindow, handleRestore, handleMinimize, focusWindow]
  );

  const getWindowPosition = (id) => {
    if (isMobile) return { x: 0, y: 0 };
    return ({
      about: { x: 60, y: 40 },
      work: { x: 120, y: 80 },
      skills: { x: 180, y: 60 },
      projects: { x: 80, y: 100 },
      contact: { x: 140, y: 50 },
    }[id] || { x: 100, y: 100 });
  };

  const getWindowSize = (id) => {
    if (isMobile) return { width: window.innerWidth, height: window.innerHeight - 40 };
    return ({
      about: { width: 640, height: 480 },
      work: { width: 700, height: 500 },
      skills: { width: 640, height: 420 },
      projects: { width: 740, height: 520 },
      contact: { width: 540, height: 440 },
    }[id] || { width: 600, height: 400 });
  };

  const iconSize = isMobile ? 24 : 32;

  const desktopPositions = isMobile
    ? [
        { id: "projects", left: 8, top: 8 },
        { id: "about", left: 8, top: 78 },
        { id: "work", left: 8, top: 148 },
        { id: "skills", left: 8, top: 218 },
        { id: "contact", left: 8, top: 288 },
      ]
    : [
        { id: "projects", left: 16, top: 20 },
        { id: "about", left: 16, top: 120 },
        { id: "work", left: 16, top: 220 },
        { id: "skills", left: 16, top: 320 },
        { id: "contact", left: 16, top: 420 },
      ];

  return (
    <motion.div
      className="fixed inset-0 select-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      style={{
        backgroundColor: "#008080",
        backgroundImage: `radial-gradient(circle at 20% 30%, rgba(0,255,255,0.08) 0%, transparent 50%),
                          radial-gradient(circle at 80% 70%, rgba(255,107,157,0.08) 0%, transparent 50%)`,
      }}
      onClick={() => setSelectedIcon(null)}
    >
      {desktopPositions.map(({ id, left, top }) => {
        const app = desktopApps.find((a) => a.id === id);
        const IconCmp = iconComponents[app.iconName];
        return (
          <div key={id} style={{ position: "absolute", left, top }}>
            <DesktopIcon
              icon={<IconCmp size={iconSize} />}
              label={app.label}
              iconSize={iconSize}
              selected={selectedIcon === id}
              onClick={() => setSelectedIcon(selectedIcon === id ? null : id)}
              onDoubleClick={() => openApp(id)}
            />
          </div>
        );
      })}

      <AnimatePresence>
        {openWindows.map((w) => {
          const Component = appComponents[w.id];
          const zIndex = activeWindow === w.id ? 1000 + zCounter : 999;
          return (
            <Window
              key={w.id + "-" + (windowKeys[w.id] || 0)}
              title={w.title}
              icon={<w.iconCmp size={16} />}
              isFocused={activeWindow === w.id}
              onFocus={() => focusWindow(w.id)}
              onClose={() => closeWindow(w.id)}
              onMinimize={() => handleMinimize(w.id)}
              defaultPosition={getWindowPosition(w.id)}
              defaultSize={getWindowSize(w.id)}
              defaultMaximized={isMobile}
              defaultMinimized={minimizedWindows.has(w.id)}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              style={{ zIndex }}
            >
              <Component />
            </Window>
          );
        })}
      </AnimatePresence>

      <Taskbar
        openWindows={openWindows}
        activeWindow={activeWindow}
        minimizedWindows={minimizedWindows}
        onWindowClick={handleTaskbarClick}
        onStartClick={() => setShowStartMenu(!showStartMenu)}
      />

      <AnimatePresence>
        {showStartMenu && (
          <>
            <div
              className="fixed inset-0 z-[9998]"
              onClick={() => setShowStartMenu(false)}
            />
            <motion.div
              className="fixed z-[9999]"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ duration: 0.12, ease: "easeOut" }}
              style={{
                bottom: "40px",
                left: "0",
                background: "#C0C0C0",
                border: "2px solid #808080",
                borderTop: "2px solid #FFF",
                borderLeft: "2px solid #FFF",
                minWidth: "200px",
                boxShadow: "2px -2px 5px rgba(0,0,0,0.3)",
              }}
            >
              <div className="flex" style={{ minHeight: isMobile ? "auto" : "300px" }}>
                <div
                  className="flex flex-col items-center py-2 px-1 font-win98"
                  style={{
                    background: "linear-gradient(0deg, #000080 0%, #1084D0 100%)",
                    width: "24px",
                  }}
                >
                  <span className="text-white font-bold" style={{ writingMode: "vertical-rl", textOrientation: "mixed", fontSize: "11px" }}>
                    Windows98
                  </span>
                </div>

                <div className="flex-1 py-1">
                  {desktopApps.map((app) => {
                    const IconCmp = iconComponents[app.iconName];
                    return (
                      <button
                        key={app.id}
className="w-full flex items-center gap-2 px-2 py-2 text-left hover:bg-blue-800 hover:text-white cursor-pointer font-win98 text-xs"
                        style={{
                          border: "none",
                          background: "transparent",
                          color: "#000",
                        }}
                        onClick={() => openApp(app.id)}
                      >
                        <IconCmp size={20} color="#000" />
                        <span>{app.title}</span>
                      </button>
                    );
                  })}

                  <div className="border-t border-gray-400 my-1 mx-2" />

                  <button
                    className="w-full flex items-center gap-2 px-2 py-2 text-left hover:bg-blue-800 hover:text-white cursor-pointer font-win98 text-xs min-h-[44px]"
                    style={{
                      border: "none",
                      background: "transparent",
                      color: "#000",
                    }}
                    onClick={() => {
                      setShowStartMenu(false);
                      setShowShutdown(true);
                    }}
                  >
                    <svg width="20" height="20" viewBox="0 0 32 32" style={{imageRendering: "pixelated"}}>
                      <circle cx="16" cy="16" r="13" fill="none" stroke="#000" strokeWidth="2" />
                      <rect x="14" y="4" width="4" height="10" fill="#000" />
                      <circle cx="16" cy="21" r="2" fill="#000" />
                    </svg>
                    <span>Shut Down</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <Win98Dialog
        open={showShutdown}
        title="Shut Down"
        message="Shut down the computer?"
        onClose={() => setShowShutdown(false)}
        actions={[
          { label: "Yes", onClick: () => { setShowShutdown(false); window.location.reload(); } },
          { label: "No", onClick: () => setShowShutdown(false) },
        ]}
      />
    </motion.div>
  );
};

export default Desktop;
