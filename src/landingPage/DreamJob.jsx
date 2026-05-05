import React from "react";
import logo from "../assets/boy1.png";
import logo1 from "../assets/error.png";

import { TextInput,Avatar} from '@mantine/core';
import { IconSearch } from "@tabler/icons-react";


const DreamJob = () => {
  return (
    <div className="flex flex-wrap max-[850px]:flex-col items-center px-20">
      
      <div className="flex flex-col w-[45%] gap-8">
        <div className="text-7xl font-bold landing-tight text-amber-50 [&>span]:text-amber-500">
          Find Your <span>Dream</span> <span>Job</span> With Us
        </div>
        <div className="text-amber-50 ">
          Good life begins with a good company. Start exploring thousands of jobs in one place.
        </div>

        <div className="flex gap-3 mt-5">
             <TextInput className="bg-zinc-800 rounded-lg p-1 px-2 text-amber-50" variant="unstyled" label="Job Title"placeholder="Software engineer" />
     <TextInput
     className="bg-zinc-800 rounded-lg p-1 px-2 text-amber-50"variant="unstyled"label="job Type"placeholder="Fulltime" />
                  <div className="flex items-center justify-center h-full w-20 bg-amber-500 rounded-lg text-amber-100 p-2 hover:bg-amber-600"> <IconSearch className="h-[85%] w-[85%]" /></div>

        </div>
      </div>

     <div className="w-[55%] flex  items-center justify-center">
         <div className="w-[60rem] relative">
        <img src={logo} alt="Boy"  />
           <div className="absolute right-25  w-fit top-[47%] border-amber-500 border rounded-lg p-2 backdrop-blur-md">
             <div className="text-center text-sm text-amber-100">10k+ got job </div>
          <Avatar.Group>
             <Avatar src="image.png" />
             <Avatar src="image.png" />
             <Avatar src="image.png" />
             <Avatar>+5</Avatar>
         </Avatar.Group>
           </div>
           <div className="absolute left-21  w-fit top-[25%] border-amber-500 border rounded-lg p-2 backdrop-blur-md flex flex-col">
              <div className="flex gap-2 items-center font-sans">
                  <div className="w-13 h-14 p-1 ">
                    <img src= "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" alt="" /></div>
                  <div className="text-sm text-amber-100">
                    <div>Software Engineer</div>
                    <div className="text-amber-100 text-xs">New York</div>
                  </div>
              </div>
              <div className="flex gap-2 justify-around text-amber-100 text-xs">
                  <span>1 day age</span>
                  <span>120 Applicants</span>
              </div>
           </div>

      </div>
     </div>

    </div>
  );
};

export default DreamJob;
