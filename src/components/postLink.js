import React, { Children } from 'react'
import Link from 'gatsby-link'
import Tag from './Tag'

const ProjectName = props => (
  <h3
    style={{
      color: '#333',
      fontWeight: 'normal',
      margin: '0',
      borderBottom: '2px solid #ddd',
    }}
  >
    {props.children}
  </h3>
)

const ProjectDate = props => (
  <h6 style={{ color: '#333', margin: '0' }}>{props.children}</h6>
)

const ProjectHeader = props => (
  <div
    style={{
      display: 'grid',
    }}
  >
    {props.children}
  </div>
)

const Project = props => (
  <div
    style={{
      margin: '1rem 0',
      padding: '1rem 0 ',
      borderRadius: '.5rem',
    }}
  >
    {props.children}
  </div>
)

const Excerpt = props => (
  <p style={{ margin: '1rem 0 0 0 ' }}>{props.children}</p>
)

const Tags = props => (
  <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: '1rem' }}>
    {props.children}
  </div>
)

const PostLink = ({ post }) => {
  return (
    <Project>
      <ProjectHeader>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Link to={post.frontmatter.path} style={{ textDecoration: 'none' }}>
            <ProjectName>{post.frontmatter.title}</ProjectName>
          </Link>
          <ProjectDate>{post.frontmatter.date}</ProjectDate>
        </div>
        <Tags>
          {post.frontmatter.tags.map(tag => <Tag key={tag}>{tag}</Tag>)}
        </Tags>
      </ProjectHeader>
      <Excerpt>
        {post.excerpt} <Link to={post.frontmatter.path}>More</Link>
      </Excerpt>
    </Project>
  )
}

export default PostLink
