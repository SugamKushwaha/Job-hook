import React, { useState } from 'react'
import { dropdownData, searchFields } from '../Data/Data'
import {  Input, RangeSlider } from '@mantine/core'
import MultiInput from '../findJobs/MultiInput';
import { IconUserCircle } from '@tabler/icons-react';
import { useDispatch } from 'react-redux';
import { updateFilter } from '../slices/FilterSlice';

const SearchTelent = () => {
   const [value, setValue] = useState([0, 50]);
   const dispatch= useDispatch();
   const [name,setName]=useState('');
   const handleChange=(name,event)=>{
         if(name=="exp")dispatch(updateFilter({exp:event}));
         else{
          dispatch(updateFilter({name:event.target.value}));
          setName(event.target.value);
         }
   }
  

  return (
    <div className="px-5 py-8 !text-amber-50 flex gap-4 items-center">

      <div className='flex items-center'>
        <div className='text-amber-400 bg-zinc-800 rounded-full p-1 mr-2'><IconUserCircle size={30} /></div>
      </div>

       <Input defaultValue={name} onChange={(e)=>handleChange("name",e)} className="[&_input]:!placeholder-zinc-500" variant='unstyled' placeholder="Talent Name" />

      {searchFields.map((item, index) => (
        <div key={index} className="w-1/5">
          <MultiInput title={item.title} icon={item.icon} options={item.options} />
        </div>
      ))}

      <div className="w-1/5 ">
      <div className='flex justify-between'>
        <div>Experiences</div>
        <div>{value[0]} - {value[1]}</div>
      </div>
        <RangeSlider color='yellow'  size="xs" value={value} labelTransitionProps={{transition:'skew-down',duration:150,
          timingFunction:'linear'
        }} onChange={setValue} onChangeEnd={(e)=>handleChange("exp",e)} minRange={1} max={50} min={1} />
      </div>

    </div>
  );
};

export default SearchTelent;
