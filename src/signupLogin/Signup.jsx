import { Anchor, Button, Checkbox, PasswordInput, rem, TextInput } from '@mantine/core'
import { IconAt } from '@tabler/icons-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div className='w-1/2 px-20 flex flex-col justify-center gap-3'>
      <div className='text-2xl font-semibold'> Creat Account</div>
      <TextInput withAsterisk label="Full Name" placeholder='Your Name' />

      <TextInput withAsterisk leftSection={<IconAt style={{width:rem(16), height:rem(16)}} />} label="Email" placeholder='Your email' />

      <PasswordInput withAsterisk leftSection={<IconAt style={{width:rem(18),height:rem(18)}} stroke={1.5} />}label="Password" placeholder='Enter Password' />

      <PasswordInput withAsterisk leftSection={<IconAt style={{width:rem(18),height:rem(18)}} stroke={1.5} />}label="Confirm Password" placeholder='Confirm Password' />

      <Checkbox autoContrast label={<>I accept{' '}<Anchor>terms & conditions</Anchor></>} />

      <Button autoContrast variant='filled'>SignUp</Button>

      <div className='mx-auto'>Have an account? <Link to="/login" className='text-amber-500 hover:underline'>Login</Link></div>
    </div>
  )
}

export default Signup
