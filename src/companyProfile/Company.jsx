import { Avatar, AvatarGroup, Button, Divider, Tabs } from '@mantine/core'
import { IconBriefcase, IconMapPin } from '@tabler/icons-react'
import logo from "../assets/profile_logo.png"
import bg from "../assets/tv-bg.png"
import React from 'react'
import About from './About'
import CompanyJobs from './CompanyJobs'
import CompanyEmp from './CompanyEmp'

const Company = (props) => {
  
  return (
    <div className='w-3/4'>
       <div className='relative px-5'>
           <div className='relative px-5'>
  
  {/* Background */}
  <img
    className='rounded-t-2xl h-65 w-full object-fit'
   src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
    alt=""
  />

  {/* Profile Logo */}
  <img
    className='w-46 h-40 rounded-3xl border-8 border-zinc-900 p-3
               absolute -bottom-13 left-10 bg-zinc-600 object-fit'
    src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
    
    alt=""
  />

</div>
           <div className='px-8 mt-15'>
              <div className='text-3xl  font-semibold flex justify-between'>Google
                <AvatarGroup>
                    <Avatar />
                    <Avatar/>
                    <Avatar/>10k+
                </AvatarGroup>
                
                </div>
              <div className='text-lg mt-5 flex gap-1 items-center text-amber-50'>
                <IconMapPin className='h-5 w-5' stroke={1.5} />kanpur
              </div>
              <Divider/>
                 <div className='mt-5 mb-5'>
                    <Tabs radius="lg" defaultValue="about">
                  <Tabs.List className='[&_button]:!text-2xl mb-5  font-semibold [&_button[data-active="true"]]:!text-amber-400'>
                    <Tabs.Tab value="about">About</Tabs.Tab>
                    <Tabs.Tab value="jobs">jobs</Tabs.Tab>
                    <Tabs.Tab value="employees">Employees</Tabs.Tab>
                  </Tabs.List>

                  <Tabs.Panel value="about"><About/></Tabs.Panel>
                  <Tabs.Panel value="jobs"><CompanyJobs/></Tabs.Panel>
                  <Tabs.Panel value="employees"><CompanyEmp/></Tabs.Panel>
                </Tabs>
                 </div>            
           </div>
       </div>
    </div>
  )
}

export default Company
