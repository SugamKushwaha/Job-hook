import React, { useEffect, useState } from 'react'
import bg from "../assets/tv-bg.png"
import logo from "../assets/profile_logo.png"
import { IconArrowLeft, IconBriefcase, IconMapPin } from '@tabler/icons-react'
import { Button, Divider, keys } from '@mantine/core'
import ExperienceCard from './ExperienceCard'
import CertificationCard from './CertificationCard'
import { useParams } from 'react-router-dom'
import { getProfile } from '../UserServices/ProfileService'
import avatar from '../assets/avatar.png';
const Profile = (props) => {

  const {id}= useParams();
  const [profile, setProfile] = useState({});

  useEffect(()=>{
    getProfile(id).then((res)=>{
         setProfile(res);
    }).catch((err)=>{
      console.log(err);
    })
  },[id])

  return (
    <div className='w-2/3'>
       <div className='relative px-5'>
           <img className='rounded-t-2xl h-70 w-full' src={bg} alt="" />
           <img className='w-48 h-48 rounded-full bottom-1/3 absolute left-3 border-zinc-500 border-6 mx-5 '  src={profile.image?`data:image/jpeg;base64,${profile.image}`:avatar   } alt="" />
           <div className='px-8 mt-10'>
              <div className='text-3xl font-semibold flex justify-between'>{`${profile?.name}`}
                <Button color='yellow.6' variant='light' >Message</Button>
                </div>
              <div className='text-xl flex gap-1 items-center'> <IconBriefcase className='h-5 w-5' stroke={1.5} /> {profile?.jobTitle} : {profile.company}</div>
              <div className='text-lg flex gap-1 items-center text-amber-50'>
                <IconMapPin className='h-5 w-5' stroke={1.5} />{profile.location}
              </div>
               <div className='text-lg flex gap-1 items-center text-amber-50'>
                <IconBriefcase className='h-5 w-5' stroke={1.5} />Experience: {profile.totalExp}
              </div>
           </div>
       </div>
       <Divider my={2} mt={60} mb={10} />
       <div className='px-13 mt-6'>
          <div className='text-2xl font-semibold mb-3'>About.</div>
          <div className='text-sm text-amber-50 text-justify'>{profile.about}</div>
       </div>
       <Divider my={2} mt={60} />
        <div className='px-13 mt-6'>
          <div className='text-2xl  font-semibold mb-3'>Skills</div>
          <div className=' mt-8 flex flex-wrap gap-2'>

           {
            profile?.skills?.map((skill,index)=><div key={index} className='bg-zinc-700 bg-opacity-15 rounded-3xl text-amber-600 px-3 py-1'>{skill}</div>)
           }

          </div>
       </div>
       <Divider mt={40}/>
       <div className='px-12 mt-10'>
        <div className='text-2xl font-semibold mb-5'>Experience</div>
          <div className='flex flex-col gap-8'>
             {
          profile?.experience?.map((exp,index)=><ExperienceCard key={index}{...exp} />)
        }
          </div>
       </div>
        <Divider mt={40}/>
       <div className='px-12 mt-10 mb-8'>
        <div className='text-2xl font-semibold mb-5'>Certificatons</div>
        {
          profile?.certification?.map((certi,index)=><CertificationCard key={index}{...certi} />)
        }
       </div>
    </div>
  )
}

export default Profile
