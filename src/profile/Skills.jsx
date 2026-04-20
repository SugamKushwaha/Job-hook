import { ActionIcon, TagsInput } from "@mantine/core";
import { changeProfile } from "../slices/ProfileSlice";
import { successNotification } from "../UserServices/NotificationService";
import { IconCheck, IconPencil, IconX } from "@tabler/icons-react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

const Skills=()=>{

     const dispatch = useDispatch();
     const [edit, setEdit] = useState(false);
     const profile = useSelector((state)=>state.profile);
     const [skills , setSkills]=useState([]);
      const handleClick =()=>{
        if(!edit){
            setEdit(true);
            setSkills(profile.skills);
        }else
            setEdit(false);
    }

    const handleSave=()=>{
       setEdit(false);
            let updatedProfile = {...profile, skills:skills};
            dispatch(changeProfile(updatedProfile));
             successNotification("Success","Skills Updated Successfully");
    } 

    return  <div className='px-12 mt-12'>
  <div className='text-2xl font-semibold mb-3 flex justify-between'>Skills <div>
                 {edit && <ActionIcon onClick={handleSave} size="lg" color="green.8" variant='subtle' aria-label='settinge'>
                  {<IconCheck className='h-4/5 w-4/5' stroke={1.5} />}
                 </ActionIcon>}
                 <ActionIcon onClick={handleClick} size="lg" color={edit?"red.8":"yellow.7"} variant='subtle' aria-label='settinge'>
                  {edit ? <IconX className='h-4/5 w-4/5' />:<IconPencil className='h-4/5 w-4/5'/>}
                 </ActionIcon></div></div>
               {
                edit? <TagsInput value={skills} onChange={setSkills} placeholder='Add skill' splitChars={[',',' ','|']} />:<div className='flex flex-wrap gap-2'>
    {profile?.skills?.map((skill, index) => 
      <div
        key={index}
        className='bg-zinc-700 bg-opacity-15 rounded-3xl text-amber-500 px-3 py-1'>
        {skill}
      </div>
    )}
  </div>
 }
</div>
}

export default Skills;