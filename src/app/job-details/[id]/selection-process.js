"use client";

import React from "react";
import {
  Paper,
  styled,
} from "@mui/material";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import BuildOutlinedIcon from "@mui/icons-material/BuildOutlined";

const SelectionProcess = () => {
  // temporary mock data (replace later with real props or API data)
  const selectionProcess = [
    {
      step: "Written Exam",
      description: "Science knowledge + GK",
    },
    {
      step: "Practical Test",
      description: "Lab skills assessment",
    },
  ];

  return (
    <SelectionProcessMainContainer>
      <TableTitle>Selection Process</TableTitle>

      {selectionProcess.length > 0 ? (
        selectionProcess.map((step, index) => (
          <ProcessCard key={index} elevation={3}>
            <IconContainer>
              {step.step.toLowerCase().includes("written") ? (
                <AssignmentOutlinedIcon fontSize="large" />
              ) : (
                <BuildOutlinedIcon fontSize="large" />
              )}
            </IconContainer>
            <ProcessContent>
              <ProcessTitle>{step?.step || "N/A"}</ProcessTitle>
              <ProcessDescription>
                {step?.description || "N/A"}
              </ProcessDescription>
            </ProcessContent>
          </ProcessCard>
        ))
      ) : (
        <NoData>No selection process details available</NoData>
      )}
    </SelectionProcessMainContainer>
  );
};

export default SelectionProcess;

// Styled Components
const SelectionProcessMainContainer = styled("div")({
  width: "100%",
  height: "auto",
  padding: "20px",
  display: "flex",
  flexDirection: "column",
  gap: "20px",
});

const TableTitle = styled("h2")({
  fontFamily: "Manrope",
  fontSize: "22px",
  fontWeight: 600,
  marginBottom: "10px",
});

const ProcessCard = styled(Paper)({
  display: "flex",
  alignItems: "flex-start",
  gap: "20px",
  padding: "20px",
  borderRadius: "12px",
  backgroundColor: "#fff",
});

const IconContainer = styled("div")({
  color: "rgb(34, 156, 184)",
});

const ProcessContent = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
});

const ProcessTitle = styled("h3")({
  margin: 0,
  font: "600 20px Manrope",
  color: "#000",
});

const ProcessDescription = styled("p")({
  margin: 0,
  font: "400 16px Roboto",
  color: "rgb(80, 80, 80)",
});

const NoData = styled("div")({
  textAlign: "center",
  font: "500 18px Roboto",
  color: "#999",
});
