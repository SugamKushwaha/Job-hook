import { IconAnchor, IconBrandFacebook, IconBrandInstagram, IconBrandX } from '@tabler/icons-react'
import React from 'react'
import { footerLinks } from '../Data/Data'
import { useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  return (
    location.pathname!="/signup" && location.pathname!="/login" ?<div className='pt-20 pb-5 flex gap-5 justify-around bg-zinc-900 font-["poppins"] flex-wrap' >
       <div className='w-1/4 flex-col flex gap-4'>
        <div className="flex gap-1 items-center text-amber-500">
        <IconAnchor className="h-7 w-7 " stroke={2.5}  />
        <div className="text-3xl font-semibold">JobHook</div>
      </div>
      <div className='text-sm  text-amber-50'>
        Job portal with user profiles updates, certification, work wexperiecna and admin job posting.
      </div>
      <div className='flex gap-3 text-amber-300 [&>div]:bg-zinc-800 hover:[&>div]:bg-zinc-700 [&>div]:p-2 [&>div]:rounded-full [&>div]:cursor-pointer'>
        <div><IconBrandFacebook/></div>
        <div><IconBrandInstagram/></div>
        <div><IconBrandX/></div>
      </div>
       </div>
       {
        footerLinks.map((item,index)=><div key={index}>
               <div className='text-lg font-semibold mb-4 text-amber-400'>{item.title}</div>
               {
                  item.link.map((links,index)=><div key={index} className='text-mauve-50 text-sm mb-1 hover:text-amber-400 hover:translate-x-2   transition duration-300 ease-in-out cursor-pointer'>{links}</div>)
               }
        </div>)
       }
    </div>:<></>
  )
}

export default Footer
