import { Button, PasswordInput, rem, TextInput } from '@mantine/core'
import { IconAt } from '@tabler/icons-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { loginUser } from '../UserServices/UserService'

const form={
  email:"",
  password:"",
}

const Login = () => {
  const [data,setData]=useState(form);
  
    const handleChange=(event)=>{
     setData({...data,[event.target.name]:event.target.value});
    }
  
    const handleSubmit=()=>{
       const { confirmPassword, ...payload } = data;
  
    loginUser(payload)
      .then((data) => console.log(res))
      .catch((err) => console.log(err));
    };

  return (
    <div className='w-1/2 px-20 flex flex-col justify-center gap-3'>
      <div className='text-2xl font-semibold'> Creat Account</div>
      

      <TextInput value={data.email} name='email' onChange={handleChange}  withAsterisk leftSection={<IconAt style={{width:rem(16), height:rem(16)}} />} label="Email" placeholder='Your email' />

      <PasswordInput  value={data.password} name='password' onChange={handleChange} withAsterisk leftSection={<IconAt style={{width:rem(18),height:rem(18)}} stroke={1.5} />}label="Password" placeholder='Enter Password' />


      <Button onClick={handleSubmit} autoContrast variant='filled'>SignUp</Button>

      <div className='mx-auto'> Don't have an account? <Link to="/signup" className='text-amber-500 hover:underline'>SignUp</Link></div>
    </div>
  )
}

export default Login
