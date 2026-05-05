import { IconBookmark, IconBookmarkFilled, IconCalendar, IconClockHour3 } from '@tabler/icons-react'
import { Button, Divider, Text } from '@mantine/core'
import React from 'react'
import { timeAgo } from '../UserServices/Utilities'
import { changeProfile } from '../slices/ProfileSlice'
import { useDispatch, useSelector } from 'react-redux'

const JobHistoryCard = (props) => {

  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile);

   const handleSaveJob=()=>{
      let savedJobs=[...profile.savedJobs];
      if(savedJobs?.includes(props.id)){
        savedJobs=savedJobs?.filter((id)=>id!==props.id);
      }else{
        savedJobs=[...savedJobs, props.id];
      }
      let updatedProfile={...profile, savedJobs:savedJobs};
      dispatch(changeProfile(updatedProfile));
    }
  return (
    <div className='bg-zinc-800 ml-5 p-4 w-87 rounded-xl flex flex-col gap-3 hover:shadow-[0_0_5px_1px_yellow] max-[500px]:w-full max-[500px]:mr-5'>
      
      <div className='flex justify-between '>
        <div className='flex gap-2 items-center'>
          <div className='p-2 bg-zinc-900 rounded'>
            <img className='h-7' src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="company logo" />
          </div>
          <div className='flex flex-wrap flex-col gap-1'> 
            <div className='font-semibold'>{props.jobTitle}</div>
            <div className='text-xs text-amber-50'>
              {props.company} &#x2022; {props.applicants?props.applicants.length:0} Applicants
            </div>
          </div>
        </div>
       { 
        profile.savedJobs?.includes(props.id)? <IconBookmarkFilled  onClick={handleSaveJob} className='cursor-pointer text-amber-600' />:<IconBookmark  onClick={handleSaveJob} className='text-zinc-400 cursor-pointer  hover:text-amber-600' />
               }
      </div>

      <div className='flex gap-2  flex-wrap [&>div]:py-1 [&>div]:px-2 [&>div]:bg-zinc-700 [&>div]:text-amber-300 [&>div]:rounded-lg text-xs'>
        <div>{props.experience}</div>
        <div>{props.jobType}</div>
        <div>{props.location}</div>
      </div>

      <Text className='!text-xs text-justify !text-amber-50' lineClamp={3}>
        {props.about}
      </Text>

      <div className='flex justify-between'>
        <div className='font-semibold text-zinc-100'>
          ₹{props.packageOffered} LPA
        </div>
        <div className='flex gap-1 text-xs items-center text-zinc-500'>
          <IconClockHour3 className='h-5 w-5' stroke={1.5} />
         {props.applied || props.interview?"Applied":props.offered?"Interview":"Posted"} {timeAgo(props.postTime)} 
        </div>
      </div>
      {
       ( props.offered || props.interview) && <Divider/>
      }
      {
       props.offered && <div className='flex gap-2'>
            <Button color='yellow' variant='outline' fullWidth>Accepted</Button>
             <Button color='yellow' variant='light' fullWidth>Regect</Button>
        </div>
      }
      {
        props.interview && <div className='flex gap-5 items-center'>
          <IconCalendar className='text-amber-400 w-5 h-5' stroke={1.5}/>Interview: august 27, 2024 &bull;<span className='text-zinc-600'> 10:00 pm</span>
        </div>
      }
    </div>
  )
}

export default JobHistoryCard