import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-grey-darker">
      <div className="flex justify-between max-w-xl mx-auto p-4 md:p-8 text-sm">
        <p className="text-white">Created by Dean Sallinen</p>
        <p>
          <a
            href="https://github.com/deansallinen"
            className="font-bold no-underline text-white"
          >
            GitHub
          </a>
        </p>
      </div>
    </footer>
  );
}
