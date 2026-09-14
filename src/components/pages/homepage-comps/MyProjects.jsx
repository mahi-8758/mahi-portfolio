import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { ModalInfo } from "../../ModalInfo";
import ProjectCard from "../../ProjectCard";
import projects from "../../../utils/constants";

const MyProjects = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [SelectedProject, setSelectedProject] = useState({});

  const handleModalInfo = (project) => {
    setModalIsOpen(true);
    setSelectedProject(project);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <section
      name="Projects"
      className="relative w-full text-slate-800 dark:text-white md:h-screen h-unset transition-colors duration-300"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="mb-4">
          <h2 className="text-4xl font-bold inline border-b-4 border-emerald-500/60 dark:border-primary-color/40 text-slate-900 dark:text-white sm:text-5xl pb-1">
            Projects
          </h2>
          <p className="py-6 text-slate-600 dark:text-gray-300">Check out some of my work here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mb-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              setSelectedProject={setSelectedProject}
              handleModalInfo={handleModalInfo}
            />
          ))}
        </div>

        <div className="flex justify-end mr-4">
          <Link
            to="projects"
            className="hover:underline hover:underline-offset-4 text-emerald-600 dark:text-gray-300 hover:text-emerald-700 dark:hover:text-primary-color cursor-pointer flex items-center font-medium transition-colors"
          >
            See more projects
            <MdOutlineKeyboardArrowRight size={20} />
          </Link>
        </div>
      </div>

      <ScrollLink
        to="Technologies"
        smooth
        duration={500}
        className="absolute bottom-2 -left-full md:left-1/2 md:-translate-x-1/2 cursor-pointer hover:text-emerald-500 dark:hover:text-primary-color"
      >
        <i className="bx bx-chevron-down text-6xl text-slate-400 dark:text-gray-400 animate-bounce hover:text-emerald-500 dark:hover:text-primary-color"></i>
      </ScrollLink>

      {modalIsOpen && (
        <ModalInfo SelectedProject={SelectedProject} closeModal={closeModal} />
      )}
    </section>
  );
};

export default MyProjects;
