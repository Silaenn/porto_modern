import React, { useState } from "react";
import { GraduationCap, User, Building2, Calendar } from "lucide-react";
import { services } from "../../constants";

const TABS = ["General", "Education", "Hardware Profile"];

const AboutPage = () => {
  const [activeTab, setActiveTab] = useState("General");

  return (
    <div
      className="p-3 overflow-auto"
      style={{
        fontFamily: "Tahoma, sans-serif",
        background: "#C0C0C0",
        height: "100%",
        fontSize: "12px",
      }}
    >
      <div className="bg-gray-300 border border-gray-400 rounded-sm p-2 mb-2 flex items-center gap-2">
        <span className="text-blue-800 font-bold text-xs">System Properties</span>
        <span className="text-gray-500 text-xs">v4.10.1998</span>
      </div>

      <div className="flex gap-0 mb-3">
        {TABS.map((tab) => (
          <button
            key={tab}
            className="px-3 py-1 text-xs cursor-pointer"
            style={{
              background: activeTab === tab ? "#C0C0C0" : "#D4D4D4",
              border: "1px solid #808080",
              borderBottom: activeTab === tab ? "1px solid #C0C0C0" : "1px solid #808080",
              borderTop: "1px solid #FFF",
              borderLeft: "1px solid #FFF",
              fontFamily: "Tahoma, sans-serif",
              color: "#000",
              fontWeight: activeTab === tab ? "bold" : "normal",
              marginBottom: activeTab === tab ? "-1px" : "0",
              zIndex: activeTab === tab ? 1 : 0,
              position: "relative",
            }}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="bg-gray-300 border border-gray-400 p-3 rounded-sm" style={{ minHeight: "300px" }}>
        {activeTab === "General" && (
          <div className="flex gap-6">
            <div className="flex flex-col items-center gap-2 w-[140px]">
              <div className="w-24 h-24 bg-gray-400 border-2 border-gray-500 flex items-center justify-center">
                <User className="w-16 h-16 text-blue-800" />
              </div>
              <div className="text-center">
                <div className="text-black font-bold text-sm">Alex Rivera</div>
                <div className="text-gray-600 text-xs">Full-Stack Developer</div>
              </div>
              <div className="bg-gray-200 border border-gray-400 px-2 py-0.5 text-xs text-black w-full text-center">
                <span className="font-bold">Status:</span> Online
              </div>
            </div>

            <div className="flex-1 space-y-2">
              <div className="bg-gray-200 border border-gray-400 p-2">
                <div className="text-black font-bold text-xs mb-2 flex items-center gap-1">
                  <User className="w-3 h-3" /> Registered User
                </div>
                <div className="grid grid-cols-[120px_1fr] gap-x-2 gap-y-1 text-xs text-black">
                  <span className="text-gray-600">Name:</span>
                  <span>Alex Rivera</span>
                  <span className="text-gray-600">Title:</span>
                  <span>Full-Stack Developer</span>
                  <span className="text-gray-600">Location:</span>
                  <span>San Francisco, CA</span>
                  <span className="text-gray-600">Email:</span>
                  <span>hello@alexrivera.dev</span>
                  <span className="text-gray-600">Experience:</span>
                  <span>4+ years</span>
                </div>
              </div>

              <div className="bg-gray-200 border border-gray-400 p-2">
                <div className="text-black font-bold text-xs mb-2 flex items-center gap-1">
                  <Building2 className="w-3 h-3" /> Computer Description
                </div>
                <p className="text-black text-xs">
                  Creative problem solver passionate about building modern web
                  applications with clean architecture and great UX.
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "Education" && (
          <div className="space-y-3">
            {services.map((s, i) => (
              <div key={i} className="bg-gray-200 border border-gray-400 p-3 flex items-start gap-3">
                <div className="w-8 h-8 bg-gray-400 border border-gray-500 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-4 h-4 text-blue-800" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <span className="text-black font-bold text-xs">{s.title}</span>
                    <span className="text-gray-600 text-xs flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> {s.history}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "Hardware Profile" && (
          <div className="space-y-2 text-xs text-black">
            <div className="bg-gray-200 border border-gray-400 p-2">
              <div className="font-bold mb-1">System Resources</div>
              <div className="space-y-1">
                <div className="flex justify-between">
                  <span>CPU:</span>
                  <span>React 18.x / Node.js 20.x</span>
                </div>
                <div className="flex justify-between">
                  <span>Memory:</span>
                  <span>TypeScript / JavaScript ES6+</span>
                </div>
                <div className="flex justify-between">
                  <span>Graphics:</span>
                  <span>Tailwind CSS / CSS3</span>
                </div>
                <div className="flex justify-between">
                  <span>Storage:</span>
                  <span>MongoDB / PostgreSQL</span>
                </div>
              </div>
            </div>
            <div className="bg-yellow-100 border border-yellow-400 p-2 text-xs text-black">
              <span className="font-bold">Tip:</span> Click the tabs above to explore more info about this user.
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AboutPage;
