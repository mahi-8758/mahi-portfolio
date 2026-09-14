import React from 'react'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll';

const About = () => {
    return (
        <section name="About" 
        className='relative w-full md:h-screen text-slate-800 dark:text-white h-unset transition-colors duration-300'>

            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full text-lg'>

                    <div className='pb-8'>
                        <h2 className='text-4xl sm:text-5xl font-bold inline border-b-4 border-emerald-500/60 dark:border-primary-color/40 text-slate-900 dark:text-white'>About me</h2>
                    </div>

                    <p className="mb-4 py-6 text-slate-600 dark:text-gray-300 leading-relaxed">
                        Hey! I am a cloud and DevOps developer currently pursuing my B.Tech in Computer Science at JB Institute of Technology. Driven by a passion for scalable architecture, I specialize in building secure cloud backends and resilient web systems across AWS, Azure, and Google Cloud.
                    </p>

                    <p className="text-slate-600 dark:text-gray-300 leading-relaxed">
                        With a strong focus on automation and clean engineering, I enjoy translating complex infrastructure requirements into robust code—from provisioning infrastructure as code with Terraform to designing serverless REST APIs using AWS Lambda, API Gateway, and DynamoDB. Whether it is securing file workflows with Cognito and S3 presigned URLs or integrating modern APIs, I thrive on turning cloud technologies into reliable, production-ready solutions.
                    </p>

                    <Link to='/about-me' className='text-white dark:text-black font-semibold text-[16px] w-fit px-6 py-3 my-2 flex items-center rounded-lg bg-emerald-600 hover:bg-emerald-500 dark:bg-gradient-to-t dark:from-green-400 dark:to-primary-color cursor-pointer mx-auto md:mx-0 self-end mt-8 hover:scale-105 duration-300 shadow-md'>
                        See more
                        <span><MdOutlineKeyboardArrowRight size={25} className='ml-1' /></span>
                    </Link>
                
            </div>

            <ScrollLink to="Projects" smooth duration={500} className='absolute bottom-2 -left-full md:left-1/2 md:-translate-x-1/2 cursor-pointer hover:text-emerald-500 dark:hover:text-primary-color'>
                <i className='bx bx-chevron-down text-6xl text-slate-400 dark:text-gray-400 animate-bounce hover:text-emerald-500 dark:hover:text-primary-color'></i>
            </ScrollLink>
            
        </section>
        
    )
}

export default About
