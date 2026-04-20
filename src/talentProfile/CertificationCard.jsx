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
         <div className='flex flex-col items-end'>
            <div>Issued: {formatDate(props.issueDate)}</div>
            <div>ID: {props.certificationId}</div>
         </div>
       </div>
      
  )
}

export default CertificationCard
