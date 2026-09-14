import React from 'react'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
import { Link } from "react-scroll"
import MobileSocialLinks from './MobileSocialLinks';

const Home = () => {
    return (
      <section name="Home" className='relative w-full md:h-screen h-unset transition-colors duration-300'>

        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 py-16 md:py-0 md:flex-row md:gap-8'>

          <div className='flex flex-col justify-center items-center h-[85%] md:h-full order-2 md:order-1 md:items-start'>
            
            <h1 className='text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white mb-2 mt-3 md:mt-0 md:mb-4 tracking-tight'>
              I'm <span className="text-emerald-600 dark:text-primary-color">Mahi Kumar</span>
            </h1>
            <h2 className='rounded-lg bg-emerald-500/10 text-emerald-700 dark:bg-primary-color/20 dark:text-emerald-300 max-w-max px-6 py-1 inline text-xl md:text-3xl lg:text-4xl font-semibold border border-emerald-500/20 dark:border-primary-color/30'>
              Cloud Application Developer
            </h2>
            <p className='text-slate-600 dark:text-gray-300 py-4 max-w-md text-justify leading-relaxed'>
              Certified AWS Cloud Application Developer. Welcome to my portfolio! Explore my featured projects, core tech stack, and journey.
            </p>

            <div className='hidden desktop:flex'>
              <Link to='About' smooth duration={500} className='group text-white dark:text-black font-semibold w-fit px-6 py-3 my-2 flex items-center rounded-lg bg-emerald-600 hover:bg-emerald-500 dark:bg-gradient-to-t dark:from-green-400 dark:to-primary-color cursor-pointer shadow-lg shadow-emerald-500/20 transition-all duration-300 transform hover:scale-105'>
                About me
                <span className='group-hover:rotate-90 duration-300 ml-1'><MdOutlineKeyboardArrowRight size={25} /></span>
              </Link>
            </div>

            <MobileSocialLinks />
          </div>

          <div className='flex order-1 md:order-2 mt-8 md:mt-0'>
              <img src="/images/fullsizeimg.jpg" alt="My profile" className='mb-2 rounded-2xl mx-auto w-2/3 max-w-lg md:max-w-sm object-cover md:w-[70rem] shadow-2xl shadow-emerald-500/10 dark:shadow-primary-color/20 border-2 border-emerald-500/20 dark:border-primary-color/30' />
            </div>
        </div>
      </section>
    );
}

export default Home
