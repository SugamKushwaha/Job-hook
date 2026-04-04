import { Button, PasswordInput, rem, TextInput } from '@mantine/core'
import { IconAt, IconCheck, IconX } from '@tabler/icons-react'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { loginUser } from '../UserServices/UserService'
import { loginValidation } from '../UserServices/FormValidation'
import { notifications } from '@mantine/notifications'

const form={
  email:"",
  password:"",
}

const Login = () => {
  const [data,setData]=useState(form);
  const[formError,setFormError]=useState(form);
  const navigate = useNavigate();

    const handleChange=(event)=>{
      setFormError({...formError,[event.target.name]:""});
     setData({...data,[event.target.name]:event.target.value});
    }
  
    const handleSubmit=()=>{
       let valid = true,newFormError={};
    for(let key in data){
      newFormError[key]=loginValidation(key,data[key]);
      if(newFormError[key])valid=false;
    }
    setFormError(newFormError);
    if(valid){
    loginUser(data)
      .then((res) =>{ console.log(res);
       notifications.show({
            title:"Login Successfull",
            message:"Redirecting to Home page...",
            withCloseButton:true,
            icon:<IconCheck style={{width:"90%",height:"90%"}} />,
            color:"teal",
            withBorder:true,
            className:"!border-green-500"
          })
          setTimeout(()=>{
            navigate("/")
          },4000);
        })
      .catch((err) => {
        console.log(err);
         notifications.show({
      title:"Login Failed",
      message:err.response.data.errorMessage,
      withCloseButton:true,
      icon:<IconX style={{width:"90%",height:"90%"}} />,
      color:"red",
      withBorder:true,
      className:"!border-red-500"
    })
      });
    }

    };

  return (
    <div className='w-1/2 px-20 flex flex-col justify-center gap-3'>
      <div className='text-2xl font-semibold'> Creat Account</div>
      

      <TextInput value={data.email} name='email' onChange={handleChange} error={formError.email}  withAsterisk leftSection={<IconAt style={{width:rem(16), height:rem(16)}} />} label="Email" placeholder='Your email' />

      <PasswordInput  value={data.password} name='password' onChange={handleChange} withAsterisk error={formError.password} leftSection={<IconAt style={{width:rem(18),height:rem(18)}} stroke={1.5} />}label="Password" placeholder='Enter Password' />


      <Button onClick={handleSubmit} autoContrast variant='filled'>Login</Button>

      <div className='mx-auto'> Don't have an account? <span to="/signup" className='text-amber-500 hover:underline cursor-pointer' onClick={()=>{navigate("/signup");setFormError(form);setData(form)}}>SignUp</span></div>
    </div>
  )
}

export default Login
