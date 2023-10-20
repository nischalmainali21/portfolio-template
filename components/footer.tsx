import React from "react";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500 mt-4 dark-text">
      <small className="mb-2 block text-xs">
        &copy; Nischal. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> Built with
        React & Next.js, TypeScript, Tailwind CSS, Framer Motion, Vercel
        hosting.
      </p>
    </footer>
  );
}
