import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { handleClick } from "../constants";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#F5DEB3]" />
          <div className="w-1 sm:h-80 h-40 bg-[#F5DEB3]" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-[#E0E0E0]`}>
            Hi, I'm <span className="text-[#F5DEB3]">Deo</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-[#E0E0E0]`}>
            I am a student at the EEPIS (Electronic Engineering Polytechnic
            Institute of Surabaya) I really want to be a software developer
            {" :)"}
            <br className="sm:block hidden" />
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about" onClick={handleClick}>
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-[#F5DEB3] flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-[#F5DEB3] mb-1 "
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
