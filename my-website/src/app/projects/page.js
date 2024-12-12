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
  // Add more projects here
];

export default function ProjectsPage() {
  return (
    <div className="container">
      <div className="projects">
        <img
          src="/images/lebum.png"
          className="responsive-image"
          alt="Project Image"
        />
        <br />
      </div>
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
