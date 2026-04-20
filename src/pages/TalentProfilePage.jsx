import React, { useEffect, useState } from 'react'
import { Button, Divider } from '@mantine/core'
import { IconArrowLeft } from '@tabler/icons-react'
import { Link, useNavigate } from 'react-router-dom'
import { profiledata } from '../data/Data'
import Profile from '../talentProfile/Profile'
import RecommendTalent from '../talentProfile/RecommendTalent'
import { getAllProfiles } from '../UserServices/ProfileService'

const TalentProfilePage = () => {
  const navigate = useNavigate();

  const [talents , setTalents]=useState([]);
  useEffect(()=>{
    getAllProfiles().then((res)=>{
      setTalents(res);
    }).catch((err)=>{
      console.log(err);
    })
  } ,[])

  return (
    <div className='min-h-[90vh] bg-zinc-900 '> 
    <Divider />
     <Link to="/find-talent" className='my-4 inline-block p-4'>
         <Button onClick={()=>navigate(-1)} leftSection={<IconArrowLeft/>} color="yellow.6" variant='light' >Back</Button>
         </Link>
     
     <div className='flex gap-5'>
        <Profile {...profiledata} />
        <RecommendTalent talents={talents} />
     </div>
    </div>
  )
}

export default TalentProfilePage
