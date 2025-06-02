"use client";

import SkillsSection from "../../components/SkillsSection";

export default function AboutMePage() {
  return (
    <div className="container">
      <div className="bio">

        <br></br>

        <h1>
          I’m Samuel Kim, a passionate and driven individual transitioning from
          a career as a Pharmacy Technician at San Antonio Regional Hospital to
          pursuing my love for technology as a Computer Science student at
          California State University, Fullerton.
          <br></br>
          <br></br>
          My experience in the healthcare industry has equipped me with a unique
          blend of skills. I’ve developed the ability to work within a team
          under high-pressure environments, ensuring precision and efficiency in
          every task. At the same time, I’ve honed my critical thinking and
          problem-solving abilities, empowering me to make independent decisions
          and adapt to new challenges.
          <br></br>
          <br></br>
          Now, I’m utilizing those skills in the world of computer science,
          where I’m eager to combine my analytical mindset with technical
          expertise. I’m particularly passionate about leveraging technology to
          create innovative solutions that improve lives, whether it’s through
          developing software, designing systems, or tackling complex problems.
        </h1>
        <div className="center-container">
        <a
          className="styled-button"
          href="/documents/Samuel_Kim_Resume.pdf"
          download
        >
           Download my resume!
        </a>
        </div>
        <SkillsSection />
      </div>
    </div>
  );
}
