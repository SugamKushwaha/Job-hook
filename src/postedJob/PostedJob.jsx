import { Tabs } from '@mantine/core'
import React, { useEffect, useState } from 'react'
import { activeJobs } from '../data/Data'
import PostedJobCard from './PostedJobCard'

const PostedJob = (props) => {

const [activeTab, setActiveTab]=useState('ACTIVE');
useEffect(()=>{
  setActiveTab(props.job?.jobStatus || 'ACTIVE');
},[props.job])

 return (
  <div className="w-1/5 ">
    <div className="text-2xl font-semibold mb-5">Jobs</div>
    <div>
      <Tabs value={activeTab} onChange={setActiveTab} autoContrast variant="pills" color="yellow.8" defaultValue="active">
        <Tabs.List className='[&_button[aria-selected="false"]]:bg-amber-400 font-medium'>
          <Tabs.Tab value="ACTIVE">Active [{props.jobList?.filter((job)=>job?.jobStatus=="ACTIVE").length}]</Tabs.Tab>

          <Tabs.Tab value="DRAFT">Drafts [{props.jobList?.filter((job)=>job?.jobStatus=="DRAFT").length}]</Tabs.Tab>

          <Tabs.Tab value="CLOSED">Closed [{props.jobList?.filter((job)=>job?.jobStatus=="CLOSED").length}]</Tabs.Tab>
        </Tabs.List>
        
        </Tabs>
        </div>
           <div className='flex flex-wrap flex-col gap-5 mt-5'>
            {
                props.jobList?.filter((job)=>job?.jobStatus==activeTab).map((item,index)=><PostedJobCard key={index} {...item} />)
            }
           </div>
      
    </div>
)
}

export default PostedJob
