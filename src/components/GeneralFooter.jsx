import React from 'react'
import { FaAws, FaMedium } from 'react-icons/fa'

const GeneralFooter = () => {
    return (
        <footer className='relative mt-auto flex flex-col items-center text-slate-600 dark:text-gray-400 py-8 gap-3 md:flex-row md:justify-evenly border-t border-slate-200 dark:border-slate-800/80 backdrop-blur-md transition-colors duration-300'>
            
            <div className='flex gap-x-4 md:order-last items-center'>
                <a className='text-3xl hover:text-emerald-500 dark:hover:text-primary-color transition-colors duration-200' target='_blank' rel="noreferrer" href="https://github.com/mahi-8758" title="GitHub">
                    <i className='bx bxl-github' ></i>
                </a>

                <a className='text-3xl hover:text-emerald-500 dark:hover:text-primary-color transition-colors duration-200' target='_blank' rel="noreferrer" href="https://www.linkedin.com/in/mahikumar1926/" title="LinkedIn">
                    <i className='bx bxl-linkedin-square' ></i>
                </a>

                <a className='text-2xl hover:text-emerald-500 dark:hover:text-primary-color transition-colors duration-200' target='_blank' rel="noreferrer" href="https://builder.aws.com/community/@mahi1926?tab=badges" title="AWS Builder Profile">
                    <FaAws />
                </a>

                <a className='text-2xl hover:text-emerald-500 dark:hover:text-primary-color transition-colors duration-200' target='_blank' rel="noreferrer" href="https://medium.com/@mahi1926" title="Medium Profile">
                    <FaMedium />
                </a>
            </div>

            <p className='md:order-2 text-sm'>• Copyright ©{new Date().getFullYear()} | All rights reserved • </p>
            <p className='text-sm font-medium text-slate-700 dark:text-gray-300'>Mahi Kumar</p>
        </footer>
    )
}

export default GeneralFooter
