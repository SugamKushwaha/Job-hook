import React from 'react'
import logo1 from "../FindIcons/micro.jpg";
import { IconBookmark, IconBookmarkFilled, IconClockHour3 } from '@tabler/icons-react';
import { Button, Divider, Text } from '@mantine/core';
import { Link } from 'react-router-dom';
import { timeAgo } from '../UserServices/Utilities';
import { useDispatch, useSelector } from 'react-redux';
import { changeProfile } from '../slices/ProfileSlice';


const JobCard = (props) => {
  const profile = useSelector((state)=>state.profile);
  const dispath = useDispatch();

  const handleSaveJob=()=>{
    let savedJobs=[...profile.savedJobs];
    if(savedJobs?.includes(props.id)){
      savedJobs=savedJobs?.filter((id)=>id!==props.id);
    }else{
      savedJobs=[...savedJobs, props.id];
    }
    let updatedProfile={...profile, savedJobs:savedJobs};
    dispath(changeProfile(updatedProfile));
  }

  return (
    <div  className='bg-zinc-800 p-4 w-87 flex flex-col gap-4 rounded-xl hover:shadow-[0_0_5px_1px_yellow] !shadow-amber-500'>
       <div className='flex justify-between'>
         <div className='flex gap-2 items-center'>
           <div className='p-2 bg-zinc-800'>
            <img  className='h-10 w-15 '  src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="" /></div>
           <div className='flex flex-col gap-1'> 
             <div className='font-semibold text-lg'>{props.jobTitle}</div>
             <div className='text-xs text-amber-50'>{props.company} &#x2022; {props.applicants?props.applicants.length:0} Applicants</div>
           </div>
         </div>
        { 
           profile.savedJobs?.includes(props.id)? <IconBookmarkFilled  onClick={handleSaveJob} className='cursor-pointer text-amber-400' />:<IconBookmark  onClick={handleSaveJob} className='text-zinc-400 cursor-pointer  hover:text-amber-400' />
        }
       </div>
       <div className='flex gap-2 [&>div]:py-1 [&>div]:px-2 [&>div]:bg-zinc-700 [&>div]:text-amber-400 [&>div]:rounded-lg text-xs'>
           <div>{props.experience}</div>
           <div>{props.jobType}</div>
           <div>{props.location}</div>
       </div>
       <Text className='!text-xs text-justify !text-amber-50' lineClamp={3}>
        {props.about}
       </Text>
       <div className='flex justify-between'>
         <div className='font-semibold text-zinc-100'>
          &#8377;{props.packageOffered} LPA
         </div>
         <div className='flex gap-1 text-xs items-center text-zinc-500'>
          <IconClockHour3 className='h-5 w-5' stroke={1.5} />Posted {timeAgo(props.postTime)}.
         </div>
       </div>
       <Link to={`/jobs/${props.id}`} >
       <Button fullWidth color="yellow.7" variant="outline" >View Job</Button>
      </Link>
    </div>
  )
}

export default JobCard
