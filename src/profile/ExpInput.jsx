import React, { useEffect, useState } from 'react'
import SelectInput from './SelectInput'
import fields from '../data/profile'
import { Button, Checkbox, Textarea } from '@mantine/core'
import { MonthPickerInput } from '@mantine/dates'
import { useDispatch, useSelector } from 'react-redux'
import { isNotEmpty, useForm } from '@mantine/form'
import { changeProfile } from '../slices/ProfileSlice'
import { successNotification } from '../UserServices/NotificationService'

const ExpInput = (props) => {
  const select = fields;
  const profile = useSelector((state)=>state.profile);
  const dispatch = useDispatch();
  

  useEffect(() => {
  if (!props.add) {
    form.setValues({
      title: props.title,
      company: props.company,
      location: props.location,
      description: props.description,
      startDate:new Date(props.startDate),
      endDate:new Date(props.endDate),
      working: props.working
    });
  }
}, []);

  const form =useForm({
    mode:"controlled",
    validateInputOnChange:true,
    initialValues:{
      title:'',
      company:'',
      location:'',
      description:'',
      startDate:new Date(),
      endDate:new Date(),
      working:false
        },
        validate:{
          title:isNotEmpty("Title is required"),
          company:isNotEmpty("Company is required"),
          location:isNotEmpty("Location is required"),
          description:isNotEmpty("Description is required")
        }

  })

//  const handleSave=()=>{
//    const validation = form.validate();
// if (validation.hasErrors) return;
//    let exp=[...profile.experience];
//    if(props.add){
//     exp.push(form.getValues());
//     exp[exp.length-1].startDate=exp[exp.length-1].startDate.toISOString();
//     exp[exp.length-1].endDate=exp[exp.length-1].endDate.toISOString();
//    }
//    else{
//      exp[props.index]=form.getValues();
//      exp[props.index].startDate=exp[props.index].startDate.toISOString();
//      exp[props.index].endDate=exp[props.index].endDate.toISOString();
//    }
//    let updatedProfile={...profile, experience:exp};
//    props.setEdit(false);
//    dispatch(changeProfile(updatedProfile));
//    successNotification("Success",`Experience ${props.add?"Added":"Updated"} successfully`);
//  }


//Working handleSaving method

const handleSave = () => {
  const validation = form.validate();
  if (validation.hasErrors) return;
  let exp = [...(profile.experience || [])];
  if (props.add) {
    const newExp = form.getValues();
    newExp.startDate = newExp.startDate.toISOString();
    newExp.endDate = newExp.endDate?.toISOString();
    exp.push(newExp);
  } else {
    const updatedExp = form.getValues();
    updatedExp.startDate = updatedExp.startDate.toISOString();
    updatedExp.endDate = updatedExp.endDate?.toISOString();
    exp[props.index] = updatedExp;
  }
  const updatedProfile = { ...profile, experience: exp };
  dispatch(changeProfile(updatedProfile));
  props.setEdit(false);

  successNotification("Success", `Experience ${props.add ? "Added" : "Updated"} successfully`);
};
 
  return (
    <div className='flex flex-col gap-3'>
      <div className='text-lg font-semibold'>{props.add?"Add":"Edit"} Experience</div>

      <div className='flex gap-10 [&>*]:w-1/2'>
        <SelectInput form={form} name="title" {...select[0]} />
        <SelectInput form={form} name="company" {...select[1]} />
      </div>

      <SelectInput form={form} name="location" {...select[2]} />

      <Textarea
      {...form.getInputProps('description')}
        autosize
        label="Summary"
        placeholder='Enter Summary...'
        withAsterisk
        
      />

      <div className='flex gap-10 [&>*]:w-1/2'>
        
        {/* Start Date */}
        <MonthPickerInput 
        {...form.getInputProps('startDate')}
          label="Start Date"
          placeholder="Pick month"
          withAsterisk
          maxDate={form.getValues().endDate||undefined}
        />

        {/* End Date */}
        <MonthPickerInput  disabled={form.getValues().working}
        {...form.getInputProps('endDate')}
        withAsterisk
          label="End Date"
          placeholder="Pick month"
        minDate={form.getValues().startDate||undefined}
         maxDate={new Date()}
        />
      </div>
       <Checkbox checked={form.getValues().working} onChange={(event)=>form.setFieldValue("working",event.currentTarget.checked)} autoContrast label="Currently working here" />

        <div className='flex gap-5'>
           <Button onClick={handleSave} color="green.5" variant='outline'>Save</Button>
          <Button onClick={()=>props.setEdit(false)} color='red.8' variant='light'>Cancel</Button>
        </div>

    </div>
  )
}

export default ExpInput