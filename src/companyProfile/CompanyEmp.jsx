import React from 'react'
import { talentsdata } from '../data/Data'
import TalentCard from '../findTelent/TalentCard'

const CompanyEmp = () => {
  return (
   <div className='mt-10 flex flex-wrap gap-10 '>
        {
          talentsdata.map((talent,index)=>
            <TalentCard key={index} {...talent} />
          )
        }
       
      </div>
  )
}

export default CompanyEmp
