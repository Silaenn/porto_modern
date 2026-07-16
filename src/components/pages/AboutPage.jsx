import React from "react";
import { services } from "../../constants";

const AboutPage = () => {
  return (
    <div
      className="p-4 flex flex-col h-full overflow-auto font-win98 text-xs leading-relaxed"
      style={{
        background: "#C0C0C0",
      }}
    >
      <div className="bg-gray-200 border border-gray-400 p-4 mb-3 flex items-start gap-4">
        <div
          className="w-20 h-20 bg-gray-400 border-2 border-gray-500 flex items-center justify-center flex-shrink-0"
          style={{ boxShadow: "inset 1px 1px 0 #FFF, inset -1px -1px 0 #808080" }}
        >
          <svg width="40" height="40" viewBox="0 0 32 32" style={{imageRendering: "pixelated"}}>
            <circle cx="16" cy="12" r="6" fill="#000080" />
            <ellipse cx="16" cy="26" rx="10" ry="6" fill="#000080" />
          </svg>
        </div>
        <div className="flex-1">
          <h2 className="text-black font-bold text-base">Alex Rivera</h2>
          <p className="text-blue-800 font-semibold text-xs mt-1">Full-Stack Developer</p>
          <p className="text-gray-700 text-xs mt-1">San Francisco, CA</p>
          <p className="text-gray-700 text-xs">hello@alexrivera.dev</p>
          <p className="text-black text-xs mt-2 leading-relaxed">
            Creative problem solver passionate about building modern web
            applications with clean architecture and great UX. 4+ years of
            experience across the full stack.
          </p>
        </div>
      </div>

      <div className="flex-1">
        <h3 className="text-black font-bold text-xs mb-2 border-b border-gray-400 pb-1">
          Education
        </h3>
        <div className="space-y-2">
          {services.map((s, i) => (
            <div key={i} className="bg-gray-200 border border-gray-400 p-3">
              <div className="flex justify-between items-center mb-1">
                <span className="text-black font-bold text-xs">{s.title}</span>
                <span className="text-gray-700 text-xs truncate ml-2">{s.history}</span>
              </div>
              <p className="text-gray-700 text-xs mb-1 leading-relaxed">{s.description}</p>
              <ul className="space-y-1">
                {s.achievements.map((a, j) => (
                  <li key={j} className="text-gray-700 text-xs flex gap-2">
                    <span className="text-blue-800 mt-1">&#8226;</span>
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-yellow-100 border border-yellow-400 p-3 mt-4 text-xs text-black">
        <span className="font-bold">Tip:</span> Check out my projects and skills using the other windows!
      </div>
    </div>
  );
};

export default AboutPage;
