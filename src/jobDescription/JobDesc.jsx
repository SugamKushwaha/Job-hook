import { ActionIcon, Button, Divider } from '@mantine/core'
import { IconBookmark, IconBookmarkFilled, IconMapPin } from '@tabler/icons-react'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { card, desc } from '../data/Data'
import { useDispatch, useSelector } from 'react-redux'
import { changeProfile } from '../slices/ProfileSlice'
import PostJob from '../postJobs/PostJob'
import { errorNotification, successNotification } from '../UserServices/NotificationService'

const JobDesc = (props) => {
    const data = props?.description;
    const profile = useSelector((state)=>state.profile);
    const dispatch = useDispatch();
    const [applied, setApplied]= useState(false);
    const user = useSelector((state)=>state.user);

    const handleSaveJob=()=>{
       let savedJobs = [...(profile?.savedJobs || [])];
        if(savedJobs?.includes(props.id)){
          savedJobs=savedJobs?.filter((id)=>id!==props.id);
        }else{
          savedJobs=[...savedJobs, props.id];
        }
        let updatedProfile={...profile, savedJobs:savedJobs};
        dispatch(changeProfile(updatedProfile));
      }

      useEffect(()=>{
            if(props?.applicants?.filter((applicant)=>applicant.applicantId==user.id).length>0){
              setApplied(true);
            }else setApplied(false);
      },[props])

      const handleClose=()=>{
        PostJob({...props,jobStatus:"CLOSED"}).then((res)=>{
          successNotification("Success","Job Closed Successfully");
        }).catch((err)=>{
          errorNotification("Error",err.response.data.errorMessage);
        })
      }

  return (
    <div className='w-2/3 ml-10'>
       <div className='flex justify-between'>
         <div className='flex gap-2 items-center'>
           <div className='p-3 bg-zinc-800 rounded-xl'>
            <img className='h-13 w-25' src= "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="" /></div>
           <div className='flex flex-col gap-1'> 
             <div className='font-semibold text-2xl'>{props.jobTitle}</div>
             <div className='text-lg text-amber-50'>{props.company}&bull;  {props.applicants?props.applicants.length:0}  Applicants</div>
           </div>
         </div>
         <div className='flex flex-col gap-2 items-center'>
            { 
             (props.edit || !applied) && <Link to={props.edit?`/post-job/${props.id}`:`/apply-job/${props.id}`}>
            <Button  color="yellow.8" variant='light' >{props.closed?"Reopen":props.edit?"Edit":"Apply"}</Button>
            </Link>}{
            !props.edit && applied && <Button  color="green.7" variant='light' >Applied</Button>
            }
            
            {
            props.edit && !props.closed? <Button onClick={handleClose}  color='red' variant='outline' >Close</Button>:profile.savedJobs?.includes(props.id)?<IconBookmarkFilled
              onClick={handleSaveJob} className='cursor-pointer text-amber-500' />:<IconBookmark  onClick={handleSaveJob} className='text-zinc-400 cursor-pointer  hover:text-amber-400' />
             }
         </div>
       </div>
       <Divider my="xl" />
       <div className='flex  justify-between'>
        {
            card.map((item,index)=><div key={index} className='flex flex-col items-center gap-1'>
         <ActionIcon className='!h-15 !w-15'variant='light' color="yellow.5" radius="xl" aria-label='Settings' >
           <item.icon className='h-4/5 w-10' stroke={1.3} />
         </ActionIcon>
         <div className='text-zinc-300 font-semibold text-xl '>{item.name}</div>
         <div className=' text-sm hover:underline'>{props?props[item.id]:"NA"}{item.id=="packageOffered" && <>LPA</>}</div>
        </div>)
        }
       </div>
       <Divider my="xl" />
       <div>
         <div className='text-xl mt-10 font-semibold'>Requird skills</div>
         <div className='flex gap-2 flex-wrap mt-2 ml-2'>
          {

           props?.skillsRequired?.map((skill,index)=> <ActionIcon className='!h-fit !w-fit font-medium !text-sm'variant='light' color="yellow.6" p="xs" radius="xl" aria-label='Settings' >{skill}
         </ActionIcon>)
        }
          
         </div>
       </div>
       <Divider my="xl" />
       <div className='[&_h4]:text-xl [&_*]:text-zinc-500 [&_li]:marker:text-amber-400 [&_li]:my-1 [&_h4]:my-4 [&_h4]:font-semibold [&_h4]:text-zinc-300 [&_p]:text-justify' dangerouslySetInnerHTML={{__html:data}}>
       </div>
       <Divider my="xl" />
       <div className='mb-5'>
         <div className="font-semibold text-2xl">About the company</div>
         <div>
          <div className='flex justify-between mb-2'>
         <div className='flex gap-2 items-center'>
           <div className='p-3 bg-zinc-800 rounded-xl'>
          <img className='h-8'  alt="" /></div>
           <div className='flex flex-col '> 
             <div className='font-medium text-lg'>{props.company}</div>
             <div className='text-lg text-amber-50'>10k+ employees</div>
           </div>
         </div>
            <Link to={`/company/${props.company}`}>
            <Button  color='yellow.5' variant='light' >Companies page</Button>
            </Link>
           </div>
           <div className='text-zinc-300 text-justify'>{props.about}</div>
         </div>
       </div>
    </div>
  )
}

export default JobDesc
