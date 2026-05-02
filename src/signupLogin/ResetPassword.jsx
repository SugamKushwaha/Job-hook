import { Button, Modal, PasswordInput, PinInput, TextInput } from '@mantine/core'
import { IconAt } from '@tabler/icons-react';
import React, { useState } from 'react'
import { changePass, sendOtp, verifyOtp } from '../UserServices/UserService';
import { signupValidation } from '../UserServices/FormValidation';
import { errorNotification, successNotification } from '../UserServices/NotificationService';
import { useInterval } from '@mantine/hooks';

const ResetPassword = (props) => {

  const [email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  const[passErr,setPassErr]=useState("");
  const[otpSent,setOtpSent]=useState(false);
  const [otpSending,setOtpSending]=useState(false);
  const [verified,setVerified]=useState(false);
  const [resendLoader,setResendLoader]=useState(false);
  const [seconds,setSeconds]=useState(60);
  const interval = useInterval(()=>{
    if(seconds === 0){
      setResendLoader(false);
      setSeconds(60);
      interval.stop();
    }else setSeconds((s)=>s-1)
  },1000);

  const handleSendOtp=()=>{
    setOtpSending(true);
    sendOtp(email).then((res)=>{
      console.log(res);
      successNotification("OTP Sent Succesfully","Enter OTP to reset");
      setOtpSent(true);
      setOtpSending(false);
      setResendLoader(true);
      interval.start();
    }).catch((err)=>{
      console.log(err);
      setOtpSending(false);
      errorNotification("OTP Sending Failed",err.response.data.errorMessage);
    })
  }

  const handleVerifyOtp=(otp)=>{
    verifyOtp(email,otp.trim()).then((res)=>{
      console.log(res);
      successNotification("OTP Verified","Enter new password")
      setVerified(true);
    }).catch((err)=>{
        console.log(err);
        errorNotification("OTP Verification Failed",err.response?.data?.errorMessage);
    })
  }

  const resendOtp=()=>{
       if(resendLoader)return;
         handleSendOtp();
  }

  const changeEmail=()=>{
        setOtpSent(false);
        setResendLoader(false);
        setSeconds(60);
        setVerified(false);
        interval.stop();
  }
  const handleResetPassword =()=>{
     changePass(email,password).then((res)=>{
       console.log(res);
       successNotification("Password Changed","Login With new password");
       props.close();
     }).catch((err)=>{
      console.log(err);
      errorNotification("Password Reset Failed",err.response.data.errorMessage);
     })
  }

  return (
    <div>
      <Modal opened={props.opened} onClose={props.close} title="Reset Password" >
        <div className='flex gap-5 flex-col '> 
          <TextInput className="" value={email} name='email' size='md' onChange={(e)=>setEmail(e.target.value)} withAsterisk leftSection={<IconAt size={16} />} label="Email" placeholder='Your email' rightSection=
          {<Button loading={otpSending && !otpSent} size='xs' className='mr-1' onClick={handleSendOtp} autoContrast disabled={email==="" || otpSent} color="yellow.6" variant="filled" >Reset</Button>}
          rightSectionWidth="xl"
           />

            {otpSent &&
             <PinInput onComplete={handleVerifyOtp} length={6} size="md" gap="lg"  className='mx-auto' />
            }
            {otpSent && !verified &&
             <div className="flex gap-2">
              <Button fullWidth loading={otpSending} color="yellow" onClick={resendOtp} autoContrast variant="light" >{resendLoader?seconds:"Resend"}</Button>
             
             <Button fullWidth color="yellow"  className='mr-1' onClick={changeEmail} variant="filled" >Change Email</Button>
             </div>
            }
            { verified && 
            <PasswordInput  value={password} name='password' onChange={(e)=>{setPassword(e.target.value);setPassErr(signupValidation("password",e.target.value))}} withAsterisk error={passErr} leftSection={<IconAt size={16} stroke={1.5} />}label="Password" placeholder='Enter Password' />
            }
            { verified && 
            <Button color="yellow" autoContrast onClick={handleResetPassword} variant="filled" >Change Password</Button>
            }
        </div>
      </Modal>
    </div>
  )
}

export default ResetPassword
