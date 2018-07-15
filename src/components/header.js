import React from 'react'
import Link from 'gatsby-link'

const ListLink = props => (
  <li
    style={{
      display: `inline-block`,
      marginRight: `1rem`,
    }}
  >
    <Link to={props.to} style={{ textDecoration: 'none', color: '#eee' }}>
      {props.children}
    </Link>
  </li>
)

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: 'maroon',
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
            color: '#eee',
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
