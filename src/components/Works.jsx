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
          max: 5,
          scale: 1.09,
          speed: 400,
        }}
        className="bg-[#3b4d59] p-5 rounded-2xl md:w-[550px] md:p-10 sm:w-[550px] w-full"
      >
        <div
          className="relative w-full h-[230px] cursor-pointer"
          onClick={onOpen}
        >
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-contain rounded-2xl"
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

        <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
          <ModalOverlay
            backdropFilter="blur(10px) hue-rotate(90deg)"
            bg="blackAlpha.600"
          />
          <ModalContent
            maxW="800px"
            minH="550px"
            bg="gray.800"
            borderRadius="xl"
            boxShadow="2xl"
            p={0}
          >
            <ModalHeader
              bgGradient="linear(to-r, blue.400, purple.400)"
              bgClip="text"
              borderBottomWidth={1}
              borderColor="whiteAlpha.200"
            >
              {name}
            </ModalHeader>
            <ModalCloseButton color="gray.400" _hover={{ color: "white" }} />
            <ModalBody p={6}>
              <div className="flex flex-col gap-6">
                <div className="relative rounded-xl overflow-hidden shadow-lg bg-black/20">
                  {video ? (
                    <video
                      src={video}
                      className="w-full h-[300px] object-contain"
                      controls
                    />
                  ) : (
                    <img
                      src={image}
                      alt="project_image"
                      className="w-full h-[300px] object-contain rounded-lg"
                    />
                  )}
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-blue-400 mb-3">
                    Description
                  </h3>
                  <p className="text-gray-300 leading-relaxed">{description}</p>
                </div>

                <div className="flex flex-wrap gap-2 mt-4">
                  {tags.map((tag) => (
                    <span
                      key={`modal-${name}-${tag.name}`}
                      className="px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300"
                    >
                      #{tag.name}
                    </span>
                  ))}
                </div>
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
      <motion.div
        variants={textVariant()}
        className="text-center sm:text-start"
      >
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex sm:justify-start justify-center">
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

      <div className="mt-20 flex flex-wrap gap-8 sm:justify-center justify-center">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
