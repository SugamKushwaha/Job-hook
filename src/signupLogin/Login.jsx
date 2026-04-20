import { Button, LoadingOverlay, PasswordInput, rem, TextInput } from '@mantine/core'
import { IconAt, IconCheck, IconX } from '@tabler/icons-react'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { loginUser } from '../UserServices/UserService'
import { loginValidation } from '../UserServices/FormValidation'
import { notifications } from '@mantine/notifications'
import { useDisclosure } from '@mantine/hooks'
import ResetPassword from './ResetPassword'
import { useDispatch } from 'react-redux'
import { errorNotification, successNotification } from '../UserServices/NotificationService'
import { setUser } from '../slices/UserSlice'

const form={
  email:"",
  password:"",
}

const Login = () => {
 
  const dispatch = useDispatch();
  const[loading,setLoading]=useState(false);
  const [data,setData]=useState(form);
  const[formError,setFormError]=useState(form);
  const[opened,{open,close}]=useDisclosure(false);
  const navigate = useNavigate();

    const handleChange=(event)=>{
      setFormError({...formError,[event.target.name]:""});
     setData({...data,[event.target.name]:event.target.value});
    }
  
    const handleSubmit=()=>{
      setLoading(true);
       let valid = true,newFormError={};
    for(let key in data){
      newFormError[key]=loginValidation(key,data[key]);
      if(newFormError[key])valid=false;
    }
    setFormError(newFormError);
    if(valid){
    loginUser(data)
      .then((res) =>{ console.log(res);
        successNotification("Login Successful","Redirect to home page...");
          setTimeout(()=>{
            setLoading(false);
            dispatch(setUser(res));
            navigate("/")
          },4000);
        })
      .catch((err) => {
        setLoading(false);
        console.log(err);
        errorNotification("Login Failed",err.response.data.errorMessage);
      });
    }

    };

  return (
    <><LoadingOverlay
     visible={loading}
     zIndex={1000}
     overlayProps={{radius:'sm', blur:2}}
     loaderProps={{color:'yellow', type:'bars'}}
    /><div className='w-1/2 px-20 flex flex-col justify-center gap-3'>
      <div className='text-2xl font-semibold'> Creat Account</div>
      

      <TextInput value={data.email} name='email' onChange={handleChange} error={formError.email}  withAsterisk leftSection={<IconAt style={{width:rem(16), height:rem(16)}} />} label="Email" placeholder='Your email' />

      <PasswordInput  value={data.password} name='password' onChange={handleChange} withAsterisk error={formError.password} leftSection={<IconAt style={{width:rem(18),height:rem(18)}} stroke={1.5} />}label="Password" placeholder='Enter Password' />


      <Button color="yellow" onClick={handleSubmit} loading={loading} autoContrast variant='filled'>Login</Button>

      <div className='mx-auto'> Don't have an account? <span to="/signup" className='text-amber-500 hover:underline cursor-pointer' onClick={()=>{navigate("/signup");setFormError(form);setData(form)}}>SignUp</span></div>
      <div onClick={open} className='text-amber-400 hover:underline cursor-pointer text-center'>Forget Password</div>
    </div>
    <ResetPassword opened={opened} close={close} />
    </>
  )
}

export default Login
