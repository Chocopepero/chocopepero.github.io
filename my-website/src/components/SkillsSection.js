import React from 'react';
import '../styles/Skills.css';
import { FaGitAlt, FaReact, FaHtml5 } from "react-icons/fa";
import { SiCplusplus} from "react-icons/si";
import { AiOutlinePython } from "react-icons/ai";
import { IoLogoJavascript } from "react-icons/io5";
import { FaHandsHelping, FaUsers, FaRegLightbulb, FaTasks } from "react-icons/fa";

const technicalSkills = [
  { name: 'C++', description: 'Placeholder', icon:<SiCplusplus size={50} /> },
  { name: 'JavaScript', description: 'Placeholder', icon: <IoLogoJavascript size={50}/> },
  { name: 'React', description: 'Placeholder', icon: <FaReact size={50}/> },
  { name: 'HTML & CSS', description: 'Placeholder', icon: <FaHtml5 size={50}/> },
  { name: 'Python', description: 'Placeholder', icon: <AiOutlinePython size={50}/>},
  { name: 'Git', description: 'Placeholder', icon: <FaGitAlt size={50} /> },

];

const nonTechnicalSkills = [
  { name: 'Teamwork', description: 'Placeholder', icon: <FaUsers size={50}/> },
  { name: 'Problem Solving', description: 'Placeholder', icon: <FaRegLightbulb size={50}/> },
  { name: 'Leadership', description: 'Placeholder', icon: <FaTasks size={50}/> },
  { name: 'Empathy', description: 'Placeholder', icon: <FaHandsHelping size={50}/> },
  { name: 'Bilingual', description: 'Placeholder', icon: <FaHandsHelping size={50}/> },
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