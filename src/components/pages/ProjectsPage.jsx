import React from "react";
import { projects } from "../../constants";

const ProjectsPage = () => {
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
        <h2 className="text-black font-bold text-lg">My Projects</h2>
      </div>

      <p className="text-black text-xs mb-4">
        Double-click a project to view details. Click the GitHub icon to view source code.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-300 border border-gray-400 rounded-sm overflow-hidden"
          >
            <div className="relative">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-40 object-cover border-b border-gray-400"
              />
              <a
                href={project.source_code_link}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-2 right-2 bg-gray-200 border border-gray-500 rounded-sm px-2 py-1 text-xs hover:bg-gray-300"
              >
                GitHub
              </a>
            </div>

            <div className="p-3">
              <h3 className="text-black font-bold text-sm mb-1">
                {project.name}
              </h3>
              <p className="text-gray-700 text-xs mb-2 line-clamp-2">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1">
                {project.tags.map((tag) => (
                  <span
                    key={tag.name}
                    className="bg-gray-200 border border-gray-400 px-1.5 py-0.5 text-xs text-gray-700 rounded-sm"
                  >
                    {tag.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
