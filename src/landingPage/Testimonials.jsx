import { Avatar, Rating } from '@mantine/core'
import React from 'react'
import { testimonial } from '../Data/Data'
import avatar from '../assets/avatar.png';

const Testimonials = () => {
  return (
    <div className='mt-20 pb-5'>
       <div className="text-4xl text-center font-bold landing-tight text-amber-50 [&>span]:text-amber-500">
          User <span>says about us</span>
        </div>
     <div className='flex justify-evenly'>
         {
  testimonial.map((data, index) => (
    <div 
      key={index}
      className='flex flex-col gap-3 w-[18%] border-amber-400 p-3 border rounded-xl mt-10'
    >
      <div className='flex gap-2 ml-2 items-center'>
        <Avatar className='!h-14 !w-14  ' src={avatar} alt={data.name} />
        <div>
          <div className='text-lg  text-amber-50 font-semibold'>
            {data.name}
          </div>
          <Rating ml={5} value={data.rating} fractions={2} readOnly />
        </div>
      </div>

      <div className='text-xs ml-2 font-light text-amber-50'>
        {data.testimonial}
      </div>
    </div>
  ))
}
      </div>
    
    </div>
  )
}

export default Testimonials
