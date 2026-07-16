import React, { useState, useEffect } from "react";

const skillCategories = [
  {
    name: "Frontend",
    skills: [
      { name: "HTML 5", level: 95 },
      { name: "CSS 3", level: 90 },
      { name: "JavaScript", level: 92 },
      { name: "TypeScript", level: 85 },
      { name: "React JS", level: 90 },
      { name: "Tailwind CSS", level: 88 },
    ],
  },
  {
    name: "Backend & Database",
    skills: [
      { name: "Node JS", level: 82 },
      { name: "MongoDB", level: 78 },
      { name: "Next JS", level: 80 },
    ],
  },
  {
    name: "Tools & Other",
    skills: [
      { name: "Git", level: 88 },
      { name: "Docker", level: 65 },
      { name: "Figma", level: 70 },
      { name: "Three JS", level: 60 },
    ],
  },
];

const SkillRow = ({ skill }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      requestAnimationFrame(() => setWidth(skill.level));
    });
    return () => cancelAnimationFrame(raf);
  }, [skill.level]);

  return (
    <div className="flex items-center gap-3 px-3 py-2">
      <div className="flex-1 min-w-0">
        <div className="flex justify-between text-xs text-black">
          <span className="font-medium">{skill.name}</span>
          <span className="text-gray-700">{skill.level}%</span>
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
  const toggle = (catName) => {
    setExpanded((prev) => ({ ...prev, [catName]: !prev[catName] }));
  };

  return (
    <div
      className="p-4 flex flex-col h-full overflow-auto font-win98 text-xs"
      style={{
        background: "#C0C0C0",
      }}
    >
      <div className="flex-1 space-y-2">
        {skillCategories.map((cat) => (
          <div key={cat.name} className="bg-gray-200 border border-gray-400 overflow-hidden">
            <button
              className="w-full flex items-center gap-2 px-3 py-1.5 text-xs font-bold text-left cursor-pointer"
              style={{
                background: "linear-gradient(90deg, #000080, #1084D0)",
                color: "#FFF",
                border: "none",
                fontFamily: "var(--font-win98)",
              }}
              onClick={() => toggle(cat.name)}
            >
              <span>{expanded[cat.name] ? "\u25BC" : "\u25B6"}</span>
              {cat.name}
              <span className="text-white/90 ml-auto text-xs">{cat.skills.length} skills</span>
            </button>
            {(expanded[cat.name] ?? true) && (
              <div className="divide-y divide-gray-400">
                {cat.skills.map((skill) => (
                  <SkillRow
                    key={skill.name}
                    skill={skill}
                  />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsPage;
