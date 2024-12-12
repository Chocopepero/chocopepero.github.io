'use client';
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import './globals.css';

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex flex-col min-h-screen cursor">
      <div className="flex justify-center flex-grow mt-8">
        <main>
          <div className="author">
            <Image
              src="/images/WorryVeryDepressed.png"
              width={132}
              height={132}
              priority
              className="author"
            />
            <div className="author-name">
              <Link href="/">Samuel Kim</Link>
              <div className="author-links-container">
                <Link href="https://github.com/Chocopepero" target="_blank" className="author-links">
                  <img
                    className="author-links"
                    src="/images/github-mark-white.png"
                    width={32}
                    height={32}
                  />
                </Link>
                <Link href="https://www.linkedin.com/in/samkunkim/" target="_blank" className="author-links">
                  <img
                    className="author-links"
                    src="/images/In-White-34.png"
                    width={32}
                    height={32}
                  />
                </Link>
              </div>
            </div>
          </div>
          <h1>Hey there!</h1>
        </main>
      </div>
    </div>
  );
}
