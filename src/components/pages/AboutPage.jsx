import React from "react";
import { Tilt } from "react-tilt";
import { services } from "../../constants";
import { GraduationCap } from "lucide-react";

const ServiceCard = ({ index, title, icon, history }) => (
  <Tilt className="w-[200px]">
    <div className="bg-gray-200 rounded p-4 flex flex-col items-center gap-2 min-h-[200px] justify-center border border-gray-400 shadow-inner">
      <img
        src={icon}
        alt={title}
        className="w-12 h-12 object-contain"
      />
      <h3 className="text-black text-sm font-bold text-center">{title}</h3>
      <p className="text-blue-800 text-xs font-semibold">{history}</p>
    </div>
  </Tilt>
);

const AboutPage = () => {
  return (
    <div
      className="p-4 overflow-auto"
      style={{
        fontFamily: "Tahoma, sans-serif",
        background: "#C0C0C0",
        height: "100%",
      }}
    >
      <div className="flex flex-wrap gap-6 items-start">
        <div className="flex-1 min-w-[250px]">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-3 h-3 bg-blue-800" />
            <h2 className="text-black font-bold text-lg">About Me</h2>
          </div>

          <p className="text-black text-sm leading-relaxed mb-4">
            I'm a Full-Stack Developer with experience in TypeScript, JavaScript,
            and modern frameworks like React, Node.js, and Next.js. I love
            building web applications that are both functional and delightful
            to use. Fast learner, team player, always curious.
          </p>

          <div className="bg-gray-300 border border-gray-400 p-3 rounded-sm">
            <div className="flex items-center gap-2 mb-2">
              <GraduationCap className="w-4 h-4 text-blue-800" />
              <span className="text-black font-bold text-sm">Education</span>
            </div>
            <div className="space-y-1 text-xs text-black">
              <div className="flex justify-between">
                <span>Metro State University</span>
                <span className="text-blue-800">2020-2024</span>
              </div>
              <div className="flex justify-between">
                <span>Springfield High School</span>
                <span className="text-blue-800">2016-2020</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-300 border border-gray-400 p-3 rounded-sm w-[150px] flex flex-col items-center">
          <div className="w-24 h-24 rounded-full bg-gray-400 flex items-center justify-center border-2 border-blue-800 mb-2">
            <GraduationCap className="w-12 h-12 text-blue-800" />
          </div>
          <span className="text-black font-bold text-sm text-center">Alex Rivera</span>
          <span className="text-gray-600 text-xs text-center">Full-Stack Dev</span>
        </div>
      </div>

      <div className="mt-6">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-3 h-3 bg-green-800" />
          <h3 className="text-black font-bold text-sm">Education History</h3>
        </div>
        <div className="flex flex-wrap gap-4 justify-center">
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
