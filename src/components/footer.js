import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-grey-darker mt-8">
      <div className="flex flex-wrap flex-col sm:flex-row items-center sm:justify-between max-w-xl mx-auto p-4 md:p-8 text-sm">
        <p className="text-white">Created by Dean Sallinen</p>
        <ul className="list-reset flex mr-6">
          <li className="ml-4">
            <a
              className="font-bold no-underline text-white "
              href="https://www.linkedin.com/in/dean-sallinen-39547a52/"
            >
              LinkedIn
            </a>
          </li>
          <li className="ml-4">
            <a
              className="font-bold no-underline text-white "
              href="http://twitter.com/deansallinen"
            >
              Twitter
            </a>
          </li>
          <li className="ml-4">
            <a
              className="font-bold no-underline text-white "
              href="https://www.github.com/deansallinen"
            >
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
