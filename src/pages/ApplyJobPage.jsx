import React, { useEffect, useState } from 'react'
import ApplyJobs from '../applyJob/ApplyJobs'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Button } from '@mantine/core'
import { IconArrowLeft } from '@tabler/icons-react'
import { getJob } from '../UserServices/JobService'

const ApplyJobPage = () => {
  const navigate = useNavigate();

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
       
         <Button my="sm" color='yellow' variant='light'leftSection={<IconArrowLeft size={20} />} onClick={()=>navigate(-1)} >Back</Button>
        <ApplyJobs {...job} />
    </div>
  )
}

export default ApplyJobPage
