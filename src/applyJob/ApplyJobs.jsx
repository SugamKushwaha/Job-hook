import { Button, CheckIcon, Divider, FileInput, LoadingOverlay, Notification, NumberInput, Textarea, TextInput } from '@mantine/core'
import { IconCheck, IconPaperclip } from '@tabler/icons-react'
import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import ApplicationForm from './ApplicationForm';
import { timeAgo } from '../UserServices/Utilities';

const ApplyJobs = (props) => {

  const [preview,setPreview]=useState(false);
  const [submit,steSubmit] = useState(false);
  const [sec,setSec] = useState(5);
  const navigate = useNavigate();
  const handlePreview=()=>{
    setPreview(!preview);
    window.scrollTo({top:0,behavior:'smooth'})
  }
  const handleSubmit =()=>{
    steSubmit(true);
    let x=5;
    setInterval(()=>{
      x--;
      setSec(x);
      if(x==0)navigate('/find-jobs');
        },1000)
  }
  
  return (
    <div>
      <div className='w-2/3 mx-auto'>
      
      <div className='flex justify-between'>
         <div className='flex gap-2 items-center'>
           <div className='p-3 bg-zinc-800 rounded-xl'>
            <img className='h-14' src="" alt="" /></div>
           <div className='flex flex-col gap-1'> 
             <div className='font-semibold text-2xl'>{props.jobTitle}</div>
             <div className='text-lg text-amber-50'>{props.company} &bull; {timeAgo(props.postTime)} &bull; {props.applicants?props.applicants.length:0} Applicants</div>
           </div>
         </div>
       </div>
       <Divider my="xl"/>
       <ApplicationForm/>
    </div>
    <Notification className={`border !border-amber-400 -translate-y-20  !fixed top-0 left-[35%] z-[1001] transition duration-300 ease-in-out ${submit?"translate-y-0":"-translate-y-20 "}`} icon={<IconCheck style={{width:20,height:20}} />} color='teal'title="Application submitted" mt="md" withCloseButton={false} >
    Redirecting in {sec} secondes...
    </Notification>
    </div>
 
  )
}

export default ApplyJobs
