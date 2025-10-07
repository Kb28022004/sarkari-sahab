"use client";
import React from "react";
import { Box, Grid, InputBase, styled } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import HeadingSubHeading from "@/components/components/HeadingSubHeading";
import ResultCard from "@/components/components/ResultCard";
import DynamicButton from "@/components/components/DynamicButton";
import TuneIcon from '@mui/icons-material/Tune';

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

// --- Styled Components ---
const PageContainer = styled("div")({
  width:"100vw",
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

const ResultsGridContainer = styled(Box)({
  width: "100%",
  maxWidth: "1200px",
  padding: "0 1rem",
  marginTop: "1rem",
});

// --- Main Component ---
const Page = () => {
  return (
    <PageContainer>
      {/* Heading */}
      <HeadingSubHeading
        heading="Result"
        subheading="Find all Sarkari, board, and university exam results — updated daily with official links and notifications"
      />

      {/* Search Bar + Buttons */}
      <SearchWrapper>
        <SearchContainer>
          <SearchIcon sx={{ color: "#555" }} />
          <SearchInput placeholder="Search by: Job tittle, Position, Keyword..." />
        </SearchContainer>

        <DynamicButton
        startIcon={<TuneIcon/>}
          text="Filter"
          color="#F1F2F4"
          textColor={"#000000"}
          borderRadius="25px"
          padding="14px 40px"
        />

        <DynamicButton
          text="Find Results"
          textColor={"#ffffff"}
          color="#18BC51"
          borderRadius="25px"
          padding="14px 40px"
        />
      </SearchWrapper>

      {/* Results Grid */}
      <ResultsGridContainer>
        <Grid container spacing={3} justifyContent="center">
          {dummyResults.map((result) => (
            <Grid
              item
              xs={12}   // 1 per row on mobile
              sm={6}    // 2 per row on tablet
              md={6}
              lg={4}    // 3 per row on desktop
              key={result.id}
              display="flex"
              justifyContent="center"
            >
              <ResultCard title={result.title} date={result.date} />
            </Grid>
          ))}
        </Grid>
      </ResultsGridContainer>
    </PageContainer>
  );
};

export default Page;
