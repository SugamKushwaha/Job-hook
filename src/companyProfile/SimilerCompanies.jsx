import React from 'react'
import { similar} from '../data/Data'
import CompanyCard from './CompanyCard'

const SimilerCompanies = () => {
  return (
      <div className='w-1/4 '>
         <div className='text-2xl font-semibold mb-5'>Similer companies</div>
         <div className='flex flex-col  flex-wrap gap-5'>
        {similar.map((companies,index)=>index<10 && <CompanyCard key={index} {...companies} />)}
      </div>
      </div>
     
  )
}

export default SimilerCompanies
