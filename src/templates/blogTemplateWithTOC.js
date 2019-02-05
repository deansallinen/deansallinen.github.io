import React from 'react'
require('prismjs/themes/prism-tomorrow.css')
import TOC from '../components/TOC'

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html, headings } = markdownRemark

  return (
    <div
      className="blog-post-container"
      style={{
        display: 'grid',
      }}
    >
      <div className="blog-post" style={{ maxWidth: '45rem' }}>
        <h1>{frontmatter.title}</h1>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
      <div style={{ gridColumn: '2' }}>
        <TOC headings={headings} />
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  query BlogPostByPathTOC($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      headings {
        value
        depth
      }
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        tags
        toc
      }
    }
  }
`
