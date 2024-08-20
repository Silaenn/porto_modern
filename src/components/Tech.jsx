import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";

const Tech = () => {
  return (
    <div className="flex flex-col">
      <p className={`${styles.sectionSubText} text-center`}>
        What is the ability so far
      </p>
      <h2 className={`${styles.sectionHeadText} text-center mb-10`}>
        My Skils.
      </h2>
      <div className="flex flex-wrap justify-center flex-row gap-10">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");
