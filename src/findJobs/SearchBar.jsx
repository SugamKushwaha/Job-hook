import React, { useState } from 'react'
import MultiInput from './MultiInput'
import { dropdownData, searchFields } from '../Data/Data'
import {  Button, Collapse, RangeSlider } from '@mantine/core'
import { useDispatch } from 'react-redux';
import { updateFilter } from '../slices/FilterSlice';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';

const SearchBar = () => {
  const matches = useMediaQuery('(max-width: 510px)');
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
        {matches && <Button className="align" m="sm" radius="xl" onClick={toggle} color="yellow.6" variant="outline" autoContrast>{opened?"Close":"Filters"}</Button>}
      </div>
    <Collapse in={(!opened || !matches)}>
    <div className="px-5 mr-5  max-[1200px]:!flex-wrap  flex gap-5 items-center">

      {dropdownData.map((item, index) => (
        <div key={index} className="w-1/4 max-[900px]:w-1/3 max-[700px]:w-[47%] max-[390px]:w-full my-2">
          <MultiInput {...item} />
        </div>
      ))}

      <div className=" my-5 max-[800px]:w-1/2 w-1/5 ">
      <div className='flex mb-1  justify-between'>
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
