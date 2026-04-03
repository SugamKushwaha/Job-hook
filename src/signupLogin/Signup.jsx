import { Anchor, Button, Checkbox, Group, PasswordInput, Radio, rem, TextInput } from '@mantine/core'
import { IconAt } from '@tabler/icons-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { registerUser } from '../UserServices/UserService'
import signupValidation from '../UserServices/FormValidation'

const form={
  name:"",
  email:"",
  password:"",
  confirmPassword:"",
  accountType:"APPLICANT",
}

const Signup = () => {

  const [data,setData]=useState(form);

  const[formError,setFormError]=useState(form);

const handleChange = (event) => {
  if (typeof event === "string") {
    setData({ ...data, accountType: event });
    return;
  }

  let name = event.target.name;
  let value = event.target.value;

  const newData = { ...data, [name]: value };
  setData(newData);

  let errors = { ...formError };
  // field validation
  errors[name] = signupValidation(name, value);
  // password match validation
  if (name === "password" || name === "confirmPassword") {
    if (newData.confirmPassword && newData.password !== newData.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    } else {
      errors.confirmPassword = "";
    }
  }

  setFormError(errors);
};

  const handleSubmit=()=>{
    let valid = true,newFormError={};
    for(let key in data){
      if(key==="accountType")continue;
      if(key!=="confirmPassword")newFormError[key]=signupValidation(key,data[key]);
      else if(data[key]!==data["password"])newFormError[key]="Password do not match."
      if(newFormError[key])valid=false;
    }
    setFormError(newFormError);
    if (valid===true){
  registerUser(data).then((res) =>{ 
      console.log(res)
       
    })
    .catch((err) => console.log(err));
    }
  };

  return (
    <div className='w-1/2 px-20 flex flex-col justify-center gap-3'>
      <div className='text-2xl font-semibold'> Creat Account</div>
      <TextInput value={data.name} name='name' error={formError.name} onChange={handleChange} withAsterisk label="Full Name" placeholder='Your Name' />

      <TextInput value={data.email} error={formError.email} name='email' onChange={handleChange} withAsterisk leftSection={<IconAt style={{width:rem(16), height:rem(16)}} />} label="Email" placeholder='Your email' />

      <PasswordInput value={data.password} error={formError.password} name='password' onChange={handleChange}  withAsterisk leftSection={<IconAt style={{width:rem(18),height:rem(18)}} stroke={1.5} />}label="Password" placeholder='Enter Password' />

      <PasswordInput value={data.confirmPassword} error={formError.confirmPassword} name='confirmPassword' onChange={handleChange} withAsterisk leftSection={<IconAt style={{width:rem(18),height:rem(18)}} stroke={1.5} />}label="Confirm Password" placeholder='Confirm Password' />

       <Radio.Group value={data.accountType}   onChange={handleChange} label="You are" withAsterisk>
      <Group mt="xs">
        <Radio className='py-4 hover:bg-zinc-700 has-[:checked]:bg-amber-400 px-6 border has-[:checked]:border-amber-500 border-zinc-700 rounded-lg' autoContrast value="APPLICANT" label="Applicant" />
        <Radio className='py-4 hover:bg-zinc-700 has-[:checked]:bg-amber-400 px-6 border has-[:checked]:border-amber-500 border-zinc-700 rounded-lg' autoContrast value="EMPLOYER" label="Employer" />
      </Group>
       </Radio.Group>
       
      <Checkbox autoContrast label={<>I accept{' '}<Anchor>terms & conditions</Anchor></>} />

      <Button onClick={handleSubmit} autoContrast variant='filled'>SignUp</Button>

      <div className='mx-auto'>Have an account? <Link to="/login" className='text-amber-500 hover:underline'>Login</Link></div>
    </div>
  )
}

export default Signup
