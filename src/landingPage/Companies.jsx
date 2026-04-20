import React from 'react'
import Marquee from 'react-fast-marquee'
import { companies } from '../Data/Data'

const Companies = () => {
  return (
    <div className='mt-20'>
      <div className='text-4xl text-center font-semibold text-amber-50'>Trusted By <span className='text-amber-500'>1000+</span> Companies</div>
       <Marquee speed={60} pauseOnHover={true} className='mt-12'>

        {companies.map((company, index) => (
          <div
            key={index}
            className='mx-10   flex flex-col items-center gap-3'
          >
            <img 
              src={company.logo}
              alt={company.name}
              className='h-12 w-30 object-contain'
            />
            <div className='text-amber-50 text-sm'>
              {company.name}
            </div>
          </div>
        ))}

      </Marquee>
    </div>
  )
}

export default Companies
