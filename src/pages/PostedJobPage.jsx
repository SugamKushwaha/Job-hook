import React, { useEffect, useState } from 'react'
import PostedJob from '../postedJob/PostedJob'
import PostedJObDesc from '../postedJob/PostedJObDesc'
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getJobPostedBy } from '../UserServices/JobService';

const PostedJobPage = () => {
  
  const navigate = useNavigate();
   const{id}=useParams();
  const user = useSelector((state)=>state.user);
  const [jobList, setJobList]=useState([]);
  const [job, setJob]=useState({});
  
  useEffect(()=>{
    window.scrollTo(0,0);
    getJobPostedBy(user.id).then((res)=>{
      setJobList(res);
      if(res && res.length>0 && Number(id)==0)navigate(`/posted-job/${res[0].id}`);
      setJob(res.find((item)=>item.id==id));
    }).catch((err)=>{
      console.log(err);
    })
  },[id]);

  return (
    <div className='min-h-[90vh]  bg-zinc-900 '>
      <div className='flex gap-5'>
         <PostedJob job={job} jobList={jobList} />
       <PostedJObDesc  {...job} />
      </div>
    </div>
  )
}

export default PostedJobPage
