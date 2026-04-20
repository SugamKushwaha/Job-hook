import React, { useEffect, useState } from 'react'
import bg from "../assets/tv-bg.png"
import logo from "../assets/profile_logo.png"
import { IconBriefcase, IconDeviceFloppy, IconEdit, IconMapPin, IconPencil, IconPlus } from '@tabler/icons-react'
import { ActionIcon, Avatar, Button, Divider, FileInput, Overlay, TagsInput, Textarea} from '@mantine/core'
import ExperienceCard from './ExperienceCard'
import CertificationCard from './CertificationCard'
import SelectInput from './SelectInput'
import fields from '../data/profile'
import ExpInput from './ExpInput'
import CertiInput from './CertiInput'
import { getProfile, updateProfile } from '../UserServices/ProfileService'
import { useDispatch, useSelector } from 'react-redux'
import Info from './Info'
import { changeProfile, setProfile } from '../slices/ProfileSlice'
import About from './About'
import Skills from './Skills'
import Experience from './Experience'
import Certificate from './Certificate'
import { useHover } from '@mantine/hooks'
import { successNotification } from '../UserServices/NotificationService'
import { getBase64 } from '../UserServices/Utilities'

const Profile = (props) => {
  const dispatch = useDispatch();
    const user = useSelector((state)=>state.user);
    const profile = useSelector((state) => state.profile);
    // const [edit,setEdit]=useState([false,false,false,false,false]);
// useEffect(()=>{
//   if(user?.profileId){
//     getProfile(user.profileId)
//       .then((data)=>{
//         dispatch(setProfile(data));
//       })
//       .catch((error)=>{
//         console.log(error);
//       });
//   }
// },[user])

const {hovered ,ref}=useHover();

  const handleFileChange = async (file) => {
  const image = await getBase64(file);
  let updatedProfile = { ...profile, image: image.split(',')[1] };
  await updateProfile(updatedProfile);
  dispatch(changeProfile(updatedProfile));
  successNotification("Success", "Profile picture Updated Successfully");
}

  
  
  return (
    <div className='w-4/5 mx-auto '>
       <div className='relative px-5'>
           <img className='rounded-t-2xl h-70 w-full' src={bg} alt="" />
           {/* <div ref={ref} className='flex  items-center justify-center absolute -bottom-1/25 left-3'>
            <Avatar className='!w-48 !h-48 rounded-full border-zinc-500 border-8 mx-5 ' alt="" />
            {hovered && <Overlay className="!rounded-full" color="#000" backgroundOpacity={0.75} />}
            {
              hovered && <IconEdit className="absolute z-[300] !w-16 !h-16 " />}
           </div> */}
           <div ref={ref} className='absolute -bottom-1/25 left-8'>
             <div className="relative w-48 h-48">
              <Avatar className='!w-48 !h-48 rounded-full border-zinc-500 border-7' src={profile.image?`data:image/jpeg;base64,${profile.image}`:"/Avatar.png"} alt="it's me"/>
              {hovered && ( <Overlay className="!rounded-full" color="#000" backgroundOpacity={0.75} />
               )}
             {hovered && (<IconEdit className="absolute inset-0 m-auto z-[300] !w-16 !h-16" />)}
             {hovered && <FileInput onChange={handleFileChange} className='absolute inset-0 w-full [&_*]:!rounded-full [&_*]:!h-full !h-hull z-[301]' variant='transparent'  accept="image/png,image/jpeg"/>}
         </div>
        </div>

       </div>
           <div className='px-8 mt-10'>
             <Info/>
           </div>
       <Divider my={2} mt={60} mb={10} />
      <About/>

       <Divider my={2} mt={60} />
      <Skills/>
       <Divider mt={40}/>
       <Experience/>
        <Divider mt={40}/>
       <Certificate/>
    </div>
  )
}

export default Profile
