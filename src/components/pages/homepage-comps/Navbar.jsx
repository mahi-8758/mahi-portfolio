import React, { useState, useEffect } from 'react'
import { FaBars, FaTimes } from "react-icons/fa"
import { Link } from "react-scroll"
import ThemeToggle from '../../ThemeToggle'

const Navbar = () => {
    
    const links = [
        {
            id: 1,
            link: "Home"
        },
        {
            id: 2,
            link: "About"
        },
        {
            id: 3,
            link: "Projects"
        },
        {
            id: 4,
            link: 'Technologies'
        },
        {
            id: 5,
            link: "Education"
        },
        {
            id: 6,
            link: "Contact"
        }
    ]

    const [isShowNav, setIsShowNav] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset
            if (scrollTop > 0) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <header className={`fixed top-0 flex justify-between h-20 items-center py-4 px-4 md:px-6 mx-auto lg:px-24 md:py-0 w-full z-30 transition-all duration-300 backdrop-blur-md ${
            isScrolled 
                ? 'bg-white/90 text-slate-900 shadow-md border-b border-slate-200 dark:bg-slate-950/90 dark:text-white dark:border-slate-800' 
                : 'bg-white/70 text-slate-900 dark:bg-slate-900/60 dark:text-white'
        }`}>
            <div className='flex flex-row gap-4 items-center'>
                <h1 className='text-[1.1rem] lg:text-[1.3rem] font-bold tracking-tight hover:text-emerald-500 dark:hover:text-primary-color hover:scale-105 duration-300 cursor-pointer'>
                    <i className='bx bx-code-curly mr-2 text-base text-emerald-500 dark:text-primary-color'></i>
                    Mahi Kumar
                </h1>
            </div>

            <div className='hidden lg:flex items-center gap-6'>
                <ul className='flex gap-2 items-center'>
                    {links.map(({ id, link }) => (
                        <li key={id} className='cursor-pointer rounded-lg hover:bg-emerald-500/10 dark:hover:bg-primary-color/20 px-3 py-2 duration-200 font-medium hover:text-emerald-600 dark:hover:text-primary-color text-[1rem] lg:text-[1.1rem]'>
                            <Link to={link} smooth duration={500}>{link}</Link>
                        </li>
                    ))}
                </ul>
                <ThemeToggle />
            </div>

            <div className='flex items-center gap-3 lg:hidden'>
                <ThemeToggle />
                <div onClick={() => setIsShowNav(!isShowNav)} className='cursor-pointer p-2 rounded-lg text-slate-800 dark:text-gray-100 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors'>
                    {isShowNav ? <FaTimes size={26} /> : <FaBars size={26} /> }
                </div>
            </div>

            {isShowNav && (
            <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-slate-900/95 text-white dark:bg-slate-950/98 backdrop-blur-xl z-40 animate-fadeIn'>
                <div onClick={() => setIsShowNav(false)} className='absolute top-6 right-6 cursor-pointer p-2 text-gray-200 hover:text-white'>
                    <FaTimes size={30} />
                </div>
                {links.map(({ id, link }) => (
                    <li  
                    key={id} 
                    className='px-4 cursor-pointer py-4 text-3xl font-semibold hover:text-emerald-400 dark:hover:text-primary-color transition-colors'>
                        <Link 
                        onClick={() => setIsShowNav(false)}
                        to={link} 
                        smooth 
                        duration={500}>{link}</Link>
                    </li>
                ))}
            </ul> )}
        </header>
    )
}

export default Navbar
