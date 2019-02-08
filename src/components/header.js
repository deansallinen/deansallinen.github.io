import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const Header = ({ siteTitle }) => (
  <header className="">
    <div className="flex items-center justify-between max-w-xl mx-auto p-4 md:p-8">
      <Link to="/" className="flex items-center no-underline text-grey-darkest">
        <span className="font-bold text-xl ">{siteTitle}</span>
      </Link>

      <nav className="flex items-center text-sm">
        <Link
          to="/"
          className="inline-block mr-6 no-underline text-grey-darkest"
        >
          Home
        </Link>

        <Link
          to="/about"
          className="inline-block no-underline text-grey-darkest"
        >
          About
        </Link>
      </nav>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
