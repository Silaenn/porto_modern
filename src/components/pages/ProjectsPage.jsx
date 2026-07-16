import React, { useState } from "react";
import { projects } from "../../constants";

const ProjectsPage = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div
      className="p-4 flex flex-col h-full overflow-auto"
      style={{
        fontFamily: "Tahoma, sans-serif",
        background: "#C0C0C0",
        fontSize: "12px",
      }}
    >
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-3">
        {projects.map((project, i) => (
          <div
            key={i}
            className="bg-gray-200 border border-gray-400 cursor-pointer"
            style={{
              borderColor: selected === i ? "#000080" : undefined,
              borderWidth: selected === i ? "2px" : "1px",
            }}
            onClick={() => setSelected(selected === i ? null : i)}
          >
            <div className="h-24 bg-gray-400 border-b border-gray-400 flex items-center justify-center overflow-hidden">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover"
                style={{ imageRendering: "pixelated" }}
              />
            </div>
            <div className="p-2">
              <h3 className="text-black font-bold text-xs mb-1">{project.name}</h3>
              <p className="text-gray-700 text-[10px] mb-2 line-clamp-2">{project.description}</p>
              <div className="flex flex-wrap gap-1">
                {project.tags.map((t) => (
                  <span key={t.name} className="text-[10px] bg-gray-300 border border-gray-400 px-1 py-0.5">
                    {t.name}
                  </span>
                ))}
              </div>
              {selected === i && (
                <a
                  href={project.source_code_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center mt-2 text-xs bg-blue-800 text-white px-2 py-1 hover:bg-blue-900"
                  style={{ fontFamily: "Tahoma, sans-serif" }}
                >
                  View Project
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
