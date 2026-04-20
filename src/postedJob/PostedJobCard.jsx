import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { timeAgo } from '../UserServices/Utilities';

const PostedJobCard = (props) => {

  const {id} = useParams();

  return (
    <Link to={`/posted-job/${props.id}`} className={` rounded-xl p-2 border-l-3 border-l-amber-400 ${props.id==id?"bg-amber-500 text-black":"bg-zinc-700 text-zinc-200"} `}>
      <div className='text-lg font-semibold'>{props.jobTitle}</div>
      <div className='text-xs  font-medium'>{props.location}</div>
      <div className='text-xs '>{props.jobStatus=="DRAFT"?"Drafted":props.jobStatus=="CLOSED"?"Closed":"Posted"} {timeAgo(props.postTime)}</div>
    </Link>
  )
}

export default PostedJobCard
