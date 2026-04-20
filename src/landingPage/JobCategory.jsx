import { Carousel } from '@mantine/carousel'
import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react'
import React from 'react'
import { jobCategories } from '../Data/Data'

const JobCategory = () => {
  return (
    <div className='mt-20 pb-5 ml-10'>
      <div className='text-4xl text-center font-semibold text-amber-50'>Browse<span className='text-amber-500'>Jobs</span> Category</div>

      <div className='text-lg mb-10 mx-auto text-amber-50 text-center font-sans'>Explore diverse job opportunities tailored to your skills. Start Your career journey today!
      </div>
      <Carousel slideSize="22%"slideGap="md" loop 
      className="focus-visible:[&_button]:outline-none [&_button]:bg-amber-400 [&_button]:border-none [&_button]:hover:opacity-75 [&_button]:opacity-0 hover:[&_button]:opacity-100"
       nextControlIcon={<IconArrowRight className='h-8 w-8' />}
      previousControlIcon={<IconArrowLeft className='h-8 w-8' />}
      >
      <div className='gap-9 flex'>
      {
  jobCategories.map((item, index) => {
    const Icon = item.icon;

    return (
      <div
        key={index}
        className='flex flex-col  items-center w-64 gap-2 rounded-xl border border-amber-400 p-5 hover:cursor-pointer hover:shadow-[0_0_5px_2px_black] my-5 transition duration-300 ease-in-out shadow-amber-400'
      >
        <div className='p-2 bg-amber-300 rounded-full'>
          <Icon className='h-8 w-8 text-black' />
        </div>

        <div className='text-amber-50 font-semibold text-xl'>
          {item.title}
        </div>

        <div className='text-sm text-center text-gray-400'>
          {item.description}
        </div>

        <div className='text-amber-300 text-lg'>
          {item.jobs}
        </div>
      </div>
    );
  })
}
      </div>
    </Carousel>
      
    </div>
  )
}

export default JobCategory
