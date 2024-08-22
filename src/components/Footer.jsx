import { Facebook, Github, Instagram, Linkedin, Mail, X } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <div className="pb-12 px-5 ">
      <div className="flex justify-around">
        <div className="flex flex-col gap-5">
          <p className="text-[23px] font-semibold text-center">GitHub</p>
          <Github width={60} cursor={"pointer"} />
        </div>

        <div className="flex flex-col gap-5 justify-center">
          <p className="text-center text-[23px] font-semibold">Social Media</p>
          <div className="flex justify-center ">
            <Instagram width={60} cursor={"pointer"} />
            <Mail width={60} cursor={"pointer"} />
            <Linkedin width={60} cursor={"pointer"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
