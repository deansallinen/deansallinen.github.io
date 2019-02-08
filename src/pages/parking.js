import React from 'react'

import Hero from '../img/undraw_city_driver_jh2h.svg'
import Directions from '../img/undraw_directions_x53j.svg'
import Offroad from '../img/undraw_off_road_9oae.svg'

import Layout from '../components/layout'
import SEO from '../components/seo'

const CopyOne = () => (
  <div className='max-w-3xl mx-auto'>
    <div className='my-6 antialiased'>
      <SEO
        title="Parking"
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
      />
    
    <header className='flex items-center justify-between mx-10 mb-10'>
      <div>
        <a href="#" className='no-underline'>
          <h2 className='text-grey-darkest font-bold'>Parking</h2>
        </a>
      </div>
      
      <a href='#' className='text-grey-darkest no-underline'>
        <h6 className='uppercase sm:hidden'>Menu</h6>
      </a>
      
      <div className='hidden sm:flex items-center'>
        <ul className='flex list-reset'>
          <li className='m-4  border-b-2 border-orange font-semibold'>
            <a href="#" className='text-orange no-underline'>Home</a>
          </li>
          <li className='m-4 font-semibold border-b-2 border-transparent hover:border-grey-darker'>
            <a href="#" className='text-grey-darker no-underline '>About Us</a>
          </li>
          <li className='m-4 font-semibold border-b-2 border-transparent hover:border-grey-darker'>
            <a href="#" className='text-grey-darker no-underline '>Features</a>
          </li>
          <li className='m-4 font-semibold border-b-2 border-transparent hover:border-grey-darker'>
            <a href="#" className='text-grey-darker no-underline'>Fees</a>
          </li>
          <li className='m-4 font-semibold border-b-2 border-transparent hover:border-grey-darker'>
            <a href="#" className='text-grey-darker no-underline '>Contact Us</a>
          </li>
        </ul>
        <button className='bg-blue hover:bg-blue-light ml-10 py-4 px-8 text-white text-xs font-bold tracking-wide uppercase'>Sign Up</button>
      </div>
    </header>
    
    <section className='flex flex-col-reverse sm:flex-row sm:px-12 mx-10 justify-between'>
      <div className='sm:py-22'>
        <h4 className="uppercase text-orange underline my-6">Park Happy</h4>
        <h1 className='text-grey-darkest font-thin leading-tight'>
          <span className='font-bold'>Search And Compare </span><br />
          All Available Parking
        </h1>
        <p className='py-6 mb-4 text-lg text-grey-dark leading-normal'>Pre-purchase the perfect spot and have a <br className='hidden sm:inline'/> guaranteed space waiting for you...</p>
        <button className='bg-orange hover:bg-orange-light py-4 px-16 text-white text-xs font-bold tracking-wide uppercase'>Discover</button>
        <a href='#' className='ml-6 text-blue font-bold'>Sign Up For Free</a>
      </div>
      
      <div className='sm:py-24 sm:w-1/2'>
        <img src={Hero} />
      </div>
    </section>
    
    <section className='flex flex-col sm:flex-row justify-between'>
      <div className='py-32 px-4 m:pl-32 sm:pr-12 sm:w-1/2 '>
        <h5 className="uppercase text-orange-light underline my-4">Get to know us</h5>
        <h2 className='text-grey-darkest leading-tight font-bold'>Enjoy Exclusive Discounts</h2>
        <p className='py-4 mb-2 text-md text-grey-dark leading-normal'>
          Enjoy exclusive discounts at parking lots and garages
          at or near airports across the country, and book early
          to ensure you have a guaranteed reserved parking
          space for your next flight.
        </p>
        <a href='#' className='text-blue font-bold'>Learn More</a>
      </div>
      
      <div className='py-24 md:px-10 sm:w-1/2 bg-orange-lightest text-grey-dark'>
        <div className='m:pr-12'>
          <div className="flex items-center bg-white shadow-lg mx-6 my-8 p-4">
            <div className='text-center font-bold text-5xl text-orange w-1/3'>
              <span className=''>13</span>
            </div>
            <div className='pl-4 w-2/3'>
              <p className='text-grey-darker mb-2'><span className='font-bold text-grey-darkest'>Find</span> Favourites</p>
              <p className='text-sm leading-normal'>
                Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim.
              </p>
            </div>
          </div>
          <div className="flex items-center bg-white shadow-lg mx-6 my-8 p-4">
            <div className='text-center font-bold text-5xl text-red-lighter w-1/3'>
              <span className=''>24</span>
            </div>
            <div className='pl-4 w-2/3'>
              <p className='text-grey-darker mb-2'><span className='font-bold text-grey-darkest'>Find</span> Favourites</p>
              <p className='text-sm leading-normal'>
                Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim.
              </p>
            </div>
          </div>
          <div className="flex items-center bg-white shadow-lg mx-6 my-8 p-4">
            <div className='text-center font-bold text-5xl text-red-light w-1/3'>
              <span className=''>6</span>
            </div>
            <div className='pl-4 w-2/3'>
              <p className='text-grey-darker mb-2'><span className='font-bold text-grey-darkest'>Find</span> Favourites</p>
              <p className='text-sm leading-normal'>
                Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <img src={Offroad} className='-mt-32 mx-auto'/>
    
    </div>
    
    {/* Testimonials */}
    
    <section className=' bg-orange-lightest py-16 text-center'>
      <h6 className="uppercase text-orange-light underline my-4">Testimonials</h6>
      <h2 className='text-grey-darkest leading-tight font-bold'>What people say about us</h2>
      
      <div className='my-12'>
        <img src='https://randomuser.me/api/portraits/men/39.jpg' className='rounded-full border-4 border-solid border-purple'/>
      </div>
      
      <p className='italic text-grey-dark text-xl font-light leading-normal my-4'>
        "Redeem your purchase seamlessly at your selected <br className='hidden sm:inline'/>
        location! It's that easy. Save time and money with <br className='hidden sm:inline'/>
        hassle-free parking."
      </p>
      
      <p className='text-grey-darkest font-bold my-2'>Dora Curtis</p>
      <p className='text-grey-dark text-xs font-light'>536 Conn Spring</p>
    </section>
    
    <section className='flex flex-col items-center text-center py-16'>
      <div>
        <p className='text-grey-darkest my-2 font-bold text-4xl'>Ready to Get Started?</p>
        <p className='text-grey-dark text-sm'>Sign up below to start growing your business today</p>
        <form className='py-8'>
          <input className='p-4 text-grey shadow-lg' type='text' placeholder='Write your email' />
          <button className='bg-blue hover:bg-blue-light ml-4 py-4 px-8 text-white text-xs font-bold tracking-wide uppercase'>Send</button>
        </form>
      </div>
    </section>
    
    <footer className='bg-grey-lighter py-10'>
      <div className='flex flex-col sm:flex-row justify-around px-4 sm:px-24'>
        <div className='flex flex-col justify-around'>
          <h2 className='text-grey-darkest'>Parking</h2>
          <p className='text-xs text-grey-dark'>2019 © All Rights Reserved</p>
          <div className='flex items-left'>
            <div className='text-center bg-white rounded-full px-4 py-2 mr-2 w-4 shadow-md'>I</div>
            <div className='text-center bg-white rounded-full px-4 py-2 mr-2 w-4 shadow-md'>T</div>
            <div className='text-center bg-white rounded-full px-4 py-2 mr-2 w-4 shadow-md'>F</div>
          </div>
        </div>
      
        <div>
          <h5 className='uppercase text-grey-darkest font-bold my-4'>Company</h5>
          <ul className='text-grey-dark list-reset'>
            <li className='my-4 text-xs'><a href='#' className='text-grey-dark no-underline hover:underline'>About</a></li>
            <li className='my-4 text-xs'><a href='#' className='text-grey-dark no-underline hover:underline'>Careers</a></li>
            <li className='my-4 text-xs'><a href='#' className='text-grey-dark no-underline hover:underline'>Newsroom</a></li>
          </ul>
        </div>
        <div>
          <h5 className='uppercase text-grey-darkest font-bold my-4'>Other Information</h5>
          <ul className='text-grey-dark list-reset'>
            <li className='my-4 text-xs'><a href='#' className='text-grey-dark no-underline hover:underline'>Global Privacy</a></li>
            <li className='my-4 text-xs'><a href='#' className='text-grey-dark no-underline hover:underline'>Terms of Use</a></li>
            <li className='my-4 text-xs'><a href='#' className='text-grey-dark no-underline hover:underline'>Interchange</a></li>
            <li className='my-4 text-xs'><a href='#' className='text-grey-dark no-underline hover:underline'>Fees</a></li>
          </ul>
        </div>
        <div>
          <h5 className='uppercase text-grey-darkest font-bold my-4'>Support</h5>
          <ul className='text-grey-dark list-reset'>
            <li className='my-4 text-xs'><a href='#' className='text-grey-dark no-underline hover:underline'>Anti-Piracy</a></li>
            <li className='my-4 text-xs'><a href='#' className='text-grey-dark no-underline hover:underline'>Policy</a></li>
            <li className='my-4 text-xs'><a href='#' className='text-grey-dark no-underline hover:underline'>Binding</a></li>
            <li className='my-4 text-xs'><a href='#' className='text-grey-dark no-underline hover:underline'>Corporate</a></li>
          </ul>
        </div>
      </div>
      
    </footer>

  </div>
)

export default CopyOne
