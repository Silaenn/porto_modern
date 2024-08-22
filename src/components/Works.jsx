import React from "react";
import { Tilt } from "react-tilt";

import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  video,
  source_code_link,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-[#134B70] p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div
          className="relative w-full h-[230px] cursor-pointer"
          onClick={onOpen}
        >
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-contain rounded-2xl\"
          />

          <div className="absolute -inset-2 flex justify-end mt-5 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <Modal isOpen={isOpen} onClose={onClose} size={"xl"}>
          <ModalOverlay />
          <ModalContent maxW={"800px"} h={"550px"}>
            <ModalHeader>Kalkulator</ModalHeader>
            <ModalCloseButton />
            <ModalBody className="">
              <div className="flex flex-col gap-5 ">
                <video
                  src={video}
                  className="h-[300px] w-auto"
                  controls
                ></video>
                <h3 className="text-white text-base font-bold text-[24px]">
                  Description
                </h3>
                <p className="my-auto text-white text-[14px] ">{description}</p>
              </div>
            </ModalBody>
          </ModalContent>
        </Modal>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-white text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] text-secondary`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-[#E0E0E0] text-[17px] max-w-3xl leading-[30px]"
        >
          The following project shows my skills through an example of a project
          of mine in the real world. Each project is explained briefly with a
          Github link to the code repository and has not yet been deployed due
          to not knowing how to deploy the backend {":)"} but I provide a demo.
          This reflects my ability to work with a variety of technologies, and
          manage projects effectively.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
