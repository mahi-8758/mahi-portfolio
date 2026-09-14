import React from 'react'
import Swal from 'sweetalert2'
import { useTheme } from '../../../context/ThemeContext';

const Contact = () => {
    const { isDark } = useTheme();

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        formData.append("access_key", "63a6f06a-e73d-4d4f-87c6-0c329f008ce0");
        formData.append("subject", "New Contact Inquiry - Mahi Kumar Portfolio");
        formData.append("from_name", "Portfolio Website");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                Swal.fire({
                    icon: 'success',
                    iconColor: isDark ? '#0DFC4B' : '#10B981',
                    title: 'Thank you for contacting me. It will be a pleasure to work with you!',
                    showConfirmButton: true,
                    background: isDark ? '#0b0f17' : '#ffffff',
                    color: isDark ? '#fff' : '#0f172a',
                    confirmButtonColor: isDark ? '#117911' : '#059669',
                    backdrop: `rgba(0, 0, 0, 0.4)`
                });
                event.target.reset();
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Something went wrong!',
                    text: data.message || 'Error sending message. Please try again.',
                    background: isDark ? '#0b0f17' : '#ffffff',
                    color: isDark ? '#fff' : '#0f172a',
                });
            }
        } catch (error) {
            console.error("Submission error:", error);
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Network error. Please try again later.',
                background: isDark ? '#0b0f17' : '#ffffff',
                color: isDark ? '#fff' : '#0f172a',
            });
        }
    };

    return (
        <section name='Contact' className='relative w-full md:h-screen p-4 text-slate-800 dark:text-white h-unset transition-colors duration-300'>
            <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
                <div className='pb-8'>
                    <h2 className='text-4xl font-bold inline border-b-4 border-emerald-500/60 dark:border-primary-color/40 text-slate-900 dark:text-white sm:text-5xl'>Contact</h2>
                    <p className='py-6 text-slate-600 dark:text-gray-300'>Submit the form below to get in touch with me</p>
                </div>

                <div className='flex justify-center items-center'>
                    <form onSubmit={handleSubmit} className='flex flex-col w-full md:w-1/2 bg-white/70 dark:bg-slate-900/40 p-6 rounded-2xl border border-slate-200 dark:border-slate-800/80 shadow-xl backdrop-blur-md'>
                        <input
                            type="text"
                            name='name' placeholder='Enter your name'
                            className='p-3 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-primary-color transition-all' required />

                        <input
                            type="email"
                            name='email' placeholder='Enter your email'
                            className='my-4 p-3 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-primary-color transition-all' required />

                        <textarea name="message" rows="6" placeholder='Enter your message' className='p-3 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-primary-color transition-all' required></textarea>

                        <button type="submit" className='text-white dark:text-black font-semibold bg-emerald-600 hover:bg-emerald-500 dark:bg-gradient-to-t dark:from-green-400 dark:to-primary-color px-8 py-3 my-6 mx-auto flex items-center rounded-lg hover:scale-105 duration-300 shadow-md shadow-emerald-500/20'>Let's talk</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact