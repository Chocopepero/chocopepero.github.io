'use client';
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const handleAboutMeRedirect = () => {
    router.push('/aboutme');
  };
 
  const handleProjectRedirect = () => {
    router.push('/projects');  // Redirect to /projects
  }; 


  return (
    <div className="flex items-center justify-center min-h-screen">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <img

          src="/images/WorryVeryDepressed.png"
          width={360}
          height={100}
          priority
        />
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
      <footer className="fixed bottom-0 left-0 right-0 flex gap-6 flex-wrap items-center justified-center p-4 bg-gray-800 text-white">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          onClick={handleAboutMeRedirect}
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
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          onClick={handleProjectRedirect}
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
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="mailto:samkunkim@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
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
