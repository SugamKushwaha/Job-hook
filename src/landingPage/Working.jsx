import React from 'react'
import logo from "../assets/gbg.png";
import logo1 from "../assets/error.png";
import { Avatar } from '@mantine/core';
import { IconFileText, IconRocket, IconTarget } from '@tabler/icons-react';


const Working = () => {
  return (
    <div className='mt-15 pb-5'>
       <div className='text-4xl text-center font-semibold text-amber-50'>How it <span className='text-amber-500'>Works</span> </div>

      <div className='text-lg mx-auto text-amber-50 text-center font-sans'>Effortlessly navigate through the proccess and land your dream job!</div>

      <div className='flex px-16 justify-between items-center'>
        <div className='relative'>
           <img className='w-[33rem]' src={logo} alt="" />
           <div className='w-36 top-[20%] right-19 absolute flex flex-col items-center gap-1 border border-amber-400 rounded-xl py-3 px-1 backdrop-blur-md'>
                <Avatar className='!h-17 !w-16' src="avatar.png" alt="it's me" />
                <div className='text-sm font-semibold text-amber-50 text-center'>Complete your profile</div>
                <div className='text-xs text-amber-50'>70%completed</div>
           </div>
        </div>
        <div className='flex flex-col gap-10 '>
             <div className='flex items-center gap-4'>
  <div className='p-3 bg-amber-400 rounded-full'>
    <IconFileText stroke={1.5} className="h-12 w-12 text-black" />
  </div>

  <div>
    <div className='text-amber-50 text-xl font-semibold'>
      Build a Strong Resume
    </div>
    <div className='text-amber-50 text-sm'>
      Create a professional resume that highlights your skills and increases your chances of getting hired.
    </div>
  </div>
</div>

<div className='flex items-center gap-4'>
  <div className='p-3 bg-amber-400 rounded-full'>
    <IconRocket stroke={1.5} className="h-12 w-12 text-black" />
  </div>

  <div>
    <div className='text-amber-50 text-xl font-semibold'>
      Apply to Jobs Easily
    </div>
    <div className='text-amber-50 text-sm'>
      Search and apply for thousands of jobs with just one click and track your applications in real time.
    </div>
  </div>
</div>

<div className='flex items-center gap-4'>
  <div className='p-3 bg-amber-400 rounded-full'>
    <IconTarget stroke={1.5} className="h-12 w-12 text-black" />
  </div>

  <div>
    <div className='text-amber-50 text-xl font-semibold'>
      Get Hired Faster
    </div>
    <div className='text-amber-50 text-sm'>
      Connect directly with recruiters and increase your chances of landing your dream job quickly.
    </div>
  </div>
</div>
        </div>
      </div>
    </div>
  )
}

export default Working
