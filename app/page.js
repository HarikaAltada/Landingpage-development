"use client";

import Button from "./components/Button";
import ContactForm from "./components/Contact";
import Header from "./components/Header";
import Industries from "./components/Industries";
import ProjectDetail from "./components/ProjectDetail";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Contact from "./components/ContactForm";
import Development from "./components/Development";
import TeamSection from "./components/Teamsection";
import FaqFooter from "./components/Footer";
import { useState } from "react";
export default function Home() {
  const [selectedProject, setSelectedProject] = useState(0);
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <section className="bg-gray-100 pt-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold mb-4 text-[#ffba00]">
              {" "}
              User-Centric Excellence
              <span className="text-black font-semibold">
                {" "}
                : Our App Development services tackle your pain points.
              </span>
            </h1>
            <p className="mb-8 text-gray-700">
              Experience a Seamless Digital Journey with{" "}
              <span className="text-green-500">Desun</span> - Where Every Line
              of Code Resolves Your Challenges and{" "}
              <span className="text-[#ffba00]">
                Elevates Your App Experience
              </span>
              to Unparalleled Heights.
            </p>
            <ContactForm />
          </div>
          <div className="md:w-1/2 flex flex-end">
            <img
              src="./assets/Group 1 (1).png"
              alt="App screenshot"
              className="w-full ml-20"
            />
          </div>
        </div>
      </section>
      <Services />
      <Industries />
      <Projects
        selectedProject={selectedProject}
        setSelectedProject={setSelectedProject}
      />
      <ProjectDetail />
      <Contact />
      <Development />
      <TeamSection />
      <FaqFooter />
    </div>
  );
}
