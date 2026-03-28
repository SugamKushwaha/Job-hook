import { Tabs } from '@mantine/core'
import React from 'react'
import { jobList } from '../data/Data'
import JobHistoryCard from './JobHistoryCard'

const JobHistory = () => {
  return (
    <div  className='min-h-[90vh] bg-zinc-900 '>
        <div className='text-2xl font-semibold pt-5 pb-10 pl-10 apply'>Job History</div>
        <div>
          <Tabs radius="lg" defaultValue="apply">
      <Tabs.List className='[&_button]:!text-lg mb-5 font-semibold [&_button[data-active="true"]]:!text-amber-400'>
        <Tabs.Tab value="apply">Apply</Tabs.Tab>
        <Tabs.Tab value="saved">Saved</Tabs.Tab>
        <Tabs.Tab value="offered">Offered</Tabs.Tab>
        <Tabs.Tab value="interviewing">Interviewing</Tabs.Tab>
      </Tabs.List>
      
      <Tabs.Panel value="apply">
        <div className='mt-10 flex flex-wrap gap-5'>
         {
        jobList.map((job,index)=>(<JobHistoryCard key={index} {...job} applied />))
       }
      </div>
      </Tabs.Panel>
      <Tabs.Panel value="saved">
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
       </Tabs.Panel>
      </Tabs>
       </div>    
    </div>
  )
}

export default JobHistory
