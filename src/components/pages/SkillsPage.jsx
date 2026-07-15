import React from "react";
import { technologies } from "../../constants";

const SkillsPage = () => {
  return (
    <div
      className="p-4 overflow-auto"
      style={{
        fontFamily: "Tahoma, sans-serif",
        background: "#C0C0C0",
        height: "100%",
      }}
    >
      <div className="flex items-center gap-2 mb-4">
        <div className="w-3 h-3 bg-blue-800" />
        <h2 className="text-black font-bold text-lg">Technical Skills</h2>
      </div>

      <p className="text-black text-xs mb-4">
        Technologies I work with on a daily basis:
      </p>

      <div className="grid grid-cols-4 sm:grid-cols-5 gap-3">
        {technologies.map((tech) => (
          <div
            key={tech.name}
            className="bg-gray-300 border border-gray-400 rounded-sm p-3 flex flex-col items-center gap-2 hover:bg-gray-200 transition-colors"
          >
            <img
              src={tech.icon}
              alt={tech.name}
              className="w-8 h-8 object-contain"
            />
            <span className="text-black text-xs font-medium text-center">
              {tech.name}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-4 p-3 bg-gray-300 border border-gray-400 rounded-sm">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-2 h-2 bg-green-800" />
          <span className="text-black font-bold text-xs">Skill Level</span>
        </div>
        <div className="space-y-2">
          {[
            { name: "Frontend", level: 90 },
            { name: "Backend", level: 80 },
            { name: "DevOps", level: 60 },
            { name: "Design", level: 70 },
          ].map((s) => (
            <div key={s.name}>
              <div className="flex justify-between text-xs text-black mb-0.5">
                <span>{s.name}</span>
                <span>{s.level}%</span>
              </div>
              <div className="h-3 bg-gray-400 border border-gray-500 rounded-sm overflow-hidden">
                <div
                  className="h-full bg-blue-800 rounded-sm"
                  style={{
                    width: `${s.level}%`,
                    background: "linear-gradient(90deg, #000080, #1084D0)",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
