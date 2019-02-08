import React from 'react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Card = node => (
    <div className="w-screen md:w-1/3 p-2">
      <Link to={node.frontmatter.path}>
        <div key={node.id} className="p-2 shadow hover:shadow-lg transition">
          <div className="h-32 bg-grey-light">
            <Img fixed={node.frontmatter.thumb.childImageSharp.fixed} />
          </div>
          <h3>{node.frontmatter.title}</h3>
          <p>{node.frontmatter.tags}</p>

          {/* <p>{node.excerpt}</p> */}
        </div>
      </Link>
    </div>
  );

  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date)
    .map(({ node }) => <Card {...node} />);

  return (
    <Layout>
      <SEO
        title="Home"
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
      />
      {/* <h2>Other Projects</h2> */}
      <div className="flex flex-wrap">{Posts}</div>
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM YYYY")
            path
            title
            tags
            thumb {
              childImageSharp {
                fixed(height: 128) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  }
`;
