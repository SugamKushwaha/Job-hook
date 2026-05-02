import { ActionIcon } from '@mantine/core'
import { IconExternalLink } from '@tabler/icons-react'
import React from 'react'




const CompanyCard = (props) => {
  return (
    <div>
      <div className='flex justify-between bg-zinc-600 items-center rounded-lg p-2'>
         <div className='flex gap-2 items-center'>
           <div className='p-2 bg-zinc-700'>
            <img className='h-7' src={props.logo} alt="" /></div>
           <div className='flex flex-col gap-1'> 
             <div className='font-semibold text-lg ml-2'>{props.name}</div>
             <div className='text-xs ml-2 text-amber-50'>{props.employees} Employees</div>
           </div>
         </div>
         <ActionIcon color='yellow' variant='subtle'>
            <IconExternalLink/>
         </ActionIcon>
       </div>
    </div>
  )
}

export default CompanyCard
