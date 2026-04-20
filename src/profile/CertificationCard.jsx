import { ActionIcon } from '@mantine/core'
import { IconTrash } from '@tabler/icons-react'
import React from 'react'
import { formatDate } from '../UserServices/Utilities'
import { useDispatch, useSelector } from 'react-redux'
import { changeProfile } from '../slices/ProfileSlice'
import { successNotification } from '../UserServices/NotificationService'

const CertificationCard = (props) => {

  const dispatch = useDispatch();
  const profile = useSelector((state)=>state.profile);

   const handleDelete=()=>{
         let certis= [...profile.certification];
         certis.splice(props.index, 1);
         let updatedProfile={...profile, certification:certis};
         dispatch(changeProfile(updatedProfile));
         successNotification("Success","Certification Deleted Successfully");
    }

  return (
       <div className='flex justify-between mb-8'>
         <div className='flex gap-2 items-center'>
           <div className='p-1 bg-zinc-800'>
            <img className='h-14' src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"  alt="" /></div>
           <div className='flex flex-col gap-1'> 
             <div className='font-semibold'>{props.name}</div>
             <div className='text-sm text-amber-50'>{props.issuer}</div>
           </div>
         </div>
        <div className='flex items-center gap-2'>
           <div className='flex flex-col items-end'>
            <div>Issued: {formatDate(props.issueDate)}</div>
            <div>ID: {props.certificationId}</div>
         </div>
         {props.edit && <ActionIcon color='red.8' onClick={handleDelete} variant='subtle'>
          <IconTrash stroke={1.5} className='h-4/5 w-4/5' />
        </ActionIcon>}
        </div>
       

       </div>
      
  )
}

export default CertificationCard
