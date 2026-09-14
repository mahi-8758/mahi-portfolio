import React from 'react'

const Edition = () => {
    return (
        <section name="Edition" className='relative text-white p-4 py-10 grid gap-10 sm:grid-cols-2 max-w-[1000px] mx-auto'>
            {/* Left section */}
            <section className='grid gap-10'>
                <div>
                    <h3 className='text-sm text-gray-400'>Videos</h3>
                    <h2 className='text-3xl font-semibold mt-2'>Some Demo Videos that i have uploaded</h2>
                </div>

                <article className='bg-gray-d relative border-[1px] border-primary-color/30 rounded-lg overflow-hidden'>
                    <div>
                        <img src="https://img.youtube.com/vi/W42Mjil9OKo/hqdefault.jpg" alt="SecureVault" loading='lazy' className='w-full object-cover aspect-video' />
                    </div>
                    <section className='p-6'>
                        <h4>SecureVault</h4>
                        <p className='text-gray-400 text-md mt-2'>Secure cloud-based file management application Demo</p>
                        <a href="https://youtu.be/W42Mjil9OKo" target='_blank' rel='noreferrer' className='bg-gradient-to-t from-green-400 to-primary-color p-1 absolute bottom-0 right-0 text-lg'>
                            <i className='bx bx-link text-black'></i>
                        </a>
                    </section>
                </article>
            </section>

            {/* Right section */}
            <section className='grid gap-10 flex flex-col justify-between'>
                <article className='bg-gray-d relative border-[1px] border-primary-color/30 rounded-lg overflow-hidden mt-0 sm:mt-[68px]'>
                    <div>
                        <img src="https://img.youtube.com/vi/lCfbnnLQq3o/hqdefault.jpg" alt="PulseWatch" loading='lazy' className='w-full object-cover aspect-video' />
                    </div>
                    <section className='p-6'>
                        <h4>PulseWatch</h4>
                        <p className='text-gray-400 text-md mt-2'>Website & API Uptime Monitoring Platform Demo</p>
                        <a href="https://youtu.be/lCfbnnLQq3o" target='_blank' rel='noreferrer' className='bg-gradient-to-t from-green-400 to-primary-color p-1 absolute bottom-0 right-0 text-lg'>
                            <i className='bx bx-link text-black'></i>
                        </a>
                    </section>
                </article>

                <div className='grid place-items-center'>
                    <a href="https://www.youtube.com/@mahikumar1926" target='_blank' rel='noreferrer' className='text-black font-semibold text-[16px] w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-t from-green-400 to-primary-color cursor-pointer mx-auto md:mx-0 self-end max-w-max'>
                        <i className='bx bxl-youtube mr-2 text-2xl' ></i>
                        Youtube channel
                    </a>
                </div>
            </section>
        </section>
    )
}

export default Edition
