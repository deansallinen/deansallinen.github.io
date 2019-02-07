import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const handleClick = ev => {
  ev.preventDefault();
  const element = document.getElementById('nav');
  element.classList.toggle('block');
  element.classList.toggle('hidden');
};

const Header = ({ siteTitle }) => (
  <nav className="">
    <div className="flex flex-wrap items-center justify-between max-w-xl mx-auto p-4 md:p-8">
      <Link to="/" className="flex items-center no-underline text-grey-darkest">
        {/* <span className="font-bold text-xl ">{siteTitle}</span> */}
      </Link>

      <button
        className="block md:hidden border border-grey-darkest flex items-center px-3 py-2 rounded text-grey-darkest"
        onClick={handleClick}
      >
        <svg
          className="fill-current h-3 w-3"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>

      <div id="nav" className="hidden md:flex md:items-center w-full md:w-auto">
        <div className="text-sm">
          <Link
            to="/"
            className="block mt-4 md:inline-block md:mt-0 mr-6 no-underline text-grey-darkest"
          >
            Home
          </Link>

          <Link
            to="/about"
            className="block md:inline-block mt-4 md:mt-0 mr-6 no-underline text-grey-darkest"
          >
            About
          </Link>

          {/* <Link
            to="/contact"
            className="block md:inline-block mt-4 md:mt-0 no-underline text-grey-darkest"
          >
            Contact
          </Link> */}
        </div>
      </div>
    </div>
  </nav>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
