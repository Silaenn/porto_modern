import React, { useState } from "react";
import { projects } from "../../constants";
import { FolderIcon, ComputerIcon } from "../DesktopAppIcons";
import { ExternalLink } from "lucide-react";

const ProjectsPage = () => {
  const [selected, setSelected] = useState(null);
  const [viewMode, setViewMode] = useState("icons");

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
      <div className="bg-gray-300 border-b border-gray-400 px-2 py-1 flex items-center gap-2 text-xs">
        <div className="flex items-center gap-1 text-black font-bold">
          <ComputerIcon size={14} />
          <span>My Computer</span>
        </div>
        <span className="text-gray-500">—</span>
        <span className="text-gray-600">Projects</span>
        <div className="ml-auto flex gap-1">
          <button
            className="px-1.5 py-0.5 border border-gray-500 border-t-gray-200 border-l-gray-200 bg-gray-200 text-[10px] cursor-pointer"
            style={{background: viewMode === "icons" ? "#C0C0C0" : "#E0E0E0"}}
            onClick={() => setViewMode("icons")}
          >
            Icons
          </button>
          <button
            className="px-1.5 py-0.5 border border-gray-500 border-t-gray-200 border-l-gray-200 bg-gray-200 text-[10px] cursor-pointer"
            style={{background: viewMode === "list" ? "#C0C0C0" : "#E0E0E0"}}
            onClick={() => setViewMode("list")}
          >
            List
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-auto">
        {viewMode === "icons" ? (
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 p-4">
            {projects.map((project, i) => (
              <button
                key={i}
                className="flex flex-col items-center gap-1 p-2 cursor-pointer"
                style={{
                  background: selected === i ? "#000080" : "transparent",
                  border: selected === i ? "1px dotted #FFF" : "1px solid transparent",
                  fontFamily: "Tahoma, sans-serif",
                }}
                onClick={() => setSelected(selected === i ? null : i)}
                onDoubleClick={() => window.open(project.source_code_link, "_blank")}
              >
                <FolderIcon size={48} />
                <span
                  className="text-xs text-center truncate max-w-full"
                  style={{color: selected === i ? "#FFF" : "#000"}}
                >
                  {project.name}
                </span>
              </button>
            ))}
          </div>
        ) : (
          <div className="p-2">
            <table className="w-full text-xs text-black border-collapse">
              <thead>
                <tr className="bg-gray-300 border border-gray-400">
                  <th className="text-left px-2 py-1 font-bold border-r border-gray-400">Name</th>
                  <th className="text-left px-2 py-1 font-bold border-r border-gray-400">Tags</th>
                  <th className="text-left px-2 py-1 font-bold">Link</th>
                </tr>
              </thead>
              <tbody>
                {projects.map((project, i) => (
                  <tr key={i} className="border-b border-gray-400 hover:bg-blue-100">
                    <td className="px-2 py-1 border-r border-gray-400 truncate max-w-[120px]">
                      <div className="flex items-center gap-1">
                        <FolderIcon size={16} />
                        {project.name}
                      </div>
                    </td>
                    <td className="px-2 py-1 border-r border-gray-400">
                      <div className="flex gap-1">
                        {project.tags.slice(0, 2).map((t) => (
                          <span key={t.name} className="text-[10px] bg-gray-200 border border-gray-400 px-1">{t.name}</span>
                        ))}
                      </div>
                    </td>
                    <td className="px-2 py-1">
                      <a href={project.source_code_link} target="_blank" rel="noopener noreferrer" className="text-blue-800 underline flex items-center gap-1">
                        <ExternalLink className="w-3 h-3" /> Open
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {selected !== null && (
        <div
          className="border-t border-gray-400 p-3"
          style={{ background: "#D4D4D4" }}
        >
          <div className="flex gap-4">
            <div className="flex flex-col items-center">
              <FolderIcon size={64} />
              <a
                href={projects[selected].source_code_link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-300 border border-gray-500 border-t-gray-200 border-l-gray-200 px-2 py-1 text-xs mt-2 flex items-center gap-1 cursor-pointer"
              >
                <ExternalLink className="w-3 h-3" /> Open
              </a>
            </div>
            <div className="flex-1">
              <h3 className="text-black font-bold text-sm">{projects[selected].name}</h3>
              <p className="text-gray-700 text-xs mt-1">{projects[selected].description}</p>
              <div className="flex flex-wrap gap-1 mt-2">
                {projects[selected].tags.map((t) => (
                  <span key={t.name} className="bg-gray-200 border border-gray-400 px-1.5 py-0.5 text-[10px]">{t.name}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="bg-blue-800 text-white text-xs px-2 py-0.5 flex items-center gap-1">
        <span>{projects.length} object(s)</span>
      </div>
    </div>
  );
};

export default ProjectsPage;
