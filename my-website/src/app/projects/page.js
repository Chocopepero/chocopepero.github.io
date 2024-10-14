'use client';

import { useEffect } from 'react';

export default function ProjectsPage() {
  useEffect(() => {
    console.log("Welcome to the Projects page!");
  }, []);

  return (
  <div className="flex flex-col items-center justify-center min-h-screen"> 
    <img 
    src= "/images/lebum.png"
    width = {500}
    height = {500}
    ></img>
    <h1 className='text-9xl'>NOTHING TO SEE HERE YET</h1>
  </div>
 
  );
}
