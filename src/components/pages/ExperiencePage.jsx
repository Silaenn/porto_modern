import React from "react";
import { experiences } from "../../constants";

const ExperiencePage = () => {
  return (
    <div
      className="p-4 flex flex-col h-full overflow-auto font-win98 text-xs leading-relaxed"
      style={{
        background: "#C0C0C0",
      }}
    >
      <div className="flex-1 space-y-3">
        {experiences.map((exp, i) => (
          <div key={i} className="bg-gray-200 border border-gray-400 p-3">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-black font-bold text-sm">{exp.title}</h3>
                <p className="text-blue-800 text-xs font-semibold">{exp.company_name}</p>
              </div>
              <span className="text-gray-700 text-xs truncate ml-2">
                {exp.date}
              </span>
            </div>
            <div className="border-t border-gray-400 pt-2">
              <ul className="space-y-1">
                {exp.points.map((point, i) => (
                  <li key={i} className="text-black text-xs flex gap-2">
                    <span className="text-blue-800 mt-1">&#8226;</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperiencePage;
