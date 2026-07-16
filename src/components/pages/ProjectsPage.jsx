import React, { useState } from "react";
import { projects } from "../../constants";

const ProjectsPage = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div
      className="p-4 flex flex-col h-full overflow-auto font-win98 text-xs leading-relaxed"
      style={{
        background: "#C0C0C0",
      }}
    >
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-4">
        {projects.map((project, i) => (
          <div
            key={i}
            className="bg-gray-200 border border-gray-400 cursor-pointer flex flex-col"
            style={{
              borderColor: selected === i ? "#000080" : undefined,
              borderWidth: selected === i ? "2px" : "1px",
            }}
            onClick={() => setSelected(selected === i ? null : i)}
          >
            <div className="flex-1 bg-gray-400 border-b border-gray-400 flex items-center justify-center overflow-hidden min-h-24">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover"
                style={{ imageRendering: "pixelated" }}
              />
            </div>
            <div className="p-3">
              <h3 className="text-black font-bold text-xs mb-1">{project.name}</h3>
              <p className="text-gray-700 text-xs mb-2 leading-relaxed line-clamp-2">{project.description}</p>
              <div className="flex flex-wrap gap-1">
                {project.tags.map((t) => (
                  <span key={t.name} className="text-xs bg-gray-300 border border-gray-400 px-2 py-1">
                    {t.name}
                  </span>
                ))}
              </div>
              {selected === i && (
                <a
                  href={project.source_code_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center mt-2 text-xs bg-blue-800 text-white px-2 py-1 hover:bg-blue-900 font-win98"
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
