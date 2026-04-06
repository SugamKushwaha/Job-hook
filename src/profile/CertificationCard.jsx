import { ActionIcon } from '@mantine/core'
import { IconTrash } from '@tabler/icons-react'
import React from 'react'
import { formatDate } from '../UserServices/Utilities'

const CertificationCard = (props) => {
  return (
       <div className='flex justify-between'>
         <div className='flex gap-2 items-center'>
           <div className='p-2 bg-zinc-800'>
            <img className='h-7'  alt="" /></div>
           <div className='flex flex-col gap-1'> 
             <div className='font-semibold'>{props.name}</div>
             <div className='text-sm text-amber-50'>{props.issuer}</div>
           </div>
         </div>
        <div className='flex items-center gap-2'>
           <div className='flex flex-col items-end'>
            <div>{formatDate(props.issueDate)}</div>
            <div>ID: {props.certificateId}</div>
         </div>
         {props.edit && <ActionIcon color='red.8' variant='subtle'>
          <IconTrash stroke={1.5} className='h-4/5 w-4/5' />
        </ActionIcon>}
        </div>
       

       </div>
      
  )
}

export default CertificationCard
