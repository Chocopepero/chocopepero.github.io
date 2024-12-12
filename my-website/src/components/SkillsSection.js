import React from 'react';
import '../styles/Skills.css';
import { FaGitAlt, FaReact, FaHtml5 } from "react-icons/fa";
import { SiCplusplus} from "react-icons/si";
import { AiOutlinePython } from "react-icons/ai";
import { IoLogoJavascript } from "react-icons/io5";
import { FaHandsHelping, FaUsers, FaRegLightbulb, FaTasks } from "react-icons/fa";

const technicalSkills = [
  { name: 'C++', description: 'Strong understanding of core concepts', icon:<SiCplusplus size={50} /> },
  { name: 'JavaScript', description: 'Expert in JavaScript and its frameworks', icon: <IoLogoJavascript size={50}/> },
  { name: 'React', description: 'Building dynamic web apps with React', icon: <FaReact size={50}/> },
  { name: 'HTML & CSS', description: 'Strong understanding of web markup and styling', icon: <FaHtml5 size={50}/> },
  { name: 'Python', description: 'Experienced with Python for backend and scripting', icon: <AiOutlinePython size={50}/>},
  { name: 'Git', description: 'Version control with Git and GitHub', icon: <FaGitAlt size={50} /> },

];

const nonTechnicalSkills = [
  { name: 'Teamwork', description: 'Collaborating effectively with teams', icon: <FaUsers size={50}/> },
  { name: 'Problem Solving', description: 'Creative solutions for challenging problems', icon: <FaRegLightbulb size={50}/> },
  { name: 'Leadership', description: 'Guiding teams to achieve goals', icon: <FaTasks size={50}/> },
  { name: 'Empathy', description: 'Understanding and supporting others', icon: <FaHandsHelping size={50}/> },
  { name: 'Bilingual', description: 'Able to speak both Spanish and English', icon: <FaHandsHelping size={50}/> },
];

function SkillsSection() {
  return (
    <section id="skills" className="skills">
      <h1 className="skills-title">Technical Skills</h1>
      <div className="skills-container">
        {technicalSkills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-icon">{skill.icon}</div>
            <h3>{skill.name}</h3>
            <p>{skill.description}</p>
          </div>
        ))}
      </div>
      <h1 className="skills-title">Non-Technical Skills</h1>
      <div className="skills-container non-technical-skills-container">
        {nonTechnicalSkills.map((skill, index) => (
          <div className="skill-card" key={index}>
           <div className="skill-icon">{skill.icon}</div>
           <h3>{skill.name}</h3>
           <p>{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SkillsSection;