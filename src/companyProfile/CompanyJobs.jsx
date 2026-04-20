import React from 'react'
import { jobList } from '../data/Data'
import JobCard from '../findJobs/JobCard'


const CompanyJobs = () => {
  return (
   <div className='mt-10 flex flex-wrap gap-10'>
         {
        jobList.map((job,index)=>index<5 && (<JobCard key={index} {...job} />))
       }
       <JobCard/>
      </div>
  )
}

export default CompanyJobs
