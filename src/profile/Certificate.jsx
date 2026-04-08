import { ActionIcon } from "@mantine/core";
import { IconDeviceFloppy, IconPencil, IconPlus, IconX } from "@tabler/icons-react";
import CertificationCard from "./CertificationCard";
import CertiInput from "./CertiInput";
import { useState } from "react";
import { useSelector } from "react-redux";

const Certificate = () => {
  const [edit, setEdit] = useState(false);
  const [addCerti, setAddCerti] = useState(false);
  const profile = useSelector((state) => state.profile);

  return (
    <div className='px-12 mt-10'>
      <div className='text-2xl font-semibold mb-5 flex justify-between'>
        Certifications

        <div className='flex gap-5'>
          <ActionIcon onClick={() => setAddCerti(true)} size="lg" color='yellow.5'variant="subtle" >
            
            <IconPlus />
          </ActionIcon>

          <ActionIcon onClick={() => setEdit(!edit)} size="lg" color='yellow.8' variant="subtle">
            {edit ? <IconX /> : <IconPencil />}
          </ActionIcon>
        </div>
      </div>

      <div className='flex flex-col gap-8'>
        {(profile?.certifications || []).map((certi, index) => (
          <CertificationCard key={index} {...certi} edit={edit} />
        ))}

        {addCerti && <CertiInput setEdit={setAddCerti} />}
      </div>
    </div>
  );
};

export default Certificate;