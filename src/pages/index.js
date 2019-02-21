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
  const Tags = ({ tags }) => tags.map(tag => <div className="mr-4">{tag}</div>);

  const Card = node => (
    <div
      key={node.id}
      className="container flex px-4 mx-auto mb-8 md:w-1/2 xl:w-1/3"
    >
      <div className="flex flex-col flex-grow justify-between px-6 py-6 shadow hover:shadow-lg bg-white transition rounded">
        <Link
          className="flex flex-grow no-underline "
          to={node.frontmatter.path}
        >
          <div className="flex flex-col flex-grow justify-between">
            <Img fluid={node.frontmatter.thumb.childImageSharp.fluid} />
            <div className="mt-4">
              <h3 className="mb-3 text-grey-darkest hover:underline">
                {node.frontmatter.title}
              </h3>
              <div className="text-grey text-sm flex flex-wrap">
                <Tags tags={node.frontmatter.tags} />
              </div>
            </div>

            {/* <p>{node.excerpt}</p> */}
          </div>
        </Link>
      </div>
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
      <div />
      {/* <h2>Other Projects</h2> */}
      <div className="flex flex-wrap -mx-4">{Posts}</div>
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
                fluid(maxWidth: 900) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;
