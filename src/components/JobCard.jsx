"use client";

import { styled } from "@mui/material";
import Image from "next/image";
import React from "react";
import JobIcon from "../../public/jobIcon.svg";
import DynamicButton from "./DynamicButton";
import Link from "next/link";

const JobCard = ({ heading, date,id }) => {
  return (
    <JobCardContainer>
      <Image src={JobIcon} />
      <div>
        <h3>{heading || "ksdfakdsa"}</h3>
        <p style={{color:"#8C8C8C"}} >Last date : {new Date(date).toLocaleDateString() || "dnjkanfdka"}</p>
      </div>
      <DynamicButton
        text="Job Details"
        textColor="#FFFFFF"
        background="linear-gra"
        component={Link}
        href={`/job-details/${id}`}
      />
    </JobCardContainer>
  );
};

export default JobCard;

const JobCardContainer = styled("div")({
  width: "600px",
  height: "auto",
  backgroundColor: "#FFFFFF",

  display: "flex",
  justifyContent: "space-between",
  gap: "6px",
  alignItems: "center",
  padding: "14px",
  borderRadius: "12px",
  boxShadow:"0 0 4px 0 black",

});
