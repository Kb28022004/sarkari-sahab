"use client";

import { styled } from "@mui/material";
import Image from "next/image";
import React from "react";
import ColorIcon from "../../public/ColorLogo.svg";
import ClockIcon from "../../public/clock.svg";
import JobOutlineLogo from "../../public/jobOutline.svg";
import DynamicButton from "./DynamicButton";

const JobTitleCard = ({ heading, lastDate, category, postedDate }) => {
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
        djkafjda
      </p>
      <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
        <Image src={ColorIcon} height={20} />
        <h3>{heading || "ksdfakdsa"}</h3>
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
              <p>{category || "defg"}</p>
            </div>
          </div>
        </div>

        <DynamicButton text="Job Details" textColor="#18BC51" color="#094F21" />
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
  borderRadius: "12px",
});
