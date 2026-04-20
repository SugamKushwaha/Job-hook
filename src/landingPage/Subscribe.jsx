import { Button, TextInput } from '@mantine/core'
import React from 'react'

const Subscribe = () => {
  return (
    <div className='justify-around mt-20  flex items-center bg-zinc-800 mx-20 py-2 rounded-xl'>
         <div className='text-4xl w-2/5 text-center font-semibold mb-3 text-amber-50'>Never wants to miss any <span className='text-amber-500'>Job News?</span> </div>
         <div className='flex gap-4 rounded-xl bg-zinc-900 px-3 py-2 items-center'>
             <TextInput
      className='text-amber-50 font-semibold'
      variant="unstyled"
      placeholder="Your@gmail.com"
      size='xl'
    />
    <Button className='!rounded-lg' size='lg' color='yellow' variant="filled">Subscribe</Button>
         </div>
    </div>
  )
}

export default Subscribe
