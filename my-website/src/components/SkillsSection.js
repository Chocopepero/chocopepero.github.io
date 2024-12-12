import React from 'react';
import '../styles/Skills.css';
import { FaGitAlt, FaReact, FaHtml5 } from "react-icons/fa";
import { SiCplusplus, SiDjango} from "react-icons/si";
import { AiOutlinePython } from "react-icons/ai";
import { IoLogoJavascript } from "react-icons/io5";
import { FaHandsHelping, FaUsers, FaRegLightbulb, FaTasks, FaDatabase } from "react-icons/fa";
import { FaClock, FaCommentDots } from "react-icons/fa";
const technicalSkills = [
    { name: 'C++', description: 'Proficient in C++ for efficient software development', icon: <SiCplusplus size={50} /> },
    { name: 'JavaScript', description: 'Skilled in JavaScript and web development frameworks', icon: <IoLogoJavascript size={50}/> },
    { name: 'Python', description: 'Skilled in Python for backend development and scripting', icon: <AiOutlinePython size={50}/> },
    { name: 'React', description: 'Building dynamic and responsive web apps', icon: <FaReact size={50}/> },
    { name: 'HTML', description: 'Strong understanding of web structure and design', icon: <FaHtml5 size={50}/> },
    { name: 'Git', description: 'Version control with Git for collaboration', icon: <FaGitAlt size={50} /> },
    { name: 'PostgreSQL', description: 'Experienced in relational database management', icon: <FaDatabase size={50}/> },
    { name: 'Django', description: 'Building robust web backends with Django', icon: <SiDjango size={50}/> },
  ];
  

  const nonTechnicalSkills = [
    { name: 'Leadership', description: 'Guiding teams to success', icon: <FaTasks size={50}/> },
    { name: 'Teamwork', description: 'Effective collaboration in team settings', icon: <FaUsers size={50}/> },
    { name: 'Problem Solving', description: 'Creative solutions for complex problems', icon: <FaRegLightbulb size={50}/> },
    { name: 'Time Management', description: 'Efficient management of tasks and deadlines', icon: <FaClock size={50}/> },
    { name: 'Communication', description: 'Clear communication with teams and stakeholders', icon: <FaCommentDots size={50}/> },
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
      <br />
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