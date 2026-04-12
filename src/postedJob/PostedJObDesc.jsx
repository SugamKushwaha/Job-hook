import { Badge, Tabs } from '@mantine/core'
import React, { useEffect, useState } from 'react'
import JobDesc from '../jobDescription/JobDesc'
import { talentsdata } from '../data/Data'
import TalentCard from '../findTelent/TalentCard'


const PostedJObDesc = (props) => {

  const [tab, setTab]=useState("overview");
  const [arr,setArr]= useState([]);

 const handleTabChange=(value)=>{
    setTab(value);
    if(value=="applicants"){
      setArr(props.applicants?.filter((x)=>x.applicants=="APPLIED"));
    }else if(value=="invited"){
      setArr(props.applicants?.filter((x)=>x.applicants=="INTERVIEWING"));
    }else if(value=="rejected"){
      setArr(props.applicants?.applicants((x)=>x.applicants=="REJECTED"));
    }
  }

  useEffect(()=>{
    handleTabChange("overview")
  },[props])

  return (
    <div className='mt-5 w-3/4 px-5'>
     {props.jobTitle?<><div className='text-2xl flex items-center font-semibold mb-5'>{props.jobTitle} <Badge variant='light' size='sm' ml="sm" color='yellow'>{props.jobStatus}</Badge></div>
     
     <div className='font-medium text-zinc-100'>{props.location}</div>
     <div>
         <Tabs radius="lg" autoContrast value={tab} onChange={handleTabChange}>
                  <Tabs.List className='[&_button]:!text-lg mb-5 font-semibold [&_button[data-active="true"]]:!text-amber-400'>
                    <Tabs.Tab value="overview">Overview</Tabs.Tab>
                    <Tabs.Tab value="applicants">Applicants</Tabs.Tab>
                    <Tabs.Tab value="invited">Invited</Tabs.Tab>
                    <Tabs.Tab value="offered">Offered</Tabs.Tab>
                    <Tabs.Tab value="rejected">Rejected</Tabs.Tab>
                  </Tabs.List>

                  <Tabs.Panel value="overview" className='[&>div]:w-full'>
                      <JobDesc edit={true} closed={props.jobStatus=="CLOSED"} {...props} />
                  </Tabs.Panel>
                  <Tabs.Panel value="applicants">
                  <div className='flex flex-wrap mt-10 gap-5 justify-around'>
                     {
                      arr?.length?arr.map((talent,index)=>
                         <TalentCard key={index} {...talent} posted={true}/>):<div className="text-2xl font-semibold">No Applications</div>
                    }
                  </div>
                  </Tabs.Panel>
                  <Tabs.Panel value="invited">
                <div className='flex flex-wrap mt-10 gap-5  justify-around'>
                     {
                      arr?.length?arr.map((talent,index)=>
                         <TalentCard key={index} {...talent} invited={true} />):<div className="text-2xl font-semibold">No Invited Candidates</div>
                      
                    }
                  </div>
                  </Tabs.Panel>
                  <Tabs.Panel value="offered">
                <div className='flex flex-wrap mt-10 gap-5  justify-around'>
                     {
                      arr?.length?arr.map((talent,index)=>
                         <TalentCard key={index} {...talent} offered={true} />):<div className="text-2xl font-semibold">No Offered</div>
                      
                    }
                  </div>
                  </Tabs.Panel>
                   <Tabs.Panel value="rejected">
                <div className='flex flex-wrap mt-10 gap-5  justify-around'>
                     {
                      arr?.length?arr.map((talent,index)=>
                         <TalentCard key={index} {...talent} rejected={true} />):<div className="text-2xl font-semibold">No Rejected</div>
                      
                    }
                  </div>
                  </Tabs.Panel>
              </Tabs>
     </div>
    </>:<div className="text-2xl font-semibold flex min-h-[70vh]: justify-center items-center" >No Job Found</div>}
    </div>
  )
}

export default PostedJObDesc
