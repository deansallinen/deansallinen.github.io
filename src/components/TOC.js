import React from 'react'
import Link from 'gatsby-link'

export default props => {
  return (
    <div
      style={{
        position: 'sticky',
        top: '1rem',
        padding: '1rem 0 0 1rem',
        marginLeft: '2rem',
        borderLeft: '4px solid #eee',
        width: '20rem',
        fontSize: '.75rem',
      }}
    >
      <h4>Table of Contents</h4>
      {props.headings.map(heading => (
        <Link
          to={`#${heading.value
            .toLowerCase()
            .split(' ')
            .join('-')}`}
          style={{ textDecoration: 'none', color: '#333' }}
        >
          <div
            style={{
              paddingLeft: `${heading.depth - 2}rem`,
              fontFamily: 'sans-serif',
            }}
          >
            {heading.value}
          </div>
        </Link>
      ))}
    </div>
  )
}
