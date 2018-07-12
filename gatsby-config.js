module.exports = {
  siteMetadata: {
    title: 'Dean Sallinen',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/markdown`,
        name: 'markdown-pages',
      },
    },
  ],
}
