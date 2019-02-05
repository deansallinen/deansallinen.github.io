import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date)
    .map(edge => (
      <div key={edge.node.id} post={edge.node}>
        {edge.node.frontmatter.title}
      </div>
    ));

  return (
    <Layout>
      <SEO
        title="Home"
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
      />

      <div className="text-center">
        <p className="leading-loose">
          This is a barebones starter for Gatsby styled using{' '}
          <a
            href="https://tailwindcss.com/"
            className="font-bold no-underline text-grey-darkest"
          >
            Tailwind
          </a>
          , a utility-first CSS framework.
        </p>
        <div>{Posts}</div>
      </div>
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
          }
        }
      }
    }
  }
`;
