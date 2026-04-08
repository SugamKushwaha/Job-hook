import { Button } from '@mantine/core'
import { IconBookmark } from '@tabler/icons-react'
import React, { useState } from 'react'
import ExpInput from './ExpInput';
import { formatDate } from '../UserServices/Utilities';
import { useDispatch, useSelector } from 'react-redux';
import { changeProfile } from '../slices/ProfileSlice';
import { successNotification } from '../UserServices/NotificationService';

const ExperienceCard = (props) => {
  const dispatch = useDispatch();
  const [edit,setEdit]=useState(false);
  const profile = useSelector((state)=>state.profile);

  const handleDelete=()=>{
       let exp= [...profile.experience];
       exp.splice(props.index, 1);
       let updatedProfile={...profile, experience:exp};
       dispatch(changeProfile(updatedProfile));
       successNotification("Success","Experience Deleted Successfully");
  }

  return (
    !edit?<div className='flex flex-col gap-2'>
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
           {formatDate(props.startDate)} - {props.working?"Present":formatDate(props.endDate)}
         </div>
       </div>
       <div className='text-sm text-amber-50 text-justify'>
        {props.description}
       </div>
         {props.edit && <div className='flex gap-5'>
          <Button onClick={()=>setEdit(true)} color="yellow" variant="outline">Edit</Button>
         <Button color='red.8' onClick={handleDelete} variant='light'>Delete</Button>
         </div>}
    </div>:<ExpInput {...props}  setEdit={setEdit} />
  )
}

export default ExperienceCard
