import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import ThemeToggle from '../../ThemeToggle'

const NavbarProjects = () => {
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
        <header className={`fixed top-0 flex justify-between h-20 items-center py-4 px-6 mx-auto lg:px-24 md:py-0 w-full z-30 transition-all duration-300 backdrop-blur-md ${
            isScrolled 
                ? 'bg-white/90 text-slate-900 shadow-md border-b border-slate-200 dark:bg-slate-950/90 dark:text-white dark:border-slate-800' 
                : 'bg-white/70 text-slate-900 dark:bg-slate-900/60 dark:text-white'
        }`}>
            <div className='flex flex-row gap-4 items-center'>
                <NavLink to='/' className='text-[1.1rem] lg:text-[1.3rem] font-bold tracking-tight hover:text-emerald-500 dark:hover:text-primary-color hover:scale-105 duration-300 flex items-center'>
                    <i className='bx bx-home-heart mr-2 text-emerald-500 dark:text-primary-color'></i>
                    Home
                </NavLink>
            </div>
            <ThemeToggle />
        </header>
    )
}

export default NavbarProjects
