import React, { useEffect, useState } from 'react'
import PostJob from '../postJobs/PostJob'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { getJobPostedBy } from '../UserServices/JobService';

const PostJobsPage = () => {
 

  return (
    <div className='min-h-[90vh] bg-zinc-900 '>
      <PostJob/>
    </div>
  )
}

export default PostJobsPage
