import React from "react";
import { IconBell } from "@tabler/icons-react";
import { IconSettings } from "@tabler/icons-react";
import { IconAnchor } from "@tabler/icons-react";
import { Avatar,Indicator } from '@mantine/core';
import NavLinks from "./NavLinks";
import { useLocation } from "react-router-dom";
import Profile from "./Profile";

const Header = () => {
  const location = useLocation();
  return (
    location.pathname!="/signup"&& location.pathname!="/login" ? <div className="w-full items-center bg-zinc-900 justify-between px-6 text-white flex h-28">

      <div className="flex gap-1 items-center text-amber-500 ">
        <IconAnchor className="h-10 w-10 " stroke={2.5}  />
        <div className="text-3xl font-semibold">JobHook</div>
      </div>

     <NavLinks/>

      <div className="flex gap-5 items-center">
       
        
      <Profile/>
        <div className="bg-zinc-800 p-1.5 rounded-full">
          <IconSettings stroke={1.5}/>
          </div>

           <div className="bg-zinc-800 p-1.5 rounded-full">
            <Indicator offset={6} color="yellow" size={8} processing>
          <IconBell stroke={1.5}/>
          </Indicator>
          </div>

      </div>

    </div>:<></>
  );
};

export default Header;
