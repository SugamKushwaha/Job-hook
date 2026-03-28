import { IconAnchor } from '@tabler/icons-react'
import React from 'react'
import Signup from '../signupLogin/Signup'
import Login from '../signupLogin/Login'
import { useLocation } from 'react-router-dom'

const SignupPage = () => {
  const location = useLocation();
  return (
    <div className=' min-h-[90vh] bg-zinc-900 overflow-hidden'>
      <div className={`w-[100w] h-[100vh] transition-all ease-in-out duration-1000 flex [&>*]:flex-shrink-0 ${location.pathname === '/signup' ? '-translate-x-1/2' : 'translate-x-0'}`}>
        <Login/>

         <div className={`w-1/2 h-full transition-all duration-1000 ease-in-out ${location.pathname=="/signup"?"rounded-r-[200px]":"rounded-l-[200px]"} bg-zinc-800 gap-5 items-center flex justify-center flex-col`}> 

             <div className="flex gap-1 items-center text-amber-500">
        <IconAnchor className="h-16 w-16 " stroke={2.5}  />

        <div className="text-6xl font-semibold">JobHook</div>
      </div>

      <div className='text-2xl text-zinc-300 font-semibold'>Find the made for you</div>
         </div>
         <Signup/>
      </div>
      
    </div>
  )
}

export default SignupPage
