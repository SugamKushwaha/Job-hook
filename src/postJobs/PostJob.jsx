import React, { useEffect, useState } from 'react'
import SelectInput from './SelectInput'
import { content, fields } from '../data/Data'
import { Button, NumberInput, TagsInput, Textarea} from '@mantine/core';
import RichTextEditer from './RichTextEditer';
import { IconArrowLeft } from '@tabler/icons-react';
import { isNotEmpty, useForm } from '@mantine/form';
import { errorNotification, successNotification } from '../UserServices/NotificationService';
import { getJob, postJobs } from '../UserServices/JobService';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PostJob = () => {
    const user = useSelector((state)=>state.user);
    const select=fields;
    const navigate = useNavigate();
    const {id}= useParams();
    const [editorData, setEditorData]=useState(content);
    

    useEffect(()=>{
        window.scrollTo(0,0);
        if (!id) return;
        if(id!=="0"){
            getJob(id).then((res)=>{
               form.setValues(res);
               setEditorData(res.description);
            }).catch((err)=>{
                console.log(err);
            })
        }
        else form.reset();
    },[id])

    const form =useForm({
           mode:"controlled",
           validateInputOnChange:true,
           initialValues:{
            jobTitle:'',
            company:'',
            experience:'',
            jobType:'',
            location:'',
            packageOffered:'',
            skillsRequired:[],
            about:'',
            description:content
           },
           validate:{
            jobTitle:isNotEmpty('This fied is required'),
            company:isNotEmpty('This fied is required'),
            experience:isNotEmpty('This fied is required'),
            jobType:isNotEmpty('This fied is required'),
            location:isNotEmpty('This fied is required'),
            packageOffered:isNotEmpty('This fied is required'),
            skillsRequired:isNotEmpty('This fied is required'), 
            about:isNotEmpty('This fied is required'),
            description:isNotEmpty('This fied is required'),
           }
    });

    const handlePost=()=>{
        // form.validate();
        // if(!form.isValid())return;
        const result = form.validate();
        if (result.hasErrors) return;
        postJobs({...form.getValues(),id,postedBy:user.id,jobStatus:"ACTIVE"}).then((res)=>{
             successNotification("Success", "Job Posted Successfully");
             navigate(`/posted-job/${res.id}`);
        }).catch((err)=>{
            errorNotification("Error",err.response.data.errorMessage);
        })
    }
     const handleDraft=()=>{
        postJobs({...form.getValues(),id,postedBy:user.id,jobStatus:"DRAFT"}).then((res)=>{
             successNotification("Success", "Job Posted Successfully");
             navigate(`/posted-job/${res.id}`);
        }).catch((err)=>{
            errorNotification("Error",err.response.data.errorMessage);
        })
    }

  return (
    <div className='w-4/5 mx-auto'>
        <div className='text-2xl font-semibold mb-5'>Post a Job</div>
        <div className='flex flex-col gap-8'>
            <div className='flex gap-10 [&>*]:w-1/2'>
                <SelectInput form={form} name="jobTitle" {...select[0]}/>
                <SelectInput form={form} name="company" {...select[1]} />
            </div>
            <div className='flex gap-10 [&>*]:w-1/2'>
                <SelectInput form={form} name="experience" {...select[2]}/>
                <SelectInput form={form} name="jobType" {...select[3]} />
            </div>
            <div className='flex gap-10 [&>*]:w-1/2'>
                <SelectInput form={form} name="location" {...select[4]}/>
                <NumberInput {...form.getInputProps('packageOffered')} label="Selary" min={1}  withAsterisk placeholder='Enter Selary' hideControls />
            </div>
            <TagsInput {...form.getInputProps('skillsRequired')} withAsterisk label="Skills" placeholder='Enter skill' splitChars={[',',' ','|']}  acceptValueOnBlur clearable />

            <Textarea {...form.getInputProps('about')} className='my-3' withAsterisk label="About Job" autosize minRows={2} placeholder='Enter about job...' />
        </div>
        <div className='[&_button[data-active="true"]]:!text-amber-400 [&_button[data-active="true"]]:!bg-amber-50'>
            <div className='text-sm font-medium'>Job Description <span className='text-red-500'>*</span> </div>
            <RichTextEditer data={editorData} form={form} />
        </div>
        <div className='flex gap-4'>
              <Button  color='yellow' variant='light' onClick={handlePost} >Publish job</Button>
              <Button color='yellow' onClick={handleDraft} variant='light' >Save as draft</Button>
        </div>
    </div> 
  )
}

export default PostJob
