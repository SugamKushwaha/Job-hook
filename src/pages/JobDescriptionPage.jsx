import { Button, Divider } from '@mantine/core'
import { IconArrowLeft } from '@tabler/icons-react'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import JobDesc from '../jobDescription/JobDesc'
import RecommendedJobs from '../jobDescription/RecommendedJobs'
import { getJob } from '../UserServices/JobService'

const JobDescriptionPage = () => {
  const {id}=useParams();
  const [job ,setJob]=useState(null);
  useEffect(()=>{
    window.scrollTo(0,0);
    getJob(id).then((res)=>{
      setJob(res);
    }).catch((err)=>{
      console.log(err);
    });
  },[id])
  return (
    <div className='min-h-[90vh] bg-zinc-900 '> 
    <Divider />
     <Link to="/find-jobs" className='my-4 inline-block p-4'>
         <Button leftSection={<IconArrowLeft/>} color='yellow.5' variant='light' >Back</Button>
         </Link>
     
     <div className='flex gap-5'>
        <JobDesc {...job} />
        <RecommendedJobs/>
     </div>
    </div>
  )
}

export default JobDescriptionPage
