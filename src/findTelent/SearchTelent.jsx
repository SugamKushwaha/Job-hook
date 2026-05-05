import React, { useState } from 'react'
import { dropdownData, searchFields } from '../Data/Data'
import {  Button, Collapse, Input, RangeSlider } from '@mantine/core'
import MultiInput from '../findJobs/MultiInput';
import { IconUserCircle } from '@tabler/icons-react';
import { useDispatch } from 'react-redux';
import { updateFilter } from '../slices/FilterSlice';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';

const SearchTelent = () => {
   const [value, setValue] = useState([0, 50]);
   const matches = useMediaQuery('(max-width: 510px)');
   const dispatch= useDispatch();
   const[opened, {toggle}]=useDisclosure(false);
   const [name,setName]=useState('');
   const handleChange=(name,event)=>{
         if(name=="exp")dispatch(updateFilter({exp:event}));
         else{
          dispatch(updateFilter({name:event.target.value}));
          setName(event.target.value);
         }
   }
  

  return (<div>
    <div className="flex justify-end mr-5">
            {matches && <Button className="align" m="sm" radius="xl" onClick={toggle} color="yellow.6" variant="outline" autoContrast>{opened?"Close":"Filters"}</Button>}
          </div>
          <Collapse in={(!matches || opened)}>

    <div className="px-5 py-8 !text-amber-50 max-[1200px]:!flex-wrap flex gap-3 items-center">

      <div className='flex items-center'>
        <div className='text-amber-400 bg-zinc-800 rounded-full mr-2'><IconUserCircle size={30} /></div>
      </div>

       <Input defaultValue={name} onChange={(e)=>handleChange("name",e)} className="[&_input]:!placeholder-zinc-500" variant='unstyled' placeholder="Talent Name" />

      {searchFields.map((item, index) => (
        <div key={index} className="w-1/4 max-[900px]:w-1/3 max-[700px]:w-[47%] my-2  max-[450px]:w-full">
          <MultiInput title={item.title} icon={item.icon} options={item.options} />
        </div>
      ))}

      <div className="w-1/5 my-5 max-[800px]:w-1/2 ">
      <div className='flex justify-between'>
        <div>Experiences</div>
        <div>{value[0]} - {value[1]}</div>
      </div>
        <RangeSlider color='yellow'  size="xs" value={value} labelTransitionProps={{transition:'skew-down',duration:150,
          timingFunction:'linear'
        }} onChange={setValue} onChangeEnd={(e)=>handleChange("exp",e)} minRange={1} max={50} min={1} />
      </div>

    </div>
    </Collapse>
    </div>
  );
};

export default SearchTelent;
