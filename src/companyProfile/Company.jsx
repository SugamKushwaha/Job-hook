import { Avatar, AvatarGroup, Button, Divider, Tabs } from '@mantine/core'
import { IconBriefcase, IconMapPin } from '@tabler/icons-react'
import logo from "../assets/profile_logo.png"
import bg from "../assets/tv-bg.png"
import React from 'react'
import About from './About'
import CompanyJobs from './CompanyJobs'
import CompanyEmp from './CompanyEmp'

const Company = () => {
  
  return (
    <div className='w-3/4'>
       <div className='relative px-5'>
           <img className='rounded-t-2xl h-70 w-full' src={bg} alt="" />
           <img className='w-36 h-36  rounded-3xl bottom-1/4  left-5 border-zinc-900 border-8 mx-5 ' src={logo} alt="" />
           <div className='px-8 mt-15'>
              <div className='text-3xl  font-semibold flex justify-between'>Google
                <AvatarGroup>
                    <Avatar />
                    <Avatar/>
                    <Avatar/>10k+
                </AvatarGroup>
                
                </div>a
              <div className='text-lg flex gap-1 items-center text-amber-50'>
                <IconMapPin className='h-5 w-5' stroke={1.5} />kanpur
              </div>
              <Divider/>
                 <div>
                    <Tabs radius="lg" defaultValue="about">
                  <Tabs.List className='[&_button]:!text-lg mb-5 font-semibold [&_button[data-active="true"]]:!text-amber-400'>
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
