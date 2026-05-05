import { Button } from '@mantine/core'
import { IconArrowLeft } from '@tabler/icons-react'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Company from '../companyProfile/Company'
import SimilerCompanies from '../companyProfile/SimilerCompanies'

const CompanyProfilePage = () => {
    const navigate = useNavigate();
  return (
     <div className='min-h-[90vh] bg-zinc-900 '> 
         <Button my="md" leftSection={<IconArrowLeft/>} onClick={()=>navigate(-1)} color='yellow' variant='light' >Back</Button>
     <div className='flex gap-5 max-[750px]:flex-wrap justify-between'>
        <Company/>
        <SimilerCompanies/>
     </div>
    </div>
  )
}

export default CompanyProfilePage
