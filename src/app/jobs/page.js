"use client";

import React from "react";
import { Box, InputBase, styled } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import TuneIcon from '@mui/icons-material/Tune';
import HeadingSubHeading from "@/components/components/HeadingSubHeading";
import JobTitleCard from "@/components/components/JobTitleCard";
import DynamicButton from "@/components/components/DynamicButton";

// --- Dummy Job Data ---
export const dummyJobs = [
  { id: 1, heading: "Software Engineer", lastDate: "15 Oct 2025", category: "IT", postedDate: "01 Oct 2025" },
  { id: 2, heading: "Data Analyst", lastDate: "18 Oct 2025", category: "Analytics", postedDate: "02 Oct 2025" },
  { id: 3, heading: "Civil Engineer", lastDate: "20 Oct 2025", category: "Construction", postedDate: "03 Oct 2025" },
  { id: 4, heading: "Marketing Manager", lastDate: "22 Oct 2025", category: "Marketing", postedDate: "04 Oct 2025" },
  { id: 5, heading: "UI/UX Designer", lastDate: "25 Oct 2025", category: "Design", postedDate: "05 Oct 2025" },
  { id: 6, heading: "HR Executive", lastDate: "28 Oct 2025", category: "Human Resources", postedDate: "06 Oct 2025" },
  { id: 7, heading: "Accountant", lastDate: "30 Oct 2025", category: "Finance", postedDate: "07 Oct 2025" },
  { id: 8, heading: "Operations Manager", lastDate: "02 Nov 2025", category: "Operations", postedDate: "08 Oct 2025" },
  { id: 9, heading: "Content Writer", lastDate: "05 Nov 2025", category: "Content", postedDate: "09 Oct 2025" },
  { id: 10, heading: "Customer Support Executive", lastDate: "10 Nov 2025", category: "Support", postedDate: "10 Oct 2025" },
];

// --- Styled Components ---
const PageContainer = styled("div")({
  width: "100vw",
  backgroundColor: "#F8F8F8",
  padding: "4rem 1rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const SearchWrapper = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "1rem",
  width: "90%",
  maxWidth: "900px",
  flexWrap: "wrap",
  margin: "2.5rem auto",
});

const SearchContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  backgroundColor: "#fff",
  borderRadius: "50px",
  boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
  padding: "0 1rem",
  flex: 1,
  minWidth: "250px",
  maxWidth: "600px",
  height: "50px",
});

const SearchInput = styled(InputBase)({
  flex: 1,
  padding: "0.6rem 0.8rem",
  fontSize: "1rem",
  color: "#333",
});

const CardsContainer = styled("div")({
  width: "100%",
  maxWidth: "1200px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "1.5rem", // spacing between cards
  padding: "0 1rem",
  marginTop: "1rem",
});

// --- Main Component ---
const Page = () => {
  return (
    <PageContainer>
      {/* Heading */}
      <HeadingSubHeading
        heading="Jobs"
        subheading="Latest government and private jobs — updated daily with official links and deadlines"/>

      {/* Search Bar + Buttons */}
      <SearchWrapper>
        <SearchContainer>
          <SearchIcon sx={{ color: "#555" }} />
          <SearchInput placeholder="Search by: Job title, Position, Keyword..." />
        </SearchContainer>

        <DynamicButton
          startIcon={<TuneIcon />}
          text="Filter"
          color="#F1F2F4"
          textColor="#000000"
          borderRadius="25px"
          padding="14px 40px"
        />

        <DynamicButton
          text="Find Job"
          textColor="#ffffff"
          color="#18BC51"
          borderRadius="25px"
          padding="14px 40px"
        />
      </SearchWrapper>

      {/* Job Cards */}
      <CardsContainer>
        {dummyJobs.map((job) => (
          <JobTitleCard
            key={job.id}
            heading={job.heading}
            lastDate={job.lastDate}
            category={job.category}
            postedDate={job.postedDate}
          />
        ))}
      </CardsContainer>
    </PageContainer>
  );
};

export default Page;
