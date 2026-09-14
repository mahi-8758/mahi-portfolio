import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link as ScrollLink } from 'react-scroll';
import CertificateModal from './CertificateModal';

const CertificateSlider = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const certificates = [
        { image: '/images/certificates/awsmain.png', title: 'AWS Certification' },
        { image: '/images/certificates/aws2.png', title: 'AWS Cloud' },
        { image: '/images/certificates/aws3.png', title: 'AWS Architecture' },
        { image: '/images/certificates/azure-ai.png', title: 'Azure AI' },
        { image: '/images/certificates/microsoft-ai.png', title: 'Microsoft AI' },
        { image: '/images/certificates/datascie.png', title: 'Data Science' },
        { image: '/images/certificates/digitalpro.png', title: 'Digital Professional' },
        { image: '/images/certificates/mongodb.png', title: 'MongoDB' },
        { image: '/images/certificates/navigator.png', title: 'Anaconda Navigator' },
        { image: '/images/certificates/post.png', title: 'Postman Student Expert' },
        { image: '/images/certificates/py.png', title: 'Python Programming' },
        { image: '/images/certificates/ora1.png', title: 'Oracle Certification' },
        { image: '/images/certificates/ora2.png', title: 'Oracle Certification' },
        { image: '/images/certificates/ora3.png', title: 'Oracle Certification' },
        { image: '/images/certificates/ora4.png', title: 'Oracle Certification' },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <section name='Education' className='relative w-full py-16 text-slate-800 dark:text-white transition-colors duration-300 min-h-screen'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>

                <div className='mb-6'>
                    <h2 className='text-4xl font-bold inline border-b-4 border-emerald-500/60 dark:border-primary-color/40 text-slate-900 dark:text-white sm:text-5xl pb-1'>
                        Education & Certificates
                    </h2>
                    <p className='py-6 text-slate-600 dark:text-gray-300'>
                        Check out my certifications and credentials
                    </p>
                </div>

                <div className='mb-10'>
                    <Slider {...settings} className="w-[90%] lg:w-full mx-auto">
                        {certificates.map((cert, index) => (
                            <div 
                                key={index} 
                                onClick={() => setSelectedImage(cert.image)} 
                                className="p-3 cursor-pointer group focus:outline-none"
                            >
                                <div className="bg-white/80 dark:bg-slate-900/60 backdrop-blur-md border border-slate-200 dark:border-slate-800 p-3 rounded-2xl shadow-lg group-hover:scale-105 transition-all duration-300 overflow-hidden flex flex-col items-center">
                                    <img 
                                        src={cert.image} 
                                        alt={cert.title} 
                                        className="w-full h-48 object-contain rounded-lg" 
                                    />
                                    <p className="mt-3 text-xs font-semibold text-slate-700 dark:text-gray-300 text-center line-clamp-1">
                                        {cert.title}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>

            </div>

            <ScrollLink to="Contact" smooth duration={500} className='absolute bottom-2 -left-full md:left-1/2 md:-translate-x-1/2 cursor-pointer hover:text-emerald-500 dark:hover:text-primary-color'>
                <i className='bx bx-chevron-down text-6xl text-slate-400 dark:text-gray-400 animate-bounce hover:text-emerald-500 dark:hover:text-primary-color'></i>
            </ScrollLink>

            <CertificateModal selectedImage={selectedImage} setSelectedImage={setSelectedImage} />
        </section>
    );
};

export default CertificateSlider;
