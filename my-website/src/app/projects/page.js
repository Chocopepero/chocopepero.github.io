'use client';

import { useEffect } from 'react';

export default function ProjectsPage() {
  useEffect(() => {
    console.log("Welcome to the Projects page!");
  }, []);

  return <div>This is the Projects Page</div>;
}