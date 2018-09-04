import React from 'react'

const Tag = props => (
  <div
    style={{
      border: '2px solid #ccc',
      borderRadius: '.5rem',
      padding: '0 .5rem',
      minWidth: '3rem',
      textAlign: 'center',
      fontSize: '.5rem',
      fontWeight: '',
      marginRight: '.5rem',
      fontFamily: 'sans-serif',
      textTransform: 'uppercase',
    }}
  >
    {props.children}
  </div>
)

export default Tag
