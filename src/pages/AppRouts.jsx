import { Divider } from '@mantine/core'
import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import FindTelent from './FindTelentPage'
import JobDescriptionPage from './JobDescriptionPage'
import CompanyProfilePage from './CompanyProfilePage'
import JobHistoryPage from './JobHistoryPage'
import ApplyJobPage from './ApplyJobPage'
import PostJobsPage from './PostJobsPage'
import SignupPage from './SignupPage'
import TalentProfilePage from './TalentProfilePage'
import App from '../App'
import PostedJobs from "./PostedJobPage";
import Footer from '../footer/Footer'
import Header from '../header/Header'
import { useSelector } from 'react-redux'
import FindJob from './FindJob'
import ProfilePage from './ProfilePage'

const AppRouts = () => {
    const user = useSelector((state)=>state.user);
  return( <BrowserRouter>
      <div className="relative">
        <Header/>
      <Divider/>
      <Routes >
        <Route path="/find-jobs" element={<FindJob/>} />
        <Route path="/find-talent" element={<FindTelent/>}/>
        <Route path="/jobs/:id" element={<JobDescriptionPage/>}/>
        <Route path="/company/:name" element={<CompanyProfilePage/>}/>
        <Route path="/posted-job/:id" element={<PostedJobs/>}/>
        <Route path="/job-history" element={<JobHistoryPage/>}/>
        <Route path="/apply-job/:id" element={<ApplyJobPage/>}/>
        <Route path="/post-job/:id" element={<PostJobsPage/>}/>
        <Route path="/signup" element={user?<Navigate to="/"/>:<SignupPage/>}/>
        <Route path="/login" element={user?<Navigate to="/"/>:<SignupPage/>}/>
        <Route path="/profile" element={<ProfilePage/>}/>
        
        <Route path="/talent-profile/:id" element={<TalentProfilePage/>}/>
        <Route path="*"   element={<App/>}/>
      </Routes>
      <Divider/>
      <Footer/>
      </div>
      </BrowserRouter>
  )
}

export default AppRouts
