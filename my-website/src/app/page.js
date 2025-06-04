"use client";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";
import { useEffect, useState } from "react";



export default function Home() {
  const sectionIds = ["about", "projects"];
  const [activeId, setActiveId] = useState(sectionIds[0]);

  useEffect(() => {
    const onIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(onIntersect, {
      rootMargin: "-40% 0px -50% 0px",
      threshold: 0
    });

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

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
            <h2>
              Computer Science Student | Aspiring Full Stack Dev
            </h2>
            <div className="mt-4 flex items-center gap-4">
              <Link
                href="https://github.com/Chocopepero"
                target="_blank"
                className="author-links"
              >
                <img
                  className="author-links"
                  src="/images/github-mark-white.png"
                  width={32}
                  height={32}
                />
              </Link>
              <Link
                href="https://www.linkedin.com/in/samkunkim/"
                target="_blank"
                className="author-links"
              >
                <img
                  className="author-links"
                  src="/images/In-White-34.png"
                  width={32}
                  height={32}
                />
              </Link>
            </div>
            <nav className="nav hidden lg:block">
              <ul className="mt-16 w-max">
                <li>
                  <a
                    href="#about"
                    className={`group flex items-center py-3 text-lg
                    ${activeId === "about" ? "font-bold text-2xl" : "text-white"}`}
                  >
                    <span className="text-lg">
                      About</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    className={`group flex items-center py-3 text-lg
                    ${activeId === "projects" ? "font-bold text-2xl" : "text-white"}`}>
                    <span className="text-lg">
                      Projects</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        <main className="pt-24 lg:w-[52%] lg:py-24">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg opacity-90 text-white">
            <section id="about" className="mb-12 scroll-mt-16 lg:scroll-mt-24">
              <h1>
                Hi! I'm Samuel Kim, a Computer Science student at California State University, Fullerton.
                Before diving back into tech, I worked as a Pharmacy Technician at San Antonio Regional,
                an experience that sharpened problem solving skills and my ability to understand people's needs.
                <br></br>
                <br></br>
                I'm passionate about programming and love tackling projects that stretch
                my skills and spark creativity. Drawing on both my healthcare background
                and my developer mindset, I excel at collaborating with people from
                diverse fields and building solutions that make a real difference.
                <br />
                <br />
                On campus, I'm a supplemental instructor for various Computer Science courses,
                where I help fellow students grasp complex concepts and improve their coding skills.
                I also enjoy working on personal projects that allow me to explore new technologies and
                push the boundaries of what's possible with code.
                <br></br>
                <br></br>
                When I'm not coding, you can find me playing video games such as Final Fantasy XIV.
                I'm always eager to learn new things and
                take on new challenges, whether it's through coding or gaming.
              </h1>
            </section>
            <div className="center-container">
              <a
                className="styled-button"
                href="/documents/Samuel_Kim_Resume.pdf"
                download
              >
                Download my resume!
              </a>
            </div>
            <section id="projects" className="mt-12 mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
              <h2 className="mb-4 text-2xl font-bold">Projects</h2>
              <div className="mb-12">
                <h3 className="text-xl font-semibold font-medium">
                  <a
                    className="inline-flex items-baseline font-medium"
                    href="https://www.freemrsoftware.com/"
                  >
                    <span>FreEMR - Electronic Medical Record Simulator</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true"><path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path></svg>
                  </a>
                </h3>
                <br />
                <p>
                  A free Electronic Medical Record simulation created and designed for use at Cerritos College's Nursing Program.
                  Designed to help nursing students practice charting and documentation skills in a realistic environment.
                </p>
                <img
                  className="aspect-video object-cover rounded border-2 border-gray-800 transition group-hover:border-gray-500 sm:order-1 sm:col-span-2 sm:translate-y-1"
                  src="/images/FreEMR Ref.png"
                >
                </img>
                <ul className="mt-4 flex flex-wrap gap-2">
                  <li>
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-200 text-sm font-medium text-gray-800">
                      NextJS
                    </span>
                  </li>
                  <li>
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-200 text-sm font-medium text-gray-800">
                      Django
                    </span>
                  </li>
                  <li>
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-200 text-sm font-medium text-gray-800">
                      PostgreSQL
                    </span>
                  </li>
                  <li>
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-200 text-sm font-medium text-gray-800">
                      Docker
                    </span>
                  </li>
                  <li>
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-200 text-sm font-medium text-gray-800">
                      Agile Methodology
                    </span>
                  </li>
                                    <li>
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-200 text-sm font-medium text-gray-800">
                      Vercel
                    </span>
                  </li>
                                    <li>
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-200 text-sm font-medium text-gray-800">
                      Render
                    </span>
                  </li>
                </ul>
              </div>

              <div className="mb-12">
                <h3 className="text-xl font-semibold font-medium">
                  <a
                    className="inline-flex items-baseline font-medium"
                    href="https://github.com/Chocopepero/CPSC362_Project"
                  >
                    <span>Hotel Blissful Back End</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true"><path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path></svg>
                  </a>
                </h3>
                <br />
                <p>
                  A back-end application for a hotel management system, built as part of a team project for a Software Engineering course.
                  This project involved creating a RESTful API to manage hotel bookings, customer data, and room availability written using
                  the CROW C++ REST framework.
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  <li>
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-200 text-sm font-medium text-gray-800">
                      C++
                    </span>
                  </li>
                  <li>
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-200 text-sm font-medium text-gray-800">
                      RESTful API
                    </span>
                  </li>
                  <li>
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-200 text-sm font-medium text-gray-800">
                      CROW Framework
                    </span>
                  </li>
                </ul>
              </div>

              <div className="mb-12">
                <h3 className="text-xl font-semibold font-medium">
                  <a
                    className="inline-flex items-baseline font-medium"
                    href="https://github.com/Chocopepero/DFOScouter"
                  >
                    <span>DFO Scouter</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true"><path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path></svg>
                  </a>
                </h3>
                <br />
                <p>
                  A personal project that provides a web-based interface for players of the game Dungeon Fighter Online (DFO) to view character stats and equipment.
                  It utilizes the Neople Open API to fetch real-time data about characters and their gear, allowing users to analyze and optimize their builds.
                  Unfortunately, due to a major update to the game, the project is currently not functional.
                </p>
                <img
                  className="aspect-video object-cover rounded border-2 border-gray-800 transition group-hover:border-gray-500 sm:order-1 sm:col-span-2 sm:translate-y-1"
                  src="/images/DFOScouter.png"
                ></img>
                <ul className="mt-4 flex flex-wrap gap-2">
                  <li>
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-200 text-sm font-medium text-gray-800">
                      NextJS
                    </span>
                  </li>
                  <li>
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-200 text-sm font-medium text-gray-800">
                      Neople Open API
                    </span>
                  </li>
                </ul>
              </div>
              <div className="mb-12">
                <h3 className="text-xl font-semibold font-medium">
                  <a
                    className="inline-flex items-baseline font-medium"
                  >
                    <span>Future Project: Quest Tracker</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true"><path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path></svg>
                  </a>
                </h3>
                <br />
                <p>
                  An installed application designed to help users keep track of their quests and missions in various games.
                  This project is currently in the planning stages, keeping in mind the need for a user-friendly interface and efficient data management.
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  <li>
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-200 text-sm font-medium text-gray-800">
                      .NET
                    </span>
                  </li>
                  <li>
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-200 text-sm font-medium text-gray-800">
                      C#
                    </span>
                  </li>
                </ul>
              </div>
              <div className="mb-12">
                <h3 className="text-xl font-semibold font-medium">
                  <a
                    className="inline-flex items-baseline font-medium"
                  >
                    <span>Future Project: Schedule D Calculator</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true"><path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path></svg>
                  </a>
                </h3>
                <br />
                <p>
                  A simple application designed to help users calculate their Schedule D tax obligations written in COBOL.
                  This project is currently in the planning stage, with a focus on creating a user-friendly interface and accurate calculations.
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  <li>
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-200 text-sm font-medium text-gray-800">
                      COBOL
                    </span>
                  </li>
                </ul>
              </div>
            </section>
            <div>
              <h6 className="text-sm text-gray-500">
                This website is built using NextJS and is hosted on GithubPages.
                <br />
                The background video is from Final Fantasy XIV.
                <br />
                <br />
                To my family, friends, mentors, and my community: Thank you for your support and encouragement.
                I hope to return even a fraction of the kindness you've shown me.
              </h6>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
