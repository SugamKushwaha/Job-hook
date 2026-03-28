import { ActionIcon, Button, Divider } from '@mantine/core'
import { IconBookmark, IconMapPin } from '@tabler/icons-react'
import React from 'react'
import { Link } from 'react-router-dom'
import { card, desc } from '../data/Data'

const JobDesc = (props) => {
    const data=desc;
  return (
    <div className='w-2/3 ml-10'>
       <div className='flex justify-between'>
         <div className='flex gap-2 items-center'>
           <div className='p-3 bg-zinc-800 rounded-xl'>
            <img className='h-14' src="" alt="" /></div>
           <div className='flex flex-col gap-1'> 
             <div className='font-semibold text-2xl'>engineer</div>
             <div className='text-lg text-amber-50'>google&bull; 48 Applicants</div>
           </div>
         </div>
         <div className='flex flex-col gap-2 items-center'>
            <Link to="/apply-job">
            <Button  color='yellow' variant='light' >{props.edit?"Edit":"Apply"}</Button>
            </Link>
            {props.edit?<Button  color='red' variant='outline' >Delete</Button>:<IconBookmark className='text-zinc-400 cursor-pointer' />}
         </div>
       </div>
       <Divider my="xl" />
       <div className='flex  justify-between'>
        {
            card.map((item,index)=><div key={index} className='flex flex-col items-center gap-1'>
         <ActionIcon className='!h-10 !w-10'variant='light' color='yellow' radius="xl" aria-label='Settings' >
           <item.icon className='h-4/5 w-10' stroke={1.3} />
         </ActionIcon>
         <div className='text-zinc-300 text-sm'>{item.name}</div>
         <div className='font-semibold'>{item.value}</div>
        </div>)
        }
       </div>
       <Divider my="xl" />
       <div>
         <div className='text-xl font-semibold'>Requird skills</div>
         <div className='flex gap-2 flex-wrap mt-2 ml-2'>
            <ActionIcon className='!h-fit !w-fit font-medium !text-sm'variant='light' color='yellow' p="xs" radius="xl" aria-label='Settings' >React
         </ActionIcon>
          
         </div>
       </div>
       <Divider my="xl" />
       <div className='[&_h4]:text-xl [&_*]:text-zinc-500 [&_li]:marker:text-amber-400 [&_li]:my-1 [&_h4]:my-4 [&_h4]:font-semibold [&_h4]:text-zinc-300 [&_p]:text-justify' dangerouslySetInnerHTML={{__html:data}}>
       </div>
       <Divider my="xl" />
       <div>
         <div>About tha company</div>
         <div>
          <div className='flex justify-between mb-2'>
         <div className='flex gap-2 items-center'>
           <div className='p-3 bg-zinc-800 rounded-xl'>
            <img className='h-8' src="" alt="" /></div>
           <div className='flex flex-col '> 
             <div className='font-medium text-lg'>Googler</div>
             <div className='text-lg text-amber-50'>10k+ employees</div>
           </div>
         </div>
            <Link to="/company">
            <Button  color='yellow' variant='light' >Companies page</Button>
            </Link>
           </div>
           <div className='text-zinc-300 text-justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit repellat nihil, facilis illum dicta atque saepe iusto esse animi, at culpa numquam nesciunt.</div>
         </div>
       </div>
    </div>
  )
}

export default JobDesc
