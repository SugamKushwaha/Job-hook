import axios from "axios"

const base_url="http://localhost:8080/jobs/"

const postJobs = async (job)=>{
    return axios.post(`${base_url}post`,job)
     .then(result => result.data)
     .catch(error =>{throw error;});
}

const getAllJobs= async ()=>{
    return axios.get(`${base_url}getAll`)
           .then(result => result.data)
           .catch(error =>{throw error;});
}

const getJob= async (id)=>{
    return axios.get(`${base_url}get/${id}`)
           .then(result => result.data)
           .catch(error =>{throw error;});
}

const applyJob=async(id,applicant)=>{
    return axios.post(`${base_url}apply/${id}`,applicant)
    .then(result => result.data)
    .catch(error => {throw error;});
}

const getJobPostedBy=async(id)=>{
      return axios.get(`${base_url}postedBy/${id}`)
         .then(result=>result.data)
         .catch(error=>{throw error;});
}

const changeAppStatus=async(id)=>{
      return axios.post(`${base_url}changeAppStatus`,application)
         .then(result=>result.data)
         .catch(error=>{throw error;});
}


export {postJobs, getAllJobs, getJob ,applyJob , getJobPostedBy, changeAppStatus};