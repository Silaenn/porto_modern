import React, { useState } from "react";
import { experiences } from "../../constants";
import { Briefcase, Building2, Calendar, ChevronRight } from "lucide-react";

const ExperiencePage = () => {
  const [selected, setSelected] = useState(experiences[0]);

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
      <div className="bg-gray-300 border-b border-gray-400 px-2 py-1 flex items-center gap-1 text-xs text-black">
        <Building2 className="w-3 h-3" />
        <span>File Explorer</span>
        <span className="text-gray-500 mx-1">—</span>
        <span className="text-gray-600">Work History</span>
      </div>

      <div className="flex flex-1 overflow-hidden">
        <div
          className="w-[180px] flex-shrink-0 overflow-auto border-r border-gray-400"
          style={{ background: "#D4D4D4" }}
        >
          <div className="bg-blue-800 text-white text-xs font-bold px-2 py-1">Folders</div>
          <div className="p-1 space-y-0.5">
            <div className="flex items-center gap-1 px-1 py-0.5 text-xs text-black bg-blue-100 border border-blue-300">
              <ChevronRight className="w-3 h-3" />
              <Building2 className="w-3 h-3" />
              <span>All Jobs</span>
            </div>
            {experiences.map((exp, i) => (
              <button
                key={i}
                className="w-full flex items-center gap-1 px-1 py-0.5 text-xs text-left cursor-pointer"
                style={{
                  background: selected === exp ? "#000080" : "transparent",
                  color: selected === exp ? "#FFF" : "#000",
                  border: "none",
                  fontFamily: "Tahoma, sans-serif",
                }}
                onClick={() => setSelected(exp)}
              >
                <Briefcase className="w-3 h-3" />
                <span className="truncate">{exp.company_name}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="flex-1 overflow-auto p-3">
          {selected && (
            <div className="space-y-3">
              <div className="bg-gray-200 border border-gray-400 p-3">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-black font-bold text-sm">{selected.title}</h3>
                    <p className="text-blue-800 text-xs font-semibold">{selected.company_name}</p>
                  </div>
                  <span className="bg-gray-300 border border-gray-400 px-2 py-0.5 text-xs text-gray-700 flex items-center gap-1">
                    <Calendar className="w-3 h-3" /> {selected.date}
                  </span>
                </div>

                <div className="border-t border-gray-400 pt-2">
                  <div className="text-black font-bold text-xs mb-1">Job Responsibilities:</div>
                  <ul className="space-y-1">
                    {selected.points.map((point, i) => (
                      <li key={i} className="text-black text-xs flex gap-2">
                        <span className="text-blue-800 mt-0.5">&#8226;</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-gray-200 border border-gray-400 p-2 text-xs text-black">
                <span className="font-bold">References:</span> Available upon request
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="bg-blue-800 text-white text-xs px-2 py-0.5 flex items-center gap-1">
        <span>{experiences.length} item(s)</span>
      </div>
    </div>
  );
};

export default ExperiencePage;
