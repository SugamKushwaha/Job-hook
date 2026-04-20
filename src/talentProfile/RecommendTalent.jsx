import React from 'react'
import { talentsdata } from '../data/Data'
import TalentCard from '../findTelent/TalentCard'
import { useParams } from 'react-router-dom'

const RecommendTalent = (props) => {

  const {id}= useParams();

  return (
    <div>
      <div className='text-xl font-semibold mb-5'>Recommended Talent</div>
      <div className='flex flex-col flex-wrap gap-5'>
        {props?.talents?.map((talent,index)=>index<5 && id!=talent.id  &&<TalentCard key={index} {...talent} />)}
      </div>
    </div>
  )
}

export default RecommendTalent
