import React, { useEffect, useState } from 'react'
import Sort from './Sort'
import JobCard from './JobCard'
import { getAllJobs } from '../UserServices/JobService'
import { useDispatch, useSelector } from 'react-redux'
import { resetFilter } from '../slices/FilterSlice'
import { resetSort } from '../slices/SortSlice'

const Jobs = () => {
  const dispatch= useDispatch();
  const [jobList,setJobList]=useState([]);
   const filter=useSelector((state)=>state.filter);
   const sort = useSelector((state)=>state.sort);
  const [filteredTalents, setFilteredTalents]=useState([]);
  
  useEffect(()=>{
     dispatch(resetFilter())
     dispatch(resetSort());
     getAllJobs().then((res)=>{
      setJobList(res.filter((job)=>job.jobStatus=="ACTIVE"));
     }).catch((err)=>{
      console.log(err);
     })
  },[]);

  useEffect(() => {
  if (sort == "Most Recent") {
    setJobList([...jobList].sort((a, b) => 
      new Date(b.postTime).getTime() - new Date(a.postTime).getTime()
    ));
  } 
  else if (sort == "Salary: Low to High") {
    setJobList([...jobList].sort((a, b) => 
      a.packageOffered - b.packageOffered
    ));
  } 
  else if (sort == "Salary: High to Low") {
    setJobList([...jobList].sort((a, b) => 
      b.packageOffered - a.packageOffered
    ));
  }
}, [sort]);
   
     useEffect(() => {
  let filtered = jobList;

  if (filter["Job Title"] && filter["Job Title"].length > 0) {
    filtered = filtered.filter((job) =>
      filter["Job Title"]?.some((title) =>
        job?.jobTitle?.toLowerCase().includes(title.toLowerCase())
      )
    );
  }

  if (filter.Location && filter.Location.length > 0) {
    filtered = filtered.filter((job) =>
      filter.Location?.some((location) =>
        job.location?.toLowerCase().includes(location.toLowerCase())
      )
    );
  }   


  if (filter.Experience && filter.Experience.length > 0) {
    filtered = filtered.filter((job) => filtered.Experience?.some((x)=>job.Experience?.toLowerCase().includes(x.toLowerCase())));
  }

  if (filter["Job Type"] && filter["Job Type"].length > 0) {
    filtered = filtered.filter((job) =>
      filter["Job Type"]?.some((title) =>
        job?.jobType?.toLowerCase().includes(title.toLowerCase())
      )
    );
}
if (filter.Salary && filter.Salary.length > 0) {
  filtered = filtered.filter(
    (job) =>
      filter.Salary[0] <= job.packageOffered &&
      job.packageOffered <= filter.Salary[1]
  );
   
  }
   setFilteredTalents(filtered);
}, [filter, jobList]);

  return (
    <div className='px-5 py-5'>
       <div className='flex justify-between mt-5'>
         <div className="text-xl" >Recommended jobs</div>
        <Sort sort="job" />
       </div>
      <div className='mt-10 flex flex-wrap gap-5'>
         {
        filteredTalents.map((job,index)=>(<JobCard key={index}  {...job} />))
       }
       <JobCard/>
      </div>
    </div>
  )
}

export default Jobs
