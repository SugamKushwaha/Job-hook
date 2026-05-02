import { Menu, Button, Text, Avatar, Switch, rem } from '@mantine/core';
import {
  IconPhoto,
  IconMessageCircle,
  IconUserCircle,
  IconFileText,
  IconMoon,
  IconSun,
  IconMoonStars,
  IconLogout2,
} from '@tabler/icons-react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { removeUser } from '../slices/UserSlice';

const ProfileMenu=()=> {
    const dispath = useDispatch();
    const profile=useSelector((state)=>state.profile);
    const user=useSelector((state)=>state.user);
    const [checked, setchecked] = useState(false);
    const [opened, setOpened] = useState(false);
    const navigate = useNavigate();

    const handleLogout=()=>{
         dispath(removeUser());
         navigate('/');
    }
  return (
    <Menu shadow="md" width={200} opened={opened} onChange={setOpened}>
      <Menu.Target>
         <div className="flex cursor-pointer items-center gap-2">
                  <div className="hidden min-[500px]:flex" > {user.name}</div>
                   <Avatar radius="xl" src={profile.image?`data:image/jpeg;base64,${profile.image}`:"/Avatar.png"} alt="it's me" />
                </div>
      </Menu.Target>

      <Menu.Dropdown onChange={()=>setOpened(true)}>
        <Link to="/profile">
        <Menu.Item leftSection={<IconUserCircle size={14} />}>
          Profile
        </Menu.Item>
        </Link>
        <Menu.Item leftSection={<IconMessageCircle size={14} />}>
          Messages
        </Menu.Item>
        <Menu.Item leftSection={<IconPhoto size={14} />}>
          Gallery
        </Menu.Item>
         <Menu.Item leftSection={<IconFileText size={14} />}>
          Resume
        </Menu.Item>
        <Menu.Item
          leftSection={<IconMoon size={14} />}
          rightSection={
            <Switch checked={checked} 
            onChange={(event)=> setchecked(event.currentTarget.checked)} size='md' color='dark.4' onLabel={<IconSun style={{width:rem(16),height:rem(16)}} stroke={2.5} color='yellow' />}
            offLabel={<IconMoonStars style={{width:rem(16),height:rem(16)}} stroke={2.5}color='cyan' />} />
          }
        >
          Dark Mode
        </Menu.Item>

        <Menu.Divider />

        <Menu.Label>Danger zone</Menu.Label>
       
        <Menu.Item
          color="red"
          leftSection={<IconLogout2 size={14} />}
          onClick={handleLogout}
        >
          Logout
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
export default ProfileMenu