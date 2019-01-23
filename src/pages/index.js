import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
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
    </div>
  </Layout>
)

export default IndexPage
