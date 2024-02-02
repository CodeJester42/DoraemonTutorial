import React from 'react'
import HeroImg from '../assets/dora-hero.png';
import DoraImg from '../assets/dora.png';
import HeroBottom from './HeroBottom';


const Hero = () => {
  return (
<>
    <div className='min-h-[700px] center relative'>
      <div className="container mt-12 sm:mt-0 pb-20 sm:pb-0">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-0">
            {/* text content section */}
            <div className='space-y-3 md:space-y-7 flex 
            flex-col justify-center text-center sm:text-left px-10 sm:px-0'>
                <div data-aos="fade-up">
                    <h1 className='text-4xl md:text-6xl font-bold'>Watch Now in</h1>
                    <h1 className='text-6xl font-bold text-primary'>3D</h1>
                </div>
                <p className='text-gray-500 text-sm font-semibold'>
                    The first full story in the Doraemon series was published in January 1970
                </p>
                <div className='mx-auto sm:mx-0'>
                    <button className='primary-btn flex items-center justify-center gap-3'>
                        Play on
                        <span>
                            {/* <FaYoutube className="text-2y" /> */}
                        </span>
                    </button>
                </div>
            </div>
            {/* Image content section */}
            <div className='relative'>
                <img src={HeroImg} alt='' className='w-[180px] sm:w-[240px] lg:w-[340px] 
                mx-auto relative z-30' />
                <div className='absolute z-0 bottom-0 left-0 
                bg-black w-[240px] h-[20px] mx-auto blur-2xl'></div>
            </div>
            {/* Review content section */}
            <div className='sm:pl-16 md:pl-24 flex justify-center sm:justify-end'>
                <div className='flex items-center justify-end'>
                    <div className='space-y-4'>
                       <img src={DoraImg} alt='' className='w-full h-[100px] object-cover rounded-xl shadow-md 
                    hover:scale-110' duration-200 cursor-pointer />
                    <p>
                        4.7{" "}
                        <span>
                            {/* <FaStar className="text-primary" /> */}
                        </span>
                    </p>
                    <p>
                        Bandai Figuartszero Doraemont
                    </p> 
                    </div>
                </div>
            </div>
        </div>
      </div>

        {/* Hero Bottom Section*/}
        <HeroBottom />
    </div>
    </>
  )
}

export default Hero
