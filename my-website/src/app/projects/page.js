'use client';

const projects = [
  {
    title: "Hotel Blissful Backend",
    description: "Backend for a hotel management system written entirely in C++",
    link: "https://github.com/Chocopepero/CPSC362_Project"
  },
  {
    title: "Untitled FullyHacks Game",
    description: "A game created for FullyHacks 2024, a hackathon hosted by Cal State Fullerton, done in Godot",
    link: "https://github.com/Chocopepero/CPSC362_Project"
  },
  {
    title: "Food Waste Tracker",
    description: "A web app that tracks food waste in a household, built with HTML, CSS, and C++",
    link: "https://github.com/Chocopepero/CSPC121-Project"
  },
  // Add more projects here
];

export default function ProjectsPage() {
  return (
    <div className="container">
      <br />
      <div className="projects">
        <h1>Here are some project's I've worked on:
          <br />
          Click on the cards to view the project on GitHub!
        </h1>
      </div>
      <br />
      <br />
      <div className="proj-container">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="card"
          >
            <div className="card-content">
              <p className="card-title">{project.title}</p>
              <p className="card-para">{project.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
