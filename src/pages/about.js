import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const AboutPage = () => (
  <Layout>
    <SEO
      title="About"
      keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
    />

    <div className="flex flex-col md:flex-row">
      <div className="">
        <div
          className="bg-grey h-32 w-32 mt-12 mx-8 rounded-full float-right"
          style={{ shapeOutside: 'circle()' }}
        />

        {/* <p className="border-l-4 border-grey-darkest font-serif leading-loose pl-4 text-justify">
          The point is... to live one's life in the full complexity of what one
          is, which is something much darker, more contradictory, more of a
          maelstrom of impulses and passions, of cruelty, ecstacy, and madness,
          than is apparent to the civilized being who glides on the surface and
          fits smoothly into the world.
        </p>

        <p className="font-bold mt-4 text-right text-xs uppercase">
          – Thomas Nagel
        </p> */}

        <h1>Hi, I’m Dean. 👋</h1>
        <p>
          I’m from Vancouver, BC and I like to consider myself a{' '}
          <em>UX Developer</em>.
        </p>
        <ul>
          <li>
            I’m User-centered. I’m always asking, “How can I make this a better
            experience for you?”
          </li>
          <li>
            I love to code and I create my designs with both Figma and React.
          </li>
          <li>
            I’m a data-driven problem solver, life-long learner, design and
            systems-thinker.
          </li>
        </ul>
        <p>
          My work history spans multiple industries and job titles and I draw on
          this experience when designing for end users.
        </p>
        <p>
          I studied Psychology and Linguistics at SFU and User Experience/User
          Interface Design at Brainstation Vancouver.
        </p>
        <p>
          When I’m not working on my side projects I enjoy learning the guitar,
          discovering new gluten-free restaurants, hiking, camping and reading.
        </p>
        <h2 className="mt-24">Get in touch!</h2>
        <p>
          Whether it’s feedback on one of my projects or an idea you want to
          collaborate on, I would love to hear from you!
        </p>
        <p>Send me an email through the form below if you want to chat:</p>
        <form
          className="mt-8 max-w-md "
          data-netlify="true"
          name="contact"
          method="post"
        >
          <input type="hidden" name="form-name" value="contact" />

          <label
            className="block font-bold mb-2 text-xs uppercase"
            htmlFor="name"
          >
            Name
          </label>

          <input
            className="appearance-none block bg-grey-lighter mb-6 p-3 rounded-md text-grey-darker w-full"
            id="name"
            type="text"
            placeholder="Bill Gates"
            name="name"
          />

          <label
            className="block font-bold mb-2 text-xs uppercase"
            htmlFor="email"
          >
            Email
          </label>

          <input
            className="appearance-none block bg-grey-lighter mb-6 p-3 rounded-md text-grey-darker w-full"
            id="email"
            type="email"
            placeholder="bill@microsoft.com"
            name="email"
          />

          <label
            className="block font-bold mb-2 text-xs uppercase"
            htmlFor="message"
          >
            Message
          </label>

          <textarea
            className="appearance-none bg-grey-lighter mb-6 p-3 rounded-md text-grey-darker w-full"
            placeholder="Hi Dean! Let's talk..."
            rows="8"
          />

          <button
            type="submit"
            className="border-b-4 border-grey-darker hover:border-grey-dark bg-grey-dark hover:bg-grey font-bold px-6 py-3 rounded text-sm text-white"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  </Layout>
);

export default AboutPage;
