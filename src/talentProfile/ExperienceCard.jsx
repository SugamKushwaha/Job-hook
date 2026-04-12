import { IconBookmark } from '@tabler/icons-react'
import React from 'react'
import { formatDate } from '../UserServices/Utilities'

const ExperienceCard = (props) => {
  return (
    <div className='flex flex-col gap-2'>
       <div className='flex justify-between'>
         <div className='flex gap-2 items-center'>
           <div className='p-2 bg-zinc-800'>
            <img className='h-7'  alt="" /></div>
           <div className='flex flex-col gap-1'> 
             <div className='font-semibold'>{props.title}</div>
             <div className='text-sm text-amber-50'>{props.company} &bull; {props.location}</div>
           </div>
         </div>
         <div className='text-sm text-amber-50'>
           {formatDate(props.startDate)} - {formatDate(props.endDate)}
         </div>
       </div>
       <div className='text-sm text-amber-50 text-justify'>
        {props.description}
       </div>
    </div>
  )
}

export default ExperienceCard
