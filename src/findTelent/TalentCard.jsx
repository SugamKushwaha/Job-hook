import React, { useEffect, useRef, useState } from 'react'
import logo1 from "../FindIcons/micro.jpg";
import { IconCalendar, IconHeart, IconMapPin, IconClock } from '@tabler/icons-react';
import { Button, Divider, Modal, Text, ActionIcon } from '@mantine/core';
import { DatePickerInput, TimeInput } from '@mantine/dates';
import { Link, useParams } from 'react-router-dom';
import { useDisclosure } from '@mantine/hooks';
import '@mantine/dates/styles.css';
import { getProfile } from '../UserServices/ProfileService';
import { formatInterviewTime, openBase64PDF } from '../UserServices/Utilities';
import { errorNotification, successNotification } from '../UserServices/NotificationService';

const TalentCard = (props) => {
  const [opened, { open, close }] = useDisclosure(false);
  const [date, setDate] = useState(null);
  const [time, setTime]=useState(null);
  const ref = useRef(null);
  const {id}=useParams();
  const [app,{open:openApp, close:closeApp}]= useDisclosure(false);

  const [profile, setProfile]=useState({});

  useEffect(()=>{
    if(props.applicantId)getProfile(props.applicantId).then((res)=>{
      setProfile(res);
    }).catch((err)=>{
      console.log(err);
    })
    else{
       setProfile(props);
    }
  },[props])

  const pickerControl = (
    <ActionIcon variant="subtle" onClick={() => ref.current?.showPicker()}>
      <IconClock size={16} />
    </ActionIcon>
  );

  const handleOffer=(status)=>{
     let interview = {id, applicationId:props.applicantId, applicationStatus:status};
     if(status=="INTERVIEWING"){
      const [hours, minutes]=time.split(":").map(Number);
      const newDate = new Date(date);
  newDate.setHours(hours, minutes);
  interview={...interview,interviewTime:date};
     }
      // date?.setHours(hours,minutes);
     
      changeAppStatus(interview).then((res)=>{
        if(status=="INTERVIEWING")successNotification("Inter Shedule", "Interview Shedulde")
          else if(status=="OFFERED")successNotification("OFFERED","Offer had been Rejected")
        window.location.reload();
      }).catch((err)=>{
        console.log(err);
        errorNotification("Error", err.response.data.errorMessage);
      })
  }

  return (
    <div className='bg-zinc-800 p-4 w-87 flex flex-col gap-3 rounded-xl hover:shadow-[0_0_5px_1px_yellow] !shadow-amber-400'>
      
      <div className='flex justify-between'>
        <div className='flex gap-2 items-center'>
          <div className='p-2 bg-zinc-800 rounded-full'>
            <img className='h-7' src={logo1} alt="" />
          </div>
          <div> 
            <div className='font-semibold text-lg'>{profile.name}</div>
            <div className='text-sm text-amber-50'>
              {profile?.jobTitle} &#x2022; {profile.company}
            </div>
          </div>
        </div>
        <IconHeart className='text-zinc-400 cursor-pointer' stroke={1.5} />
      </div>

      <div className='flex gap-2'>
        {profile?.skills?.map((skill, index) => index<4 &&
          <div key={index} className='p-2 py-1 bg-zinc-700 text-amber-300 rounded-lg text-xs'>
            {skill}
          </div>
        )}
      </div>

      <Text className='!text-xs text-justify !text-amber-50' lineClamp={3}>
        {profile.about}
      </Text>

      {
        props.invited?<div className='flex gap-5'>
          <IconCalendar stroke={1.5}/>Interview: {formatInterviewTime(props.interviewTime)}
        </div>:<div className='flex justify-between'>
        <div className='font-semibold text-zinc-100'>
         Exp: {profile?.totalExp?props.totalExp:1} Year
        </div>
        <div className='flex gap-1 text-xs items-center text-zinc-500'>
          <IconMapPin className='h-5 w-5' stroke={1.5} /> {profile?.location} 
        </div>
      </div>
      }
      

      <Divider/>

      <div className='flex [&>*]:w-1/2 [&>*]:p-1'>
      {
       !props.invited &&<>
          <Link to={`/talent-profile/${profile?.id}`}>
          <Button color='yellow' variant='outline' fullWidth>Profile</Button>
        </Link>

      <div>
          {props.posted ?
          <Button 
            onClick={open} 
            rightSection={<IconCalendar className='h-5 w-5' />} 
            color='yellow' 
            variant='light' 
            fullWidth
          >
            Schedule
          </Button>:<Button color='yellow' variant='light' fullWidth>
            Message
          </Button>
        }
      </div>
        </>
      }{
         props.invited && <>
          <div><Button onClick={()=>handleOffer("OFFERED")} color='yellow' variant='outline' fullWidth>
            Accept
          </Button></div>
          <div><Button onClick={()=>handleOffer("REJECTED")} color='yellow' variant='light' fullWidth>
            Reject
          </Button></div>
         </>
      }
       
      </div>

     {(props.invited || props.posted)&& <Button color='yellow.7' variant="filled" onClick={openApp} fullWidth autoContrast >View Application</Button>}

      <Modal opened={opened} onClose={close} title="Schedule Interview" centered>
        <div className='flex flex-col gap-4'>
          <DatePickerInput
            label="Pick date"
            placeholder="Enter date"
            value={date}
            onChange={setDate}
            minDate={new Date()}
          />

          <TimeInput
            label="Pick time"
            value={time}
            ref={ref}
            rightSection={pickerControl}
            onChange={(event) => setTime(event.currentTarget.value)}
            onClick={()=>ref.current?.showPicker()}
          />

          <Button onClick={()=>handleOffer("INTERVIEWING")} color='yellow' variant='light' fullWidth>
            Schedule
          </Button>
        </div>
      </Modal>

      <Modal opened={app} onClose={closeApp} title="Application" centered>
        <div className='flex flex-col gap-4'>
          <div>
            Email: &emsp; <a className='text-amber-400 hover:underline cursor-pointer text-center' href={`mailto:${props.email}`}>{props.email}</a>
          </div>
           <div>
            Website: &emsp; <a target='_blank' className='text-amber-400 hover:underline cursor-pointer text-center' href={props.website}>{props.website}</a>
          </div>
           <div>
            Resume: &emsp; <a className='text-amber-400 hover:underline cursor-pointer text-center' onClick={()=>openBase64PDF(props.resume)}>{props.name}</a>
          </div>
          <div>
            Cover Letter: &emsp;<div>{props.coverLetter}</div>
          </div>
        </div>
      </Modal>

    </div>
  )
}

export default TalentCard