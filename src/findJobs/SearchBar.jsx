import React, { useState } from 'react'
import MultiInput from './MultiInput'
import { dropdownData, searchFields } from '../Data/Data'
import {  Button, Collapse, RangeSlider } from '@mantine/core'
import { useDispatch } from 'react-redux';
import { updateFilter } from '../slices/FilterSlice';
import { useDisclosure } from '@mantine/hooks';

const SearchBar = () => {
  const[opened, {toggle}]=useDisclosure(false);
   const [value, setValue] = useState([0, 60]);
   const dispatch = useDispatch();
   const [name, setName]=useState('');


   const handleChange=(value)=>{
    dispatch(updateFilter({Salary:value}));
           
      }
  

  return (
    <div>
      <div className="flex justify-end mr-5">
        <Button className="align" m="sm" radius="xl" onClick={toggle} color="yellow.6" variant="outline" autoContrast>{opened?"Close":"Filters"}</Button>
      </div>
    <Collapse in={opened}>
    <div className="px-5 flex gap-4 items-center">

      {dropdownData.map((item, index) => (
        <div key={index} className=" my-3">
          <MultiInput {...item} />
        </div>
      ))}

      <div className=" my-5  mr-3 ">
      <div className='flex mb-1 justify-between'>
        <div>Sallery</div>
        <div>&#8377;{value[0]} LPA - &#8377;{value[1]} LPA</div>
      </div>
        <RangeSlider color="yellow.6"  size="xs" value={value} labelTransitionProps={{transition:'skew-down',duration:150,
          timingFunction:'linear'
        }} onChange={setValue} onChangeEnd={handleChange} />
      </div>

    </div>
    </Collapse>
    </div>
  );
};

export default SearchBar;
