import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const ProjectName = styled.h3`
  color: #333;
  font-weight: normal;
`

const ProjectDate = styled.h6`
  color: #333;
`

const ProjectWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

const PostLink = ({ post }) => {
  return (
    <ProjectWrapper>
      <Link to={post.frontmatter.path} style={{ textDecoration: 'none' }}>
        <ProjectName>{post.frontmatter.title}</ProjectName>
      </Link>
      <ProjectDate>{post.frontmatter.date}</ProjectDate>
    </ProjectWrapper>
  )
}

export default PostLink
