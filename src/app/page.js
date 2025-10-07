

import React from 'react'
import Header from './components/Header'
import JobCard from './components/JobCard'
import ResultCard from './components/ResultCard'
import Footer from './components/Footer'
import Banner from './components/Banner'
import HeadingSubHeading from './components/HeadingSubHeading'
import JobTitleCard from './components/JobTitleCard'
import HeroSection from './components/HeroSection'
import DynamicButton from './components/DynamicButton'
import { Grid } from "@mui/material";

export const dummyJobs = [
  { id: 1, heading: "Government Clerk Recruitment 2025", date: "07 Oct 2025" },
  { id: 2, heading: "Railway Assistant Exam Notification", date: "06 Oct 2025" },
  { id: 3, heading: "SSC Junior Engineer Vacancy", date: "05 Oct 2025" },
  { id: 4, heading: "Bank PO Recruitment 2025", date: "04 Oct 2025" },
  { id: 5, heading: "Defence Services Exam 2025", date: "03 Oct 2025" },
  { id: 6, heading: "UPSC Civil Services Prelims", date: "02 Oct 2025" },
  { id: 7, heading: "State Police Constable Recruitment", date: "01 Oct 2025" },
  { id: 8, heading: "Teaching Assistant Recruitment 2025", date: "30 Sep 2025" },
  { id: 9, heading: "Post Office GDS Vacancy", date: "29 Sep 2025" },
  { id: 10, heading: "NDA Entrance Exam Notification", date: "28 Sep 2025" },
];

export const dummyResults = [
  { id: 1, title: "SSC CGL 2025 Tier 1 Result", date: "07 Oct 2025" },
  { id: 2, title: "Railway RRB NTPC Result", date: "06 Oct 2025" },
  { id: 3, title: "UPPSC Assistant Exam Result", date: "05 Oct 2025" },
  { id: 4, title: "Bank PO Prelims Result 2025", date: "04 Oct 2025" },
  { id: 5, title: "NDA Written Exam Result", date: "03 Oct 2025" },
  { id: 6, title: "UPSC CAPF Result 2025", date: "02 Oct 2025" },
  { id: 7, title: "State Police Constable Result", date: "01 Oct 2025" },
  { id: 8, title: "Teaching Assistant Exam Result", date: "30 Sep 2025" },
  { id: 9, title: "Post Office GDS Result 2025", date: "29 Sep 2025" },
];


const page = () => {
  return (
    <div style={{ backgroundColor: "#F8F8F8" }} >
      <Header />
      <HeroSection />
      <div style={{ marginTop: "6rem", paddingLeft: "7rem", width: "85%", paddingBottom: "6rem" }}>
        <h2 style={{ fontSize: "50px" }}>Latest jobs available</h2>
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "-3rem" }}>
          <p>Find the most recent government and private job openings across India, updated daily for your convenience.</p>
          <DynamicButton text={"View All"} color="#F8F8F8" textColor="#309689" />
        </div>
      </div>

      <div style={{ width: "100%", }}>
        <Grid container spacing={10} justifyContent="center">
          {dummyJobs.map((job) => (
            <Grid
              item
              xs={12}   // full width on mobile
              sm={12}   // full width on tablet
              md={6}    // half width on desktop
              key={job.id}
              display="flex"
              justifyContent="space-between" // center each card within the column
            >
              <JobCard heading={job.heading} date={job.date} />
            </Grid>
          ))}
        </Grid>
      </div>

      <div style={{ marginTop: "6rem", paddingLeft: "7rem", width: "85%", paddingBottom: "6rem" }}>
        <h2 style={{ fontSize: "50px" }}>Latest Results</h2>
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "-3rem" }}>
          <p>Check the latest exam results, admit cards, and notifications for all major government exams in one place.</p>
          <DynamicButton text={"View All"} color="#F8F8F8" textColor="#309689" />
        </div>
      </div>
      <div  style={{ width: "100%", paddingBottom:"8rem"}}>
        <Grid container spacing={3} justifyContent="center">
          {dummyResults.map((result) => (
            <Grid
              item
              xs={12} sm={12} md={6} lg={4}
              key={result.id}
              display="flex"
              justifyContent="center"
            >
              <ResultCard title={result.title} date={result.date} />
            </Grid>
          ))}
        </Grid>
      </div>
      <div style={{paddingBottom:"8rem"}}>
      <Banner/>
      </div>
      <Footer/>
    </div>
  )
}

export default page