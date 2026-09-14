import React from 'react'
import { Link } from 'react-router-dom'
import projects from '../../../utils/constants'

const AllProjects = () => {

    const handleClickDemo = (demoUrl) => {
        const newWindow = window.open(demoUrl, '_blank');
        newWindow.opener = null;
        newWindow.rel = 'noopener noreferrer';
    }

    const handleClickCode = (codeUrl) => {
        const newWindow = window.open(codeUrl, '_blank');
        newWindow.opener = null;
        newWindow.rel = 'noopener noreferrer';
    }
    

    return (
        <section name="Projects" className='relative w-full text-white md:min-h-screen mt-24 mb-10'>
        
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <h2 className='text-4xl font-bold inline border-b-4 border-primary-color/40 sm:text-5xl'>Projects</h2>
                    <p className='py-6'>Check out my web applications and cloud projects here.</p>
                </div>

                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8'>
                    {
                        projects.map(({ id, title, src, demo, code }) => (
                                <div key={id} className='shadow-md shadow-gray-600 rounded-lg max-w-md mx-auto overflow-hidden bg-slate-900/60 border border-slate-800 flex flex-col justify-between'>
                                    <div>
                                        <img loading='lazy' src={src} alt={title || "project card"} className='rounded-t-md duration-200 hover:scale-105 w-full h-48 object-cover' />
                                        <div className='p-4'>
                                            <h3 className='text-xl font-bold text-white mb-1'>{title}</h3>
                                        </div>
                                    </div>
                                    <div className='flex items-center justify-center border-t border-slate-800'>
                                        <button onClick={() => handleClickDemo(demo)} className='w-1/2 px-6 py-2 m-2 duration-200 hover:scale-110 text-primary-color font-semibold'>Demo</button>
                                        <button onClick={() => handleClickCode(code)} className='w-1/2 px-6 py-2 m-2 duration-200 hover:scale-110 text-gray-300 font-semibold'>Code</button>
                                    </div>
                                </div>
                        ))
                    }
                </div>
            </div>

            <div className='flex justify-center'>
                <Link to='/' className='text-black font-semibold text-[16px] w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-t from-green-400 to-primary-color cursor-pointer mx-auto md:mx-0 self-end mt-8 hover:scale-110 duration-300'>
                    <span className=''><i className='bx bx-home-heart mr-2'></i></span>
                    Go back
                </Link>
            </div>
        </section>
    )
}

export default AllProjects
