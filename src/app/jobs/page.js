"use client";

import React, { useEffect, useState } from "react";
import {
  Box,
  InputBase,
  styled,
  Button,
  CircularProgress,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import TuneIcon from "@mui/icons-material/Tune";
import HeadingSubHeading from "@/components/components/HeadingSubHeading";
import JobTitleCard from "@/components/components/JobTitleCard";
import DynamicButton from "@/components/components/DynamicButton";
import axios from "axios";

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
  gap: "1.5rem",
  padding: "0 1rem",
  marginTop: "1rem",
});

const LoaderContainer = styled("div")({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "2rem",
});

const ViewMoreContainer = styled("div")({
  display: "flex",
  justifyContent: "center",
  marginTop: "2rem",
});

const Page = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [hasMore, setHasMore] = useState(true);

  const fetchJobs = async (params = {}) => {
    const { lastId, title, isLoadMore = false } = params;

    try {
      if (isLoadMore) {
        setLoadingMore(true);
      } else {
        setLoading(true);
      }

      const queryParams = new URLSearchParams();
      queryParams.append("limit", 20);
      if (lastId) queryParams.append("lastId", lastId);
      if (title) queryParams.append("title", title);

      const url = `${
        process.env.NEXT_PUBLIC_BASE_URL
      }/job?${queryParams.toString()}`;
      const response = await axios.get(url);
      const resData = response.data;

      const jobsArray = Array.isArray(resData)
        ? resData
            .filter((item) => item.status === "fulfilled")
            .flatMap((item) => {
              const data = item.value?.data;
              if (Array.isArray(data)) return data;
              if (Array.isArray(data?.jobs)) return data.jobs;
              if (Array.isArray(data?.result)) return data.result;
              return [];
            })
        : Array.isArray(resData?.data)
        ? resData.data
        : Array.isArray(resData?.data?.jobs)
        ? resData.data.jobs
        : Array.isArray(resData?.data?.result)
        ? resData.data.result
        : [];

      if (isLoadMore) {
        setJobs((prev) => [...prev, ...jobsArray]);
      } else {
        setJobs(jobsArray);
      }

      if (jobsArray.length < 20) {
        setHasMore(false);
      } else {
        setHasMore(true);
      }
    } catch (error) {
      console.error("Error fetching jobs:", error);
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (searchQuery.trim().length > 0) {
        fetchJobs({ title: searchQuery });
      } else {
        fetchJobs();
      }
    }, 500);

    return () => clearTimeout(timeout);
  }, [searchQuery]);

  const handleViewMore = () => {
    if (!hasMore || loadingMore || jobs.length === 0) return;
    const lastId = jobs[jobs.length - 1]?._id || jobs[jobs.length - 1]?.id;
    if (lastId) {
      fetchJobs({ lastId, title: searchQuery, isLoadMore: true });
    }
  };

  return (
    <PageContainer>
      <HeadingSubHeading
        heading="Jobs"
        subheading="Latest government and private jobs — updated daily with official links and deadlines"
      />

      <SearchWrapper>
        <SearchContainer>
          <SearchIcon sx={{ color: "#555" }} />
          <SearchInput
            placeholder="Search by: Job title..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </SearchContainer>

        {/* <DynamicButton
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
          borderRadius="25px"
          padding="14px 40px"
        /> */}
      </SearchWrapper>

      {/* Job Cards */}
      <CardsContainer>
        {loading ? (
          <LoaderContainer>
            <CircularProgress sx={{ color: "#309689" }} />
          </LoaderContainer>
        ) : jobs.length > 0 ? (
          jobs.map((job, index) => (
            <JobTitleCard
              key={job._id || job.id || index}
              id={job._id}
              department={job?.department || "N/A"}
              heading={
                job.heading || job.title || job.jobTitle || "Untitled Job"
              }
              lastDate={job?.importantDates?.endDate || job.deadline || "N/A"}
              category={job.category || job.department || "General"}
              postedDate={job?.updatedAt || job.createdAt || "N/A"}
            />
          ))
        ) : (
          <p>No jobs found</p>
        )}
      </CardsContainer>

      {/* View More Button */}
      {hasMore && jobs.length > 0 && (
        <ViewMoreContainer>
          <DynamicButton
            text={loadingMore ? "Loading..." : "View More"}
            onClick={handleViewMore}
            disabled={loadingMore}
          />
        </ViewMoreContainer>
      )}
    </PageContainer>
  );
};

export default Page;
