import React from "react";

const ProjectCard = ({ project, handleModalInfo }) => {
  const handleClickDemo = (demoUrl) => {
    const newWindow = window.open(demoUrl, "_blank");
    newWindow.opener = null;
    newWindow.rel = "noopener noreferrer";
  };

  const handleClickCode = (codeUrl) => {
    const newWindow = window.open(codeUrl, "_blank");
    newWindow.opener = null;
    newWindow.rel = "noopener noreferrer";
  };

  return (
    <div className="bg-white/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-black/40 rounded-xl max-w-md mx-auto overflow-hidden transition-all duration-300 hover:-translate-y-1.5 backdrop-blur-md">
      <div className="overflow-hidden">
        <img
          onClick={() => handleModalInfo(project)}
          src={project.src}
          alt={project.title || "Project card"}
          className="w-full h-48 object-cover duration-300 hover:scale-105 cursor-pointer"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-1">{project.title}</h3>
        <p className="text-sm text-slate-500 dark:text-gray-400 line-clamp-2">{project.description}</p>
      </div>
      <div className="flex items-center justify-center border-t border-slate-100 dark:border-slate-800/80 px-2 py-1">
        <button
          onClick={() => handleClickDemo(project.demo)}
          className="w-1/2 px-4 py-2 m-2 text-sm font-semibold rounded-lg text-emerald-600 dark:text-primary-color hover:bg-emerald-500/10 dark:hover:bg-primary-color/10 transition-colors duration-200"
        >
          Demo
        </button>
        <button
          onClick={() => handleClickCode(project.code)}
          className="w-1/2 px-4 py-2 m-2 text-sm font-semibold rounded-lg text-slate-700 dark:text-gray-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200"
        >
          Code
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
