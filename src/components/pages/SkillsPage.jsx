import React, { useState, useEffect, useRef } from "react";
import {
  FileCode, PaintBucket, FileJson, FileType,
  Atom, Wind, Server, Database,
  FileSymlink, Container, PenTool, GitBranch, Box,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const skillCategories = [
  {
    name: "Frontend",
    skills: [
      { name: "HTML 5", icon: FileCode, level: 95 },
      { name: "CSS 3", icon: PaintBucket, level: 90 },
      { name: "JavaScript", icon: FileJson, level: 92 },
      { name: "TypeScript", icon: FileType, level: 85 },
      { name: "React JS", icon: Atom, level: 90 },
      { name: "Tailwind CSS", icon: Wind, level: 88 },
    ],
  },
  {
    name: "Backend & Database",
    skills: [
      { name: "Node JS", icon: Server, level: 82 },
      { name: "MongoDB", icon: Database, level: 78 },
      { name: "Next JS", icon: FileSymlink, level: 80 },
    ],
  },
  {
    name: "Tools & Other",
    skills: [
      { name: "Git", icon: GitBranch, level: 88 },
      { name: "Docker", icon: Container, level: 65 },
      { name: "Figma", icon: PenTool, level: 70 },
      { name: "Three JS", icon: Box, level: 60 },
    ],
  },
];

const SkillRow = ({ skill, animate }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (animate) {
      const raf = requestAnimationFrame(() => {
        requestAnimationFrame(() => setWidth(skill.level));
      });
      return () => cancelAnimationFrame(raf);
    }
  }, [animate, skill.level]);

  return (
    <div className="flex items-center gap-3 px-3 py-2">
      <skill.icon className="w-5 h-5 text-blue-800 flex-shrink-0" />
      <div className="flex-1 min-w-0">
        <div className="flex justify-between text-xs text-black">
          <span className="font-medium">{skill.name}</span>
          <span className="text-gray-600">{skill.level}%</span>
        </div>
        <div className="mt-1 h-3 bg-gray-400 border border-gray-500 overflow-hidden">
          <div
            className="h-full transition-all duration-700 ease-out"
            style={{
              width: `${width}%`,
              background: skill.level > 85
                ? "linear-gradient(90deg, #000080, #1084D0)"
                : "linear-gradient(90deg, #006000, #00A000)",
            }}
          />
        </div>
      </div>
    </div>
  );
};

const SkillsPage = () => {
  const [expanded, setExpanded] = useState({});
  const activated = useRef({});

  const toggle = (catName) => {
    const next = !expanded[catName];
    if (next) activated.current[catName] = true;
    setExpanded((prev) => ({ ...prev, [catName]: next }));
  };

  return (
    <div
      className="p-0 overflow-hidden flex flex-col"
      style={{
        fontFamily: "Tahoma, sans-serif",
        background: "#C0C0C0",
        height: "100%",
        fontSize: "12px",
      }}
    >
      <div className="bg-blue-800 text-white text-xs font-bold px-2 py-1 flex items-center gap-1">
        <Box className="w-3 h-3" /> Device Manager
      </div>

      <div className="flex-1 overflow-auto p-3 space-y-2">
        {skillCategories.map((cat) => (
          <div key={cat.name} className="bg-gray-200 border border-gray-400 rounded-sm overflow-hidden">
            <button
              className="w-full flex items-center gap-2 px-2 py-1.5 text-xs font-bold text-left cursor-pointer"
              style={{
                background: "linear-gradient(90deg, #000080, #1084D0)",
                color: "#FFF",
                border: "none",
                fontFamily: "Tahoma, sans-serif",
              }}
              onClick={() => toggle(cat.name)}
            >
              <span className="text-white">{expanded[cat.name] ? "\u25BC" : "\u25B6"}</span>
              {cat.name}
              <span className="text-white/70 ml-auto text-[10px]">{cat.skills.length} devices</span>
            </button>

            <AnimatePresence initial={false}>
              {(expanded[cat.name] ?? true) && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="divide-y divide-gray-400">
                    {cat.skills.map((skill) => (
                      <SkillRow
                        key={skill.name}
                        skill={skill}
                        animate={!!activated.current[cat.name]}
                      />
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      <div className="bg-blue-800 text-white text-xs px-2 py-0.5 flex items-center gap-1">
        <span>{skillCategories.reduce((a, c) => a + c.skills.length, 0)} device(s) detected</span>
      </div>
    </div>
  );
};

export default SkillsPage;
