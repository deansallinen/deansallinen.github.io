import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import dogIllustration from '../images/dog-illustration.svg';

const AboutPage = () => (
  <Layout>
    <SEO
      title="About"
      keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
    />

    <div className="flex flex-col md:flex-row items-center">
      <div className="">
        <p className="border-l-4 border-grey-darkest font-serif leading-loose pl-4 text-justify">
          The point is... to live one's life in the full complexity of what one
          is, which is something much darker, more contradictory, more of a
          maelstrom of impulses and passions, of cruelty, ecstacy, and madness,
          than is apparent to the civilized being who glides on the surface and
          fits smoothly into the world.
        </p>

        <p className="font-bold mt-4 text-right text-xs uppercase">
          – Thomas Nagel
        </p>

        <p>Hi, I’m Dean. 👋</p>
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
          I studied Psychology and Linguistics at SFU and I use my research and
          interviewing skills throughout the design process.
        </p>
        <p>
          When I’m not working on my side projects I enjoy learning the guitar,
          discovering new gluten-free restaurants, hiking, camping and reading.
        </p>
        <h4>
          <a id="Education_14" />
          Education
        </h4>
        <ul>
          <li>Brainstation, User Experience and User Interface Design</li>
          <li>Simon Fraser University, B.A. Psychology</li>
          <li>Simon Fraser University, Certificate of Liberal Arts</li>
        </ul>
        <h2>
          <a id="Get_in_touch_20" />
          Get in touch!
        </h2>
        <p>
          Whether it’s feedback on one of my projects or an idea you want to
          collaborate on, I would love to hear from you!
        </p>
        <p>
          Send me an email if you are interested in what I do, and we can
          arrange a time to chat.
        </p>
        <form
          className="mx-auto md:w-1/2"
          data-netlify="true"
          name="contact"
          method="post"
        >
          <input type="hidden" name="form-name" value="contact" />
          <p className="leading-loose mb-8">
            Here is an example of a form built using Tailwind. Click{' '}
            <a
              href="https://tailwindcss.com/docs/examples/forms"
              className="font-bold no-underline text-grey-darkest"
            >
              here
            </a>{' '}
            to see more examples.
          </p>

          <label
            className="block font-bold mb-2 text-xs uppercase"
            htmlFor="first-name"
          >
            First Name
          </label>

          <input
            className="appearance-none block bg-grey-lighter mb-6 p-3 rounded-md text-grey-darker w-full"
            id="first-name"
            type="text"
            placeholder="Bill"
          />

          <label
            className="block font-bold mb-2 text-xs uppercase"
            htmlFor="last-name"
          >
            Last Name
          </label>

          <input
            className="appearance-none block bg-grey-lighter mb-6 p-3 rounded-md text-grey-darker w-full"
            id="last-name"
            type="text"
            placeholder="Murray"
          />

          <label
            className="block font-bold mb-2 text-xs uppercase"
            htmlFor="message"
          >
            Message
          </label>

          <textarea
            className="appearance-none bg-grey-lighter mb-6 p-3 rounded-md text-grey-darker w-full"
            placeholder="Say something..."
            rows="8"
          />

          <button
            type="submit"
            className="border-b-4 border-grey-darker hover:border-grey-dark bg-grey-dark hover:bg-grey font-bold px-6 py-3 rounded text-sm text-white"
          >
            Submit
          </button>
        </form>

        <p>You can also find me on:</p>
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/dean-sallinen-39547a52/">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="http://twitter.com/deansallinen">Twitter</a>
          </li>
          <li>
            <a href="https://www.github.com/deansallinen">GitHub</a>
          </li>
        </ul>
      </div>
    </div>
  </Layout>
);

export default AboutPage;
