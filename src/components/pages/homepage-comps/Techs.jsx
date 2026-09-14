import React from "react";
import html from "../../../assets/html.png";
import css from "../../../assets/css.png";
import javascript from "../../../assets/javascript.png";
import typescript from "../../../assets/typescript.svg";
import react from "../../../assets/react.png";
import node from "../../../assets/node.png";
import tailwind from "../../../assets/tailwind.png";
import framermotion from "../../../assets/framermotion.svg";
import vite from "../../../assets/vite.svg";
import capacitor from "../../../assets/capacitor.svg";
import aws from "../../../assets/aws.svg";
import terraform from "../../../assets/terraform.svg";
import serverless from "../../../assets/serverless.svg";
import dynamodb from "../../../assets/dynamodb.svg";
import firebase from "../../../assets/firebase.svg";
import git from "../../../assets/git.png";
import github from "../../../assets/github.png";
import restapi from "../../../assets/restapi.svg";
import jwt from "../../../assets/jwt.svg";
import { Link as ScrollLink } from "react-scroll";

const Techs = () => {
  const techCategories = [
    {
      category: "Programming Languages",
      items: [
        { id: 1, src: javascript, title: "JavaScript", style: "shadow-yellow-400" },
        { id: 2, src: typescript, title: "TypeScript", style: "shadow-blue-600" },
        { id: 3, src: html, title: "HTML5", style: "shadow-orange-500" },
        { id: 4, src: css, title: "CSS3", style: "shadow-blue-500" },
      ],
    },
    {
      category: "Frontend & Mobile",
      items: [
        { id: 5, src: react, title: "React", style: "shadow-cyan-400" },
        { id: 6, src: node, title: "Node.js", style: "shadow-lime-500" },
        { id: 7, src: tailwind, title: "Tailwind CSS", style: "shadow-cyan-500" },
        { id: 8, src: framermotion, title: "Framer Motion", style: "shadow-fuchsia-500" },
        { id: 9, src: vite, title: "Vite", style: "shadow-purple-500" },
        { id: 10, src: capacitor, title: "Capacitor", style: "shadow-blue-400" },
      ],
    },
    {
      category: "Cloud & DevOps",
      items: [
        { id: 11, src: aws, title: "AWS", style: "shadow-amber-500" },
        { id: 12, src: terraform, title: "Terraform", style: "shadow-purple-600" },
        { id: 13, src: serverless, title: "Serverless", style: "shadow-red-500" },
      ],
    },
    {
      category: "Data & Tools",
      items: [
        { id: 14, src: dynamodb, title: "DynamoDB", style: "shadow-blue-500" },
        { id: 15, src: firebase, title: "Firebase", style: "shadow-amber-400" },
        { id: 16, src: git, title: "Git", style: "shadow-orange-600" },
        { id: 17, src: github, title: "GitHub", style: "shadow-slate-400 dark:shadow-white" },
        { id: 18, src: restapi, title: "REST API", style: "shadow-emerald-500" },
        { id: 19, src: jwt, title: "JWT Auth", style: "shadow-pink-500" },
      ],
    },
  ];

  return (
    <section
      name="Technologies"
      className="relative w-full py-16 transition-colors duration-300 min-h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-slate-800 dark:text-white">
        <div className="mb-6">
          <h2 className="text-4xl font-bold inline pb-1 border-b-4 border-emerald-500/60 dark:border-primary-color/40 text-slate-900 dark:text-white sm:text-5xl">
            Technologies
          </h2>
          <p className="py-6 text-slate-600 dark:text-gray-300">
            These are the technologies and tools I work with
          </p>
        </div>

        <div className="space-y-8">
          {techCategories.map((cat, idx) => (
            <div key={idx}>
              <h3 className="text-xl font-bold text-emerald-600 dark:text-primary-color mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-primary-color inline-block"></span>
                {cat.category}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 text-center">
                {cat.items.map(({ id, src, title, style }) => (
                  <div
                    key={id}
                    className={`flex flex-col justify-between items-center bg-white/80 dark:bg-slate-900/60 backdrop-blur-md border border-slate-200 dark:border-slate-800 shadow-md hover:scale-105 duration-300 p-4 rounded-xl ${style}`}
                  >
                    <img className="w-12 h-12 object-contain py-1" src={src} alt={title} />
                    <p className="mt-2 font-semibold text-slate-800 dark:text-gray-200 text-sm">
                      {title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <ScrollLink
        to="Education"
        smooth
        duration={500}
        className="absolute bottom-2 -left-full md:left-1/2 md:-translate-x-1/2 cursor-pointer hover:text-emerald-500 dark:hover:text-primary-color"
      >
        <i className="bx bx-chevron-down text-6xl text-slate-400 dark:text-gray-400 animate-bounce hover:text-emerald-500 dark:hover:text-primary-color"></i>
      </ScrollLink>
    </section>
  );
};

export default Techs;
