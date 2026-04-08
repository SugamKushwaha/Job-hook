import { Button, TextInput } from '@mantine/core'
import React, { useState } from 'react'
import SelectInput from './SelectInput'
import { certifications } from '../data/profile'
import { MonthPickerInput } from '@mantine/dates'
import { isNotEmpty, useForm } from '@mantine/form'

const CertiInput = (props) => {
    const select = certifications;

   const form =useForm({
      mode:"controlled",
      validateInputOnChange:true,
      initialValues:{
        name:'',
        issuer:'',
        issueDate:new Date(),
         certificationId:''
          },
          validate:{
            name:isNotEmpty("Name is required"),
            issuer:isNotEmpty("Issuer is required"),
            issueDate:isNotEmpty("Issue Date is required"),
            certificationId:isNotEmpty("Certification Id is required")
          }
  
    })

    const handleSave=()=>{
             
    }

  return (
    <div className='flex flex-col gap-3'>
      <div className='font-semibold text-lg'>Add Certifications</div>
      <div className='flex gap-10 [&>*]:w-1/2'>
        <TextInput {...form.getInputProps("name")} label="title" withAsterisk placeholder='Enter title' />
         <SelectInput name="issuer" form={form} {...select[1]} />
      </div>
       <div className='flex gap-10 [&>*]:w-1/2'>
       <MonthPickerInput  
                 label="End Date"
                 placeholder="Pick month"
                 {...form.getInputProps("issueDate")}
                 
                maxDate={new Date()}
               />
        <TextInput withAsterisk label="Certificate Id" {...form.getInputProps("certificationId")}placeholder='Enter title' />
         
      </div>
      <div className='flex gap-5'>
        <Button onClick={handleSave} color='yellow' variant='outline'>Save</Button>
         <Button onClick={()=>props.setEdit(false)} color='red.8' variant='light'>Cancel</Button>
      </div>
    </div>
  )
}

export default CertiInput
