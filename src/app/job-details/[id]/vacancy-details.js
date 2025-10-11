"use client";

import {
  Paper,
  styled,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";

const VacancyDetails = () => {
  // ✅ Static mock data (you can replace this with dynamic API later)
  const vacancyDetails = [
    {
      postName: "Software Engineer",
      count: 12,
      eligibility: {
        education: "B.Tech / MCA / Equivalent",
        ageLimit: { min: 21, max: 35 },
        relaxation: "SC/ST - 5 Years, OBC - 3 Years",
      },
    },
    {
      postName: "Data Analyst",
      count: 5,
      eligibility: {
        education: "B.Sc / BCA / Equivalent",
        ageLimit: { min: 20, max: 32 },
        relaxation: "SC/ST - 5 Years, OBC - 3 Years",
      },
    },
  ];

  return (
    <VacancyDetailsMainContainer>
      <TableContainer component={Paper}>
        <Table>
          <TableHead sx={{ backgroundColor: "#f4ecec" }}>
            <TableRow>
              <TableCell sx={tableHeadStyle}>
                <strong>Post Name</strong>
              </TableCell>
              <TableCell sx={tableHeadStyle}>
                <strong>Total Post</strong>
              </TableCell>
              <TableCell sx={tableHeadStyle}>
                <strong>Qualification</strong>
              </TableCell>
              <TableCell sx={tableHeadStyle}>
                <strong>Age Limit</strong>
              </TableCell>
              <TableCell sx={tableHeadStyle}>
                <strong>Relaxations</strong>
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {vacancyDetails.length > 0 ? (
              vacancyDetails.map((vacancy, index) => (
                <TableRow key={index}>
                  <TableCell sx={tableBodyStyle}>{vacancy.postName}</TableCell>
                  <TableCell sx={tableBodyStyle}>{vacancy.count}</TableCell>
                  <TableCell sx={tableBodyStyle}>
                    {vacancy.eligibility.education}
                  </TableCell>
                  <TableCell sx={tableBodyStyle}>
                    <strong>Min:</strong> {vacancy.eligibility.ageLimit.min},{" "}
                    <strong>Max:</strong> {vacancy.eligibility.ageLimit.max}
                  </TableCell>
                  <TableCell sx={tableBodyStyle}>
                    {vacancy.eligibility.relaxation}
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={5}
                  style={{ textAlign: "center", padding: "20px" }}
                >
                  No vacancy details available
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </VacancyDetailsMainContainer>
  );
};

export default VacancyDetails;

// ✅ Styled Components
const VacancyDetailsMainContainer = styled("div")({
  width: "100%",
  height: "auto",
  padding: "20px",
});

const tableHeadStyle = {
  fontSize: "18px",
  fontFamily: "Manrope",
  fontWeight: 600,
};

const tableBodyStyle = {
  fontSize: "16px",
  fontFamily: "Manrope",
};
