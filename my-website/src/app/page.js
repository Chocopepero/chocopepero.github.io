"use client";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";

export default function Home() {
  return (
    <main>
      <div className="container">
        <div className="author">
          <Image
            src="/images/IMG_1380_Crop.jpg"
            width={132}
            height={132}
            priority
            className="author"
            alt="Samuel Kim Image" 
          />
          <div className="author-name">
            <Link href="/">Samuel Kim</Link>
            <div className="author-links-container">
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
          </div>
        </div>

        <div className="intro">
          <h1>Hey there!</h1>
          <br></br>
          <h1>
            My name is Samuel Kim. Thanks for visiting my website. I'm a
            Computer Science student at California State University, Fullerton.
            I used to work as a Pharmacy Technician at San Antonio Regional and
            now I'm back in school studying CompSci.
            <br></br>
            <br></br>
            Please feel free to explore my website and learn more about me and
            if you have any questions, don't hesitate to reach out! I'd be happy
            to connect on LinkedIn or click on the Contact Me tab to send me an
            email. The icons above will take you to my GitHub and LinkedIn
            profiles.
          </h1>
        </div>
      </div>
    </main>
  );
}
