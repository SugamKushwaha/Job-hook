import React, { useEffect } from "react";
import { IconBell, IconX } from "@tabler/icons-react";
import { IconSettings } from "@tabler/icons-react";
import { IconAnchor } from "@tabler/icons-react";
import { Avatar,Burger,Button,Drawer,Indicator } from '@mantine/core';
import NavLinks from "./NavLinks";
import { Link, useLocation } from "react-router-dom";
import Profile from "./ProfileMenu";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../UserServices/ProfileService";
import { setProfile } from "../slices/ProfileSlice";
import NotiMenu from "./NotiMenu";
import { useDisclosure } from "@mantine/hooks";

 const links = [
    { name: "Find Jobs", url: "/find-jobs" },
    { name: "Find Talent", url: "/find-talent" },
    { name: "Post Job", url: "/post-job/0" },
    { name: "Posted Job", url: "/posted-job/0" },
    { name: "Job History", url: "/job-history" },
   // { name: "SignUp", url: "/signup" }
  ];

const Header = () => {
  const [opened, {open,close}]=useDisclosure(false);
  const user=useSelector((state)=>state.user);
  const location = useLocation();
  const dispatch = useDispatch();
  useEffect(()=>{
  if(user?.profileId){
    getProfile(user.profileId)
      .then((data)=>{
        dispatch(setProfile(data));
      })
      .catch((error)=>{
        console.log(error);
      });
  }
},[])

  return (
    location.pathname!="/signup"&& location.pathname!="/login" ? <div className="!w-full items-center bg-zinc-900 justify-between px-6 text-white flex h-28">

      <div className="flex gap-1 items-center text-amber-500 ">
        <IconAnchor className=" " size={50} stroke={2.5}  />
        <div className=" hidden min-[650px]:flex text-3xl font-semibold">JobHook</div>
      </div>

     <NavLinks/>

      <div className="flex gap-5 text-xl font-semibold items-center">
       
        
    {user?<Profile/>:<Link to="/login"> <Button variant="subtle" color="yellow" >Login</Button> </Link>}
   
    
        <div className="bg-zinc-800 p-1.5 rounded-full">
          <IconSettings stroke={1.5}/>
          </div>

            {user ?<NotiMenu/>:<></>}
            {

            }
 
           <Burger className="lg:hidden" opened={opened} onClick={open}aria-label="Toggle navigatton" />
          <Drawer size="xs" overlayProps={{backgroundOpacity:0.5, blur:4}} position="right" opened={opened} onClose={close} closeButtonProps={{icon:<IconX size={30} />}} >

          <div className="flex flex-col gap-6 items-center">
            {
            links.map((link, index) => (
        <div
          key={index}
          className=" h-full text-lg flex items-center"
        >
          <Link className="hover:text-amber-300 text-xl" to={link.url}>{link.name}</Link>
        </div>
      ))
          }
          </div>
         
          </Drawer>
        
      </div>

    </div>:<></>
  );
};

export default Header;
