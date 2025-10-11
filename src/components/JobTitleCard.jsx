"use client";

import { styled } from "@mui/material";
import Image from "next/image";
import React from "react";
import ColorIcon from "../../public/ColorLogo.svg";
import ClockIcon from "../../public/clock.svg";
import JobOutlineLogo from "../../public/jobOutline.svg";
import DynamicButton from "./DynamicButton";
import { getTimeAgo } from "../utils/timeUtils";
import Link from "next/link";

const JobTitleCard = ({
  heading,
  lastDate,
  category,
  postedDate,
  department,
  id
}) => {
  return (
    <JobCardContainer>
      <p
        style={{
          width: "80px",
          padding: "5px",
          backgroundColor: "#E7F6EA",
          color: "#0BA02C",
          borderRadius: "5px",
          fontSize: "12px",
        }}
      >
        {getTimeAgo(postedDate)}
      </p>
      <div style={{ display: "flex", gap: "30px", alignItems: "center" }}>
        <Image src={ColorIcon} height={50} />
        <div>
          <h3>{heading || "N/A"}</h3>
          <h4>{department || "N/A"}</h4>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          gap: "20px",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
          <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
            <div style={{ display: "flex", gap: "5px", alignItems: "center" }}>
              <Image height={15} src={JobOutlineLogo} />
              <p>{category || "defg"}</p>
            </div>
            <div style={{ display: "flex", gap: "5px", alignItems: "center" }}>
              <Image height={15} src={ClockIcon} />
              <p>
                {" "}
                Last date : {new Date(lastDate).toLocaleDateString() || "defg"}
              </p>
            </div>
          </div>
        </div>

        <DynamicButton text="Job Details" component={Link} href={`/job-details/${id}`} textColor="#ffffffff" />
      </div>
    </JobCardContainer>
  );
};

export default JobTitleCard;

const JobCardContainer = styled("div")({
  width: "100%",
  height: "auto",
  backgroundColor: "#FFFFFF",
  flexDirection: "column",
  display: "flex",
  gap:"15px",
  borderRadius: "12px",
  padding: "20px",
});
