import React from "react";
import { Tilt } from "react-tilt";

import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon, history }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full white-blue-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-[#393E46] rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain rounded-[10px]"
        />

        <h3 className="text-white text-[17px] font-bold text-center">
          {title}
        </h3>

        <h5>{history}</h5>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        {/* <h2 className={styles.sectionHeadText}>Overview.</h2> */}
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-[#E0E0E0] text-[17px] max-w-3xl leading-[30px]"
      >
        I am a student with experience skills in TypeScript and JavaScript, and
        expertise in frameworks such as React, Node.js, Next.js , and Three.js.
        I am a fast learner and always have a goal, nice to meet you
      </motion.p>

      <h3 className={`${styles.heroSubText} mt-12 text-[#E0E0E0] text-center`}>
        Education History
      </h3>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
