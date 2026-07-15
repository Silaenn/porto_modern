import React, { useState, useCallback } from "react";
import Window from "./Window";
import DesktopIcon from "./DesktopIcon";
import Taskbar from "./Taskbar";
import AboutPage from "./AboutPage";
import ExperiencePage from "./ExperiencePage";
import SkillsPage from "./SkillsPage";
import ProjectsPage from "./ProjectsPage";
import ContactPage from "./ContactPage";
import { NoteIcon, BriefcaseIcon, GearIcon, FolderIcon, MailIcon } from "../DesktopAppIcons";

const desktopApps = [
  { id: "about", iconName: "note", label: "About Me", title: "About Me" },
  { id: "work", iconName: "briefcase", label: "Work History", title: "Work Experience" },
  { id: "skills", iconName: "gear", label: "Skills", title: "Technical Skills" },
  { id: "projects", iconName: "folder", label: "My Projects", title: "Projects" },
  { id: "contact", iconName: "mail", label: "Contact", title: "Contact Me" },
];

const iconComponents = {
  note: NoteIcon,
  briefcase: BriefcaseIcon,
  gear: GearIcon,
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
  const [zCounter, setZCounter] = useState(100);
  const [showStartMenu, setShowStartMenu] = useState(false);

  const focusWindow = useCallback((id) => {
    setActiveWindow(id);
    setZCounter((prev) => prev + 1);
  }, []);

  const openApp = useCallback(
    (id) => {
      setShowStartMenu(false);
      if (!openWindows.find((w) => w.id === id)) {
        const app = desktopApps.find((a) => a.id === id);
        const IconCmp = iconComponents[app.iconName];
        setOpenWindows((prev) => [
          ...prev,
          { id, title: app.title, iconName: app.iconName, iconCmp: IconCmp },
        ]);
      }
      setTimeout(() => focusWindow(id), 50);
    },
    [openWindows, focusWindow]
  );

  const closeWindow = useCallback((id) => {
    setOpenWindows((prev) => prev.filter((w) => w.id !== id));
    setActiveWindow((prev) => (prev === id ? null : prev));
  }, []);

  const handleWindowClick = useCallback(
    (id) => {
      focusWindow(id);
    },
    [focusWindow]
  );

  const getWindowPosition = (id) => ({
    about: { x: 60, y: 40 },
    work: { x: 120, y: 80 },
    skills: { x: 180, y: 60 },
    projects: { x: 80, y: 100 },
    contact: { x: 140, y: 50 },
  }[id] || { x: 100, y: 100 });

  const getWindowSize = (id) => ({
    about: { width: 640, height: 480 },
    work: { width: 700, height: 500 },
    skills: { width: 640, height: 420 },
    projects: { width: 740, height: 520 },
    contact: { width: 640, height: 500 },
  }[id] || { width: 600, height: 400 });

  const desktopPositions = [
    { id: "projects", left: 16, top: 20 },
    { id: "about", left: 16, top: 120 },
    { id: "work", left: 16, top: 220 },
    { id: "skills", left: 16, top: 320 },
    { id: "contact", left: 16, top: 420 },
  ];

  return (
    <div
      className="fixed inset-0 overflow-hidden select-none"
      style={{
        backgroundColor: "#008080",
        backgroundImage: `radial-gradient(circle at 20% 30%, rgba(0,255,255,0.08) 0%, transparent 50%),
                          radial-gradient(circle at 80% 70%, rgba(255,107,157,0.08) 0%, transparent 50%)`,
      }}
    >
      {desktopPositions.map(({ id, left, top }) => {
        const app = desktopApps.find((a) => a.id === id);
        const IconCmp = iconComponents[app.iconName];
        return (
          <div
            key={id}
            style={{ position: "absolute", left, top }}
          >
            <DesktopIcon
              icon={<IconCmp size={32} />}
              label={app.label}
              onDoubleClick={() => openApp(id)}
            />
          </div>
        );
      })}

      {openWindows.map((w) => {
        const Component = appComponents[w.id];
        const zIndex = activeWindow === w.id ? 1000 + zCounter : 999;
        return (
          <Window
            key={w.id}
            title={w.title}
            icon={<w.iconCmp size={16} />}
            isFocused={activeWindow === w.id}
            onFocus={() => focusWindow(w.id)}
            onClose={() => closeWindow(w.id)}
            defaultPosition={getWindowPosition(w.id)}
            defaultSize={getWindowSize(w.id)}
            zIndex={zIndex}
          >
            <Component />
          </Window>
        );
      })}

      <Taskbar
        openWindows={openWindows}
        activeWindow={activeWindow}
        onWindowClick={handleWindowClick}
        onStartClick={() => setShowStartMenu(!showStartMenu)}
      />

      {showStartMenu && (
        <>
          <div
            className="fixed inset-0 z-[9998]"
            onClick={() => setShowStartMenu(false)}
          />
          <div
            className="fixed z-[9999]"
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
            <div className="flex" style={{ minHeight: "300px" }}>
              <div
                className="flex flex-col items-center py-2 px-1"
                style={{
                  background: "linear-gradient(0deg, #000080 0%, #1084D0 100%)",
                  width: "24px",
                }}
              >
                <span className="text-white text-xs font-bold" style={{ writingMode: "vertical-rl", textOrientation: "mixed", fontSize: "10px", fontFamily: "Tahoma, sans-serif" }}>
                  Windows98
                </span>
              </div>

              <div className="flex-1 py-1">
                {desktopApps.map((app) => {
                  const IconCmp = iconComponents[app.iconName];
                  return (
                    <button
                      key={app.id}
                      className="w-full flex items-center gap-2 px-2 py-1.5 text-left hover:bg-blue-800 hover:text-white cursor-pointer"
                      style={{
                        fontFamily: "Tahoma, sans-serif",
                        fontSize: "12px",
                        border: "none",
                        background: "transparent",
                        color: "#000",
                      }}
                      onClick={() => openApp(app.id)}
                    >
                      <IconCmp size={20} />
                      <span>{app.title}</span>
                    </button>
                  );
                })}

                <div className="border-t border-gray-400 my-1 mx-2" />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Desktop;
