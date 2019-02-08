import React from 'react'

const IndexPage = ({data}) => (
  <div>

  <header>
    <h1>Dean Sallinen</h1>
  </header>

  </div>
)

export default IndexPage


export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`