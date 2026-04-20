import React, { useEffect, useState } from 'react'
import { talentsdata } from '../Data/Data'
import TalentCard from './TalentCard'
import Sort from '../findJobs/Sort'
import { getAllProfiles } from '../UserServices/ProfileService'
import { useDispatch, useSelector } from 'react-redux'
import { resetFilter } from '../slices/FilterSlice'


const Talents = () => {
  const dispatch= useDispatch();
  const [talents,setTalents]=useState([]);
  const filter=useSelector((state)=>state.filter);
  const [filteredTalents, setFilteredTalents]=useState([]);
  const sort = useSelector((state) => state.sort);

  useEffect(()=>{
    dispatch(resetFilter())
    getAllProfiles().then((res)=>{
       setTalents(res);
    }).catch((err)=>{
      console.log(err);
    })
  },[])

  useEffect(() => {
  let sorted = [...talents]; // original talent data

  if (sort === "Experience: Low to High") {
    sorted.sort((a, b) => Number(a.totalExp) - Number(b.totalExp));
  } 
  else if (sort === "Experience: High to Low") {
    sorted.sort((a, b) => Number(b.totalExp) - Number(a.totalExp));
  }

  setFilteredTalents(sorted);
}, [sort]);

  useEffect(()=>{
    let filterTalent=talents;
    setFilteredTalents(talents);
    console.log(filter);
    if(filter.name)filterTalent=filterTalent.filter((talent)=>talent.name.toLowerCase().includes(filter.name.toLowerCase()));

     if(filter["Job Title"] && filter["Job Title"].length>0){
      filterTalent=filterTalent.filter((talent)=>filter["Job Title"]?.some((title)=>talent.jobTitle.toLowerCase().includes(title.toLowerCase())));
     }

     if(filter.Location && filter.Location.length>0){
      filterTalent=filterTalent.filter((talent)=>filter.Location?.some((location)=>talent.location.toLowerCase().includes(location.toLowerCase())));
     }

      if (filter.Skills && filter.Skills.length > 0) {
    filterTalent = filterTalent.filter((talent) =>
      filter.Skills.some((skill) =>
        talent?.skills?.some((talentSkill) =>
          talentSkill.toLowerCase().includes(skill.toLowerCase())
        )
      )
    );
   }

   if(filter.exp && filter.exp.length>0){
    filterTalent=filterTalent.filter((talent)=>filter.exp[0]<=talent.totalExp && talent.totalExp<=filter.exp[1]);
   }
    setFilteredTalents(filterTalent);
  },[filter,talents]);

  return (
    <div className='px-5 py-5'>
       <div className='flex justify-between mt-5'>
         <div className="text-2xl font-semibold">Talents...</div>
        <Sort/>
       </div>
      <div className='mt-10 flex flex-wrap gap-5 '>
        {
          filteredTalents.length ? filteredTalents.map((talent,index)=>
             <TalentCard key={index} {...talent} />
          ):<div className="text-xl font-semibold">No Talents Found</div>
        }
       
      </div>
    </div>
  )
}

export default Talents
