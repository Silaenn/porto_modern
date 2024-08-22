import { Facebook, Github, Instagram, Linkedin, Mail } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <div className="pt-4 pb-8 px-5 text-white">
      <div className="flex justify-around">
        <div className="flex flex-col gap-5">
          <p className="text-[23px] font-semibold text-center">GitHub</p>
          <a href="https://github.com/Silaenn" target="_blank">
            <Github width={60} className="cursor-pointer" />
          </a>
        </div>

        <div className="flex flex-col gap-5 justify-center">
          <p className="text-center text-[23px] font-semibold">Social Media</p>
          <div className="flex justify-center ">
            <a
              href="https://www.instagram.com/deoosilaen?igsh=MXE0Yjdob2ozbm1hYw=="
              target="_blank"
            >
              <Instagram width={60} className="cursor-pointer" />
            </a>
            <a href="mailto:deokeldisilaen@gmail.com" target="_blank">
              <Mail width={60} className="cursor-pointer" />
            </a>
            <a
              href="https://www.linkedin.com/in/deo-silaen-a434492b2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
            >
              <Linkedin width={60} className="cursor-pointer" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
