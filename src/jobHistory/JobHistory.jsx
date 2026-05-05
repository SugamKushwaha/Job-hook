import { Tabs } from '@mantine/core'
import React, { useEffect, useState } from 'react'
import { jobList } from '../data/Data'
import JobHistoryCard from './JobHistoryCard'
import { getAllJobs } from '../UserServices/JobService'
import { useSelector } from 'react-redux'

const JobHistory = () => {
  
  const profile = useSelector((state)=>state.profile);
  const user = useSelector((state)=>state.user);
  const [activeTab, setActiveTab] = useState('APPLIED');
  const [jobs, setJobs]= useState([]);
  const [showList, setShowList]=useState([]);

  useEffect(()=>{
    getAllJobs().then((res)=>{
      setJobs(res);
      setShowList(res.filter((job)=>{
            let found = false;
            job.applicants?.forEach((applicant)=>{
              if(applicant.userId==user?.id && applicant.applicationStatus=="APPLIED"){
                found=true;
              }
            })
            return found;
          }));
    }).catch((err)=>{
      console.log(err);
    })
  },[user]);

  const handleTabChange=(value)=>{
        setActiveTab(value);
        if(value=="SAVED"){
            setShowList(jobs.filter((job)=>profile.savedJobs?.includes(job.id)));
        }else{
          setShowList(jobs.filter((job)=>{
            let found = false;
            job.applicants?.forEach((applicant)=>{
              if(applicant.userId==user.id && applicant.applicationStatus==value){
                found=true;
              }
            })
            return found;
          }));
        }
  }

  
  return (
    <div  className='min-h-[90vh] bg-zinc-900 '>
        <div className='text-2xl font-semibold pt-5 pb-10 pl-10 apply'>Job History</div>
        <div>
          <Tabs value={activeTab} onChange={handleTabChange} radius="lg" >
      <Tabs.List className='[&_button]:!text-lg mb-5 font-semibold [&_button[data-active="true"]]:!text-amber-400 max-[490px]:[&_button]:!text-xl '>
        <Tabs.Tab value="APPLIED">Apply</Tabs.Tab>
        <Tabs.Tab value="SAVED">Saved</Tabs.Tab>
        <Tabs.Tab value="OFFERED">Offered</Tabs.Tab>
        <Tabs.Tab value="INTERVIEWING">In Progress</Tabs.Tab>
      </Tabs.List>
      
      <Tabs.Panel value={activeTab}>
        <div className='mt-10 flex flex-wrap gap-5'>
         {
        showList.map((job,index)=>(<JobHistoryCard key={index} {...job} applied  {...{[activeTab.toLowerCase()]:true}} />))
       }
      </div>
       </Tabs.Panel>
      
      </Tabs>
       </div>    
    </div>
  )
}

export default JobHistory
