import React from 'react'

const HeroBottom = () => {
  return (
    <>
    {/* doraemon text background */}
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 z-0 w-full'>
        <h1 className='text-6xl sm:text-[140px] sd:text-[190px] font-bold 
        text-center uppercase text-gray-300/25'>Doraemon</h1>
      </div>

      {/* Bottom Section */}
      <div>
        <div>
            {/* first col */}
            <div className="font-semibold">
                <p className='text-gray-500'>Neal</p>
                <p className='text-sm text-primary'>Canada</p>
            </div>
            <div>
                <p className='text-gray-500'>Jan 31, 2024</p>
            </div>
            {/* second col */}
            {/* third col */}
        </div>
      </div>
    </>
  )
}

export default HeroBottom
