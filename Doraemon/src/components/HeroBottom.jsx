import React from 'react';
import {FaArrowDown} from 'react-icons/fa';
import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io';

const HeroBottom = () => {
  return (
    <>
    {/* doraemon text background */}
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 z-0 w-full'>
        <h1 className='text-6xl sm:text-[140px] sd:text-[190px] font-bold 
        text-center uppercase text-gray-300/25'>Doraemon</h1>
      </div>

      {/* Bottom Section */}
      <div
        data-aos="fade-up"
        data-aos-delay="600"
        data-aos-offset="0"
        className='absolute bottom-0 left-0 w-full'>
        <div className='grid sm:grid-cols-3 container'>
            {/* first col */}
            <div className='hidden sm:block'>
              <div className="font-semibold">
                <p className='text-gray-500'>Neal</p>
                <p className='text-sm text-primary'>Canada</p>
              </div>
              <div>
                <p className='text-gray-500'>Jan 31, 2024</p>
              </div>
            </div>
            
            {/* second col */}

            <div className='flex justify-center items-center'>
              <span className='hidden sm:block'>
                <FaArrowDown />
              </span>
            </div>
            {/* third col */}

            <div className='flex justify-center sm:justify-end mb-4'>
              <div className='flex flex-row sm:flex-col gap-5'>
                <div className='bg-white rounded-full p-2
                shadow-md hover:scale-110 duration-200'>
                  <IoIosArrowBack className='text-primary' />
                </div>
                <div className='bg-primary rounded-full p-2 
                shadow-md hover:scale-110 duration-200'>
                  <IoIosArrowBack className='text-white' />
                </div>
              </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default HeroBottom
