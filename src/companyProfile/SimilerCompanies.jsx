import React from 'react'
import { similar} from '../data/Data'
import CompanyCard from './CompanyCard'

const SimilerCompanies = () => {
  return (
      <div className='w-1/4  max-[750px]:w-full'>
         <div className='text-2xl max-[750px]:text-3xl max-[750px]:ml-10 font-semibold mb-5'>Similer companies</div>
         <div className='flex min-[900px]:flex-col flex-wrap gap-5   max-[900px]:justify-start max-[900px]:ml-5 max-[900px]:mr-5'>
        {similar.map((companies,index)=>index<10 && <CompanyCard key={index} {...companies} />)}
      </div>
      </div>
     
  )
}

export default SimilerCompanies
