import { Menu, Button, Text, Avatar, Switch, rem } from '@mantine/core';
import {
  IconSettings,
  IconSearch,
  IconPhoto,
  IconMessageCircle,
  IconTrash,
  IconArrowsLeftRight,
  IconUserCircle,
  IconFileText,
  IconMoon,
  IconSun,
  IconMoonStars,
} from '@tabler/icons-react';
import { useState } from 'react';

const Profile=()=> {
    const [checked, setchecked] = useState(false);
    const [opened, setOpened] = useState(false);
  return (
    <Menu shadow="md" width={200} opened={opened} onChange={setOpened}>
      <Menu.Target>
         <div className="flex cursor-pointer items-center gap-2">
                  <div>Marshal</div>
                   <Avatar radius="xl" />
                </div>
      </Menu.Target>

      <Menu.Dropdown onChange={()=>setOpened(true)}>
        <Menu.Item leftSection={<IconUserCircle size={14} />}>
          Profile
        </Menu.Item>
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
          leftSection={<IconArrowsLeftRight size={14} />}
        >
          Transfer my data
        </Menu.Item>
        <Menu.Item
          color="red"
          leftSection={<IconTrash size={14} />}
        >
          Delete my account
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
export default Profile