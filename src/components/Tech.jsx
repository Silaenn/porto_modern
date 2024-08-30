import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import { useInView } from "react-intersection-observer";

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
          <LazyBallCanvas key={technology.name} icon={technology.icon} />
        ))}
      </div>
    </div>
  );
};

const LazyBallCanvas = ({ icon }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref} className="w-28 h-28">
      {inView ? (
        <BallCanvas icon={icon} />
      ) : (
        <div className="w-full h-full bg-gray-200 rounded-full" />
      )}
    </div>
  );
};

export default SectionWrapper(Tech, "");
