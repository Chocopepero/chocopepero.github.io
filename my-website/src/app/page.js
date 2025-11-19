"use client";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";
import { useEffect, useState } from "react";

export default function Home() {
  // observe all real sections in the page
  const sectionIds = ["about", "experience", "projects"];
  const [activeId, setActiveId] = useState(sectionIds[0]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveId(sectionIds[i]);
          break;
        }
      }
    };

    handleScroll(); // set initial state
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // run once, avoid recreating observer on activeId changes
  return (
    <div className="mx-auto h-auto max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0">
      <a className="absolute left-0 top-0 block -translate-x-full rounded bg-gradient-to-br from-teal-400 via-blue-500 to-purple-600 px-4 py-3 text-sm font-bold uppercase tracking-widest text-white focus-visible:translate-x-0"></a>
      <div className="lg:flex lg:justify-between lg:gap-4">
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
          <div className="">
            <Link
              href="/"
              className="text-4xl font-bold sm:text-5xl"
            >
              Samuel Kim
            </Link>
            <h2 className="mt-3 text-xl font-medium tracking-tight text-teal-400 sm:text-xl">
              Software Engineer | Open Source Maintainer
            </h2>
            <p className="mt-4 max-w-xs leading-normal text-gray-400">
              Building reliable, scalable infrastructure for the web.
            </p>
            
            <div className="mt-8 flex items-center gap-4">
              <Link
                href="https://github.com/Chocopepero"
                target="_blank"
                className="author-links"
              >
                <img
                  className="author-links opacity-80 hover:opacity-100 transition-opacity"
                  src="/images/github-mark-white.png"
                  width={28}
                  height={28}
                  alt="GitHub"
                />
              </Link>
              <Link
                href="https://www.linkedin.com/in/samkunkim/"
                target="_blank"
                className="author-links"
              >
                <img
                  className="author-links opacity-80 hover:opacity-100 transition-opacity"
                  src="/images/In-White-34.png"
                  width={28}
                  height={28}
                  alt="LinkedIn"
                />
              </Link>
            </div>
            <nav className="nav hidden lg:block">
              <ul className="mt-16 w-max">
                <li>
                  <a
                    href="#about"
                    onClick={() => setActiveId("about")}
                    className={`group flex items-center py-3 text-lg transition-all
                    ${activeId === "about" ? "font-bold text-2xl text-teal-400" : "text-white hover:text-teal-200"}`}
                  >
                    <span className="text-lg">About</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#experience"
                    onClick={() => setActiveId("experience")}
                    className={`group flex items-center py-3 text-lg transition-all
                    ${activeId === "experience" ? "font-bold text-2xl text-teal-400" : "text-white hover:text-teal-200"}`}
                  >
                    <span className="text-lg">Experience</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    onClick={() => setActiveId("projects")}
                    className={`group flex items-center py-3 text-lg transition-all
                    ${activeId === "projects" ? "font-bold text-2xl text-teal-400" : "text-white hover:text-teal-200"}`}
                  >
                    <span className="text-lg">Projects</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        <main className="pt-24 lg:w-[52%] lg:py-24">
          <div className="bg-gray-900/90 p-6 rounded-lg shadow-lg backdrop-blur-sm text-gray-300">
            
            {/* --- ABOUT SECTION --- */}
            <section id="about" className="mb-12 scroll-mt-16 lg:scroll-mt-24">
              <div className="text-lg leading-relaxed space-y-4">
                <p className="text-white font-semibold text-xl">
                  Hi, I'm Samuel Kim.
                </p>
                <p>
                  I am a Software Engineer focused on building reliable, scalable infrastructure. 
                  Currently, I work as a <strong className="text-teal-400 font-medium">Consulting Software Engineer</strong> for CodeDay and 
                  previously served as the <strong className="text-teal-400 font-medium">Lead Full-Stack Engineer</strong> for a digital transformation 
                  project at Cerritos College.
                </p>
                <p>
                  My path to tech wasn't traditional. I spent years as a Pharmacy Technician in 
                  high-pressure hospital environments. That experience wired me to be meticulous. I 
                  approach code quality and system reliability with the same zero-error mindset 
                  required for patient safety.
                </p>
                <p>
                  I believe in end-to-end ownership. Whether I'm architecting an EMR platform, 
                  maintaining open-source dashboards, or mentoring students as a Supplemental 
                  Instruction Leader at CSUF, I focus on delivering solutions that solve real problems.
                </p>
                <p>
                  When I'm not shipping code, you can find me optimizing rotations in Final Fantasy XIV 
                  or reverse-engineering game assets for community projects.
                </p>
              </div>
              
              <div className="mt-8">
                <a
                  className="inline-flex items-center justify-center rounded-md bg-teal-500 px-6 py-3 text-sm font-bold text-white shadow transition-colors hover:bg-teal-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
                  href="/documents/Samuel_Kim_Resume.pdf"
                  download
                >
                  Download Resume
                </a>
              </div>
            </section>

            {/* --- EXPERIENCE SECTION --- */}
            <section id="experience" className="mb-16 scroll-mt-16 lg:scroll-mt-24">
              <h2 className="mb-8 text-2xl font-bold text-white">Experience</h2>
              
              <div className="mb-12 group">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-teal-400 transition-colors">
                    Consulting Software Engineer
                  </h3>
                  <span className="text-sm font-medium text-gray-500">Jan 2025 — Present</span>
                </div>
                <div className="text-md font-medium text-teal-500 mb-4">CodeDay & Open Energy Dashboard</div>
                <p className="text-sm leading-relaxed">
                  Active maintainer for a large-scale open-source project. I manage the health of the Open Energy Dashboard codebase, performing technical code reviews on 40+ pull requests and debugging environment setup scripts to reduce contributor errors by 30%.
                </p>
              </div>

              <div className="mb-12 group">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-teal-400 transition-colors">
                    Lead Full-Stack Engineer (Contract)
                  </h3>
                  <span className="text-sm font-medium text-gray-500">Oct 2024 — July 2025</span>
                </div>
                <div className="text-md font-medium text-teal-500 mb-4">Cerritos College Nursing Program</div>
                <p className="text-sm leading-relaxed">
                  Led the end-to-end lifecycle of a full-stack EMR platform (FreMR) to replace legacy Excel workflows. Architected a high-availability Django backend served via Docker containers, validating system stability for 1,000+ simulated users.
                </p>
              </div>

              <div className="mb-12 group">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-teal-400 transition-colors">
                    Supplemental Instruction Leader
                  </h3>
                  <span className="text-sm font-medium text-gray-500">Jan 2024 — Present</span>
                </div>
                <div className="text-md font-medium text-teal-500 mb-4">California State University, Fullerton</div>
                <p className="text-sm leading-relaxed">
                  Selected by faculty to lead interactive study sessions for core Computer Science courses (Data Structures, OOP in C++). Designed a "learn-by-doing" curriculum that resulted in a <span className="font-bold text-gray-200">10% average grade improvement</span> for attendees compared to non-attendees.
                </p>
              </div>
            </section>


            {/* --- PROJECTS SECTION --- */}
            <section id="projects" className="mb-16 scroll-mt-16 lg:scroll-mt-24">
              <h2 className="mb-8 text-2xl font-bold text-white">Projects</h2>
              
              {/* Project 1: MapleLooks */}
              <div className="mb-12 group">
                <h3 className="text-xl font-semibold mb-2">
                  <a
                    className="inline-flex items-center group-hover:text-teal-400 transition-colors"
                    href="https://www.maplelooks.pro/"
                    target="_blank"
                  >
                    <span>MapleLooks Simulator</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 ml-1 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"><path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path></svg>
                  </a>
                </h3>
                <p className="text-sm mb-4">
                  A highly optimized character simulator built by reverse-engineering proprietary game assets (.wz files), serving 440+ users with a custom React rendering engine and AWS CloudFront delivery.
                </p>
                <img
                  className="aspect-video object-cover rounded border-2 border-gray-800 transition group-hover:border-teal-500/50 mb-4"
                  src="/images/MapleLooks.png"
                  alt="MapleLooks Screenshot"
                />
                <ul className="flex flex-wrap gap-2">
                  {["NextJS", "C# (Reverse Engineering)", "AWS CloudFront", "MongoDB"].map(tag => (
                    <li key={tag} className="px-3 py-1 rounded-full bg-teal-400/10 text-xs font-medium text-teal-300 border border-teal-400/20">
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Project 2: FreMR */}
              <div className="mb-12 group">
                <h3 className="text-xl font-semibold mb-2">
                  <a
                    className="inline-flex items-center group-hover:text-teal-400 transition-colors"
                    href="https://www.freemrsoftware.com/"
                    target="_blank"
                  >
                    <span>FreMR - EMR Platform</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 ml-1 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"><path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path></svg>
                  </a>
                </h3>
                <p className="text-sm mb-4">
                  <span className="font-bold text-teal-400">Lead Full-Stack Engineer (Contract).</span> Architected a high-availability Django platform that replaced legacy Excel workflows for the Cerritos College Nursing Program, validated for 1,000+ simulated users.
                </p>
                <img
                  className="aspect-video object-cover rounded border-2 border-gray-800 transition group-hover:border-teal-500/50 mb-4"
                  src="/images/FreEMR Ref.png"
                  alt="FreMR Screenshot"
                />
                <ul className="flex flex-wrap gap-2">
                  {["Django", "Docker", "PostgreSQL", "CI/CD", "Agile"].map(tag => (
                    <li key={tag} className="px-3 py-1 rounded-full bg-teal-400/10 text-xs font-medium text-teal-300 border border-teal-400/20">
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Project 3: CoLabCode (NEW ADDITION) */}
              <div className="mb-12 group">
                <h3 className="text-xl font-semibold mb-2">
                  <a
                    className="inline-flex items-center group-hover:text-teal-400 transition-colors"
                    href="#"
                    target="_blank"
                  >
                    <span>CoLabCode - Real-time Editor</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 ml-1 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"><path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path></svg>
                  </a>
                </h3>
                <p className="text-sm mb-4">
                  A real-time collaborative code editor featuring live document synchronization, containerized microservices, and version-controlled database schema management.
                </p>
                {/* Note: Image source placeholder kept as requested */}
                <img
                  className="aspect-video object-cover rounded border-2 border-gray-800 transition group-hover:border-teal-500/50 mb-4"
                  src="/images/MapleLooks.png" 
                  alt="CoLabCode Screenshot"
                />
                <ul className="flex flex-wrap gap-2">
                   {["Node.js", "React", "Etherpad API", "Flyway", "PostgreSQL"].map(tag => (
                    <li key={tag} className="px-3 py-1 rounded-full bg-teal-400/10 text-xs font-medium text-teal-300 border border-teal-400/20">
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Project 4: Hotel Blissful (School Project) */}
              <div className="mb-12 group">
                <h3 className="text-xl font-semibold mb-2">
                  <a
                    className="inline-flex items-center group-hover:text-teal-400 transition-colors"
                    href="https://github.com/Chocopepero/CPSC362_Project"
                    target="_blank"
                  >
                    <span>Hotel Blissful Backend</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 ml-1 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"><path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path></svg>
                  </a>
                </h3>
                <p className="text-sm mb-4">
                  Engineered a RESTful API for a hotel management system using C++ and the CROW framework. Implemented robust data handling for bookings, customer data, and room availability.
                </p>
                <ul className="flex flex-wrap gap-2">
                   {["C++", "REST API", "Crow Framework"].map(tag => (
                    <li key={tag} className="px-3 py-1 rounded-full bg-teal-400/10 text-xs font-medium text-teal-300 border border-teal-400/20">
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>

            </section>

            {/* --- FOOTER --- */}
            <div className="border-t border-gray-700 pt-8">
              <h6 className="text-xs text-gray-500 leading-relaxed">
                This website is built using Next.js and Tailwind CSS.
                <br />
                The background video is from Final Fantasy XIV.
                <br /><br />
                To my family, friends, mentors, and my community: Thank you for your support.
              </h6>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}