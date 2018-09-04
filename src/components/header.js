import React from 'react'
import Link from 'gatsby-link'

const ListLink = props => (
  <li
    style={{
      display: `inline-block`,
    }}
  >
    <Link to={props.to} style={{ textDecoration: 'none', color: '#333' }}>
      {props.children}
    </Link>
  </li>
)

const Header = ({ siteTitle }) => (
  <div
    style={{
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h3 style={{ margin: 0, display: 'inline' }}>
        <Link
          to="/"
          style={{
            color: '#333',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h3>
      <ul
        style={{ listStyle: 'none', float: 'right', fontFamily: 'sans-serif' }}
      >
        <ListLink to="/about">About</ListLink>
      </ul>
    </div>
  </div>
)

export default Header
