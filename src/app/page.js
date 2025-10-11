"use client";

import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import JobCard from "../components/JobCard";
import ResultCard from "../components/ResultCard";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import HeroSection from "../components/HeroSection";
import DynamicButton from "../components/DynamicButton";
import { Grid } from "@mui/material";
import axios from "axios";
import Link from "next/link";

export const dummyJobs = [
  { id: 1, heading: "Government Clerk Recruitment 2025", date: "07 Oct 2025" },
  {
    id: 2,
    heading: "Railway Assistant Exam Notification",
    date: "06 Oct 2025",
  },
  { id: 3, heading: "SSC Junior Engineer Vacancy", date: "05 Oct 2025" },
  { id: 4, heading: "Bank PO Recruitment 2025", date: "04 Oct 2025" },
  { id: 5, heading: "Defence Services Exam 2025", date: "03 Oct 2025" },
];

export const dummyResults = [
  { id: 1, title: "SSC CGL 2025 Tier 1 Result", date: "07 Oct 2025" },
  { id: 2, title: "Railway RRB NTPC Result", date: "06 Oct 2025" },
  { id: 3, title: "UPPSC Assistant Exam Result", date: "05 Oct 2025" },
  { id: 4, title: "Bank PO Prelims Result 2025", date: "04 Oct 2025" },
  { id: 5, title: "NDA Written Exam Result", date: "03 Oct 2025" },
];

const Page = () => {
  const [latestJobs, setLatestJobs] = useState([]);
  const [latestResult, setLatestResult] = useState([]);
  const [loading, setLoading] = useState(false);


  const jobCount=latestJobs.length


  useEffect(() => {
    const fetchLatestJobs = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_URL}/job`
        );



        // ✅ Safely extract array from response
        const jobsArray = Array.isArray(response.data?.data)
          ? response.data.data
          : Array.isArray(response.data?.data?.jobs)
          ? response.data.data.jobs
          : Array.isArray(response.data?.data?.result)
          ? response.data.data.result
          : [];

        setLatestJobs(jobsArray.slice(0, 5)); // show only first 5 jobs
      } catch (error) {
        console.error("Error fetching latest jobs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLatestJobs();
  }, []);

  return (
    <div>
      <HeroSection jobCount={jobCount} />

      {/* 🔹 Latest Jobs Section */}
      <div
        style={{
          marginTop: "6rem",
          paddingLeft: "7rem",
          width: "85%",
          height:"auto",
          paddingBottom: "6rem",
        }}
      >
        <h2 style={{ fontSize: "50px" }}>Latest Jobs Available</h2>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",

          }}
        >
          <p>
            Find the most recent government and private job openings across
            India, updated daily for your convenience.
          </p>
          <DynamicButton    component={Link}
            href="/jobs" text={"View All"} />
        </div>
      </div>

      {/* 🔹 Jobs Grid */}
      <div style={{ width: "100%" }}>
        <Grid container spacing={10} justifyContent="center">
          {(latestJobs.length > 0 ? latestJobs : dummyJobs).map(
            (job, index) => (
              <Grid
                item
                xs={12}
                sm={12}
                md={6}
                key={job.id || index}
                display="flex"
                justifyContent="space-between"
              >
                <JobCard heading={job?.heading || job?.title} id={job?._id} date={job?.importantDates?.endDate} />
              </Grid>
            )
          )}
        </Grid>

        {loading && (
          <p style={{ textAlign: "center", marginTop: "1rem" }}>
            Loading latest jobs...
          </p>
        )}
      </div>

      {/* 🔹 Latest Results Section */}
      <div
        style={{
          marginTop: "6rem",
          paddingLeft: "7rem",
          width: "85%",
          paddingBottom: "6rem",
        }}
      >
        <h2 style={{ fontSize: "50px" }}>Latest Results</h2>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
       
          }}
        >
          <p>
            Check the latest exam results, admit cards, and notifications for
            all major government exams in one place.
          </p>
          <DynamicButton
            text={"View All"}
            color="#F8F8F8"
            component={Link}
            href="/results"

          />
        </div>
      </div>

      {/* 🔹 Results Grid */}
      <div style={{ width: "100%", paddingBottom: "8rem" }}>
        <Grid container spacing={3} justifyContent="center">
          {(latestResult.length > 0 ? latestResult : dummyResults).map(
            (result, index) => (
              <Grid
                item
                xs={12}
                sm={12}
                md={6}
                lg={4}
                key={result.id || index}
                display="flex"
                justifyContent="center"
              >
                <ResultCard
                  title={result.title || result.heading}
                  date={result.date}
                />
              </Grid>
            )
          )}
        </Grid>
      </div>

      {/* 🔹 Banner */}
      <div style={{ paddingBottom: "8rem" }}>
        <Banner />
      </div>
    </div>
  );
};

export default Page;
