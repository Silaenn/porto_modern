import React from "react";
import { experiences } from "../../constants";
import { Briefcase } from "lucide-react";

const ExperiencePage = () => {
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
        <h2 className="text-black font-bold text-lg">Work Experience</h2>
      </div>

      <div className="space-y-4">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-gray-300 border border-gray-400 rounded-sm p-3"
          >
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-gray-400 rounded border border-gray-500 flex items-center justify-center flex-shrink-0">
                <Briefcase className="w-5 h-5 text-blue-800" />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-black font-bold text-sm">
                      {exp.title}
                    </h3>
                    <p className="text-blue-800 text-xs font-semibold">
                      {exp.company_name}
                    </p>
                  </div>
                  <span className="text-gray-600 text-xs bg-gray-200 px-2 py-0.5 rounded border border-gray-400">
                    {exp.date}
                  </span>
                </div>

                <ul className="mt-2 space-y-1">
                  {exp.points.map((point, i) => (
                    <li
                      key={i}
                      className="text-black text-xs flex gap-2"
                    >
                      <span className="text-blue-800">&#8226;</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 p-3 bg-yellow-100 border border-yellow-400 rounded-sm text-xs text-black">
        <strong>Tip:</strong> Double-click any desktop icon to open more info.
      </div>
    </div>
  );
};

export default ExperiencePage;
