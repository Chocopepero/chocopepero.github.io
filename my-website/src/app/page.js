'use client';
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import './globals.css';

export default function Home() {
  const router = useRouter();

  const handleAboutMeRedirect = () => {
    router.push('/aboutme');
  };

  const handleProjectRedirect = () => {
    router.push('/projects');  // Redirect to /projects
  };


  return (
    <div className="flex flex-col min-h-screen cursor">
      <div className="flex items-center justify-center flex-grow">
        <main className="flex flex-col gap-8 items-center justify-center sm:items-start text-center">
          <div className="author">
            <Image
              src="/images/WorryVeryDepressed.png"
              width={132}
              height={132}
              priority
              className="author"
            />
            <div className="author-name">
              <a
                href="/">
                Test Name
              </a>
              <a href="https://github.com/Chocopepero" target="_blank" className="author-links">
                <img
                  className="author-links"
                  src="/images/github-mark-white.png"
                  width={32}
                  height={32}
                >
                </img>
              </a>
            </div>

          </div>
          <h1 className="flex items-center justify-between p-4 bg-blue-500">HEY KIDS YOU WANA SEE A DEAD BODY?</h1>
          <div className="flex gap-4 items-center flex-col sm:flex-row">
            <a
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="dark:invert"
                src="https://nextjs.org/icons/vercel.svg"
                alt="Vercel logomark"
                width={20}
                height={20}
              />
              Deploy now
            </a>
            <a
              className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
              href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read our docs
            </a>
          </div>
        </main>
      </div>
      <footer className="footer">
        <a
          onClick={handleAboutMeRedirect}
          className="footer-link"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          About me
        </a>
        <a
          onClick={handleProjectRedirect}
          className="footer-link"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          My Projects
        </a>
        <a
          href="mailto:samkunkim@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Email me →
        </a>
      </footer>
    </div>
  )
}
