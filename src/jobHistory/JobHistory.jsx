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
  const [jobList, setJobList]= useState([]);
  const [showList, setShowList]=useState([]);

  useEffect(()=>{
    getAllJobs().then((res)=>{
      setJobList(res);
      setShowList(res.filter((job)=>{
            let found = false;
            job.applicants?.forEach((applicant)=>{
              if(applicant.applicantId==user.id && applicant.applicationStatus=="APPLIED"){
                found=true;
              }
            })
            return found;
          }));
    }).catch((err)=>{
      console.log(err);
    })
  },[]);

  const handleTabChange=(value)=>{
        setActiveTab(value);
        if(value=="SAVED"){
            setShowList(jobList.filter((job)=>profile.savedJobs?.includes(job.id)));
        }else{
          setShowList(jobList.filter((job)=>{
            let found = false;
            job.applicants?.forEach((applicant)=>{
              if(applicant.applicantId==user.id && applicant.applicationStatus==value){
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
      <Tabs.List className='[&_button]:!text-lg mb-5 font-semibold [&_button[data-active="true"]]:!text-amber-400'>
        <Tabs.Tab value="APPLIED">Apply</Tabs.Tab>
        <Tabs.Tab value="SAVED">Saved</Tabs.Tab>
        <Tabs.Tab value="OFFERED">Offered</Tabs.Tab>
        <Tabs.Tab value="INTERVIEWING">Interviewing</Tabs.Tab>
      </Tabs.List>
      
      <Tabs.Panel value={activeTab}>
        <div className='mt-10 flex flex-wrap gap-5'>
         {
        showList.map((job,index)=>(<JobHistoryCard key={index} {...job} applied  {...{[activeTab.toLowerCase()]:true}} />))
       }
      </div>
       </Tabs.Panel>
      {/* <Tabs.Panel value="saved">
        <div className='mt-10 flex flex-wrap gap-5'>
         {
        jobList.map((job,index)=>(<JobHistoryCard key={index} {...job} saved />))
       }
      </div>
      </Tabs.Panel>
       <Tabs.Panel value="offered">
        <div className='mt-10 flex flex-wrap gap-5'>
         {
        jobList.map((job,index)=>(<JobHistoryCard key={index} {...job} offered />))
       }
      </div>
       </Tabs.Panel>
       <Tabs.Panel value="interviewing">
        <div className='mt-10 flex flex-wrap gap-5'>
         {
        jobList.map((job,index)=>(<JobHistoryCard key={index} {...job} interview />))
       }
      </div>
       </Tabs.Panel>  */}
      </Tabs>
       </div>    
    </div>
  )
}

export default JobHistory
