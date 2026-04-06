import { Button } from '@mantine/core'
import { IconBookmark } from '@tabler/icons-react'
import React, { useState } from 'react'
import ExpInput from './ExpInput';
import { formatDate } from '../UserServices/Utilities';

const ExperienceCard = (props) => {
  const [edit,setEdit]=useState(false);

  return (
    !edit?<div className='flex flex-col gap-2'>
       <div className='flex justify-between'>
         <div className='flex gap-2 items-center'>
           <div className='p-2 bg-zinc-800'>
            <img className='h-7'  alt="" /></div>
           <div className='flex flex-col gap-1'> 
             <div className='font-semibold'>{props.role}</div>
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
         {props.edit && <div className='flex gap-5'>
          <Button onClick={()=>setEdit(true)} color='yellow' variant='outline'>Edit</Button>
         <Button color='red.8' variant='light'>Delete</Button>
         </div>}
    </div>:<ExpInput setEdit={setEdit} />
  )
}

export default ExperienceCard
