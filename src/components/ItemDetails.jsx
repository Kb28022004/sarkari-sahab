"use client";

import styled from "@emotion/styled";
import DynamicButton from "./DynamicButton";
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";
import CurrencyRupeeOutlinedIcon from "@mui/icons-material/CurrencyRupeeOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import BuildOutlinedIcon from "@mui/icons-material/BuildOutlined";
import DescriptionIcon from "@mui/icons-material/Description";
import LaunchIcon from "@mui/icons-material/Launch";
import Link from "next/link";
import { useState } from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Button,
  Card,
  CardContent,
  Box,
} from "@mui/material";

const tabs = ["Vacancy Details", "Selection Process", "Important Links"];

const ItemDetails = ({ data }) => {
  const [activeTab, setActiveTab] = useState(0);

  const formatDate = (dateStr) =>
    dateStr ? new Date(dateStr).toLocaleDateString() : "N/A";

  const renderTabContent = () => {
    switch (activeTab) {
      /** ---------- VACANCY DETAILS TAB ---------- */
      case 0:
        return (
          <StyledTableContainer component={Paper}>
            <Table>
              <TableHead sx={{ backgroundColor: "#eaf8f7" }}>
                <TableRow>
                  <TableCell sx={headStyle}>Post Name</TableCell>
                  <TableCell sx={headStyle}>Total Post</TableCell>
                  <TableCell sx={headStyle}>Qualification</TableCell>
                  <TableCell sx={headStyle}>Age Limit</TableCell>
                  <TableCell sx={headStyle}>Relaxations</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.vacancies?.length ? (
                  data.vacancies.map((v, i) => (
                    <TableRow key={i}>
                      <TableCell sx={bodyStyle}>{v.postName || "N/A"}</TableCell>
                      <TableCell sx={bodyStyle}>{v.count || "N/A"}</TableCell>
                      <TableCell sx={bodyStyle}>
                        {v.eligibility?.education || "N/A"}
                      </TableCell>
                      <TableCell sx={bodyStyle}>
                        <strong>Min:</strong> {v.eligibility?.ageLimit?.min || "N/A"} |{" "}
                        <strong>Max:</strong> {v.eligibility?.ageLimit?.max || "N/A"}
                      </TableCell>
                      <TableCell sx={bodyStyle}>
                        {v.eligibility?.relaxation || "N/A"}
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={5} align="center">
                      No vacancy details available
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </StyledTableContainer>
        );

      /** ---------- SELECTION PROCESS TAB ---------- */
      case 1:
        return (
          <SelectionProcessContainer>
            <Typography
              variant="h5"
              sx={{ fontWeight: "bold", color: "#18BC51", mb: 3 }}
            >
              Selection Process
            </Typography>

            {data.selectionProcess?.length ? (
              data.selectionProcess.map((step, index) => (
                <ProcessCard key={index} elevation={3}>
                  <IconContainer>
                    {step.step.toLowerCase().includes("written") ? (
                      <AssignmentOutlinedIcon fontSize="large" sx={{color:"#18BC51"}}/>
                    ) : (
                      <BuildOutlinedIcon fontSize="large" sx={{color:"#18BC51"}}/>
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
          </SelectionProcessContainer>
        );

      /** ---------- IMPORTANT LINKS TAB ---------- */
      case 2:
        const importantLinks = data.importantLinks || {};
        const linksData = [
          {
            title: "Official Notification",
            icon: <DescriptionIcon sx={{ fontSize: 50, color: "#ff5722" }} />,
            url: importantLinks.officialNotification,
            buttonText: "View PDF",
            color: "success",
          },
          {
            title: "Apply Online",
            icon: <LaunchIcon sx={{ fontSize: 50, color: "#4caf50" }} />,
            url: importantLinks.applyOnline,
            buttonText: "Apply Now",
            color: "success",
          },
        ];

        return (
          <Box
            sx={{
              // background: "linear-gradient(135deg, #f9fafb, #e3f2fd)",
              backgroundColor:"#eaf8f7",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: { xs: "20px", md: "40px" },
              borderRadius: "10px",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                mb: 4,
                fontWeight: "bold",
                color: "#1976d2",
                textAlign: "center",
              }}
            >
              🔗 Important Links
            </Typography>

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "20px",
                width: "100%",
                maxWidth: "900px",
              }}
            >
              {linksData.map((link, index) => (
                <Card
                  key={index}
                  sx={{
                    boxShadow: 4,
                    borderRadius: 3,
                    transition: "0.3s",
                    "&:hover": { transform: "scale(1.05)", boxShadow: 8 },
                  }}
                >
                  <CardContent sx={{ textAlign: "center" }}>
                    {link.icon}
                    <Typography
                      variant="h6"
                      sx={{ mt: 2, mb: 2, fontFamily: "Manrope" }}
                    >
                      {link.title}
                    </Typography>
                    <Button
                      variant="contained"
                      color={link.color}
                      endIcon={<LaunchIcon />}
                      href={link.url || "#"}
                      target="_blank"
                      sx={{
                        borderRadius: "20px",
                        fontWeight: "bold",
                        textTransform: "none",
                      }}
                      disabled={!link.url}
                    >
                      {link.buttonText}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </Box>
          </Box>
        );

      default:
        return null;
    }
  };

  return (
    <Container>
      {/* Header */}
      <HeaderSection>
        <div style={{display:"flex", flexDirection:"column", gap:"15px", marginTop:"3rem"}} >
          <Title>{data.title}</Title>
          <Description>{data.description}</Description>
          <SubTitle>{data.department}</SubTitle>
        </div>

        <DateTag>
          Last Date:&nbsp;
          <strong style={{ color: "#d24c13" }}>
            {formatDate(data.importantDates?.endDate)}
          </strong>
        </DateTag>
      </HeaderSection>

      {/* Apply Button */}
      <ButtonWrapper>
        <DynamicButton
          href={data.importantLinks?.applyOnline}
          color="#229CB8"
          text="Apply Now"
        />
      </ButtonWrapper>

      {/* Info Cards */}
      <CardGrid>
        <InfoCard>
          <CardHeader>
            <DateRangeOutlinedIcon sx={{ color: "#229CB8" }} />
            <h3>Important Dates</h3>
          </CardHeader>
          <CardBody>
            <p>Start Date: {formatDate(data.importantDates?.startDate) }</p>
            <p>End Date: {formatDate(data.importantDates?.endDate) }</p>
            <p>Exam Date: {formatDate(data.importantDates?.examDate) }</p>
            <p>Result Date: {formatDate(data.importantDates?.resultDate) }</p>
          </CardBody>
        </InfoCard>

        <InfoCard>
          <CardHeader>
            <CurrencyRupeeOutlinedIcon sx={{ color: "#229CB8" }} />
            <h3>Application Fee</h3>
          </CardHeader>
          <CardBody>
            <p>General: ₹ {data.applicationFee?.general || "N/A"}</p>
            <p>OBC: ₹ {data.applicationFee?.obc || "N/A"}</p>
            <p>SC/ST: ₹ {data.applicationFee?.sc || "N/A"}</p>
            <p>Female: ₹ {data.applicationFee?.female || "N/A"}</p>
          </CardBody>
        </InfoCard>

        <InfoCard>
          <CardHeader>
            <SchoolOutlinedIcon sx={{ color: "#229CB8" }} />
            <h3>Total Vacancies</h3>
          </CardHeader>
          <CardBody>
            <h2>{data.totalVacancies || "N/A"} Posts</h2>
          </CardBody>
        </InfoCard>
      </CardGrid>

      {/* Tabs */}
      <Tabs>
        {tabs.map((tab, i) => (
          <TabButton key={i} active={i === activeTab} onClick={() => setActiveTab(i)}>
            {tab}
          </TabButton>
        ))}
      </Tabs>

      {/* Tab Content */}
      <TabContent>{renderTabContent()}</TabContent>
    </Container>
  );
};

export default ItemDetails;

/* ---------------- STYLES ---------------- */
const headStyle = { fontWeight: 600, fontSize: "17px", fontFamily: "Manrope" };
const bodyStyle = { fontSize: "15px", fontFamily: "Manrope" };

const Container = styled("div")({
  width: "100%",
  padding: "30px 60px",
  display: "flex",
  flexDirection: "column",
  gap: "40px",
  backgroundColor: "#fafafa",
  "@media (max-width: 768px)": {
    padding: "20px",
    gap: "25px",
  },
});

const HeaderSection = styled("section")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexWrap: "wrap",
  gap: "20px",
});

const Title = styled("h1")({
  font: "800 36px Roboto",
  color: "#222",
});

const Description = styled("p")({
  font: "400 18px Manrope",
  color: "#555",
});

const SubTitle = styled("p")({
  font: "500 16px Roboto",
  color: "#666",
});

const DateTag = styled("div")({
  backgroundColor: "#e9f5f4",
  padding: "10px 20px",
  borderRadius: "8px",
  font: "600 16px Manrope",
});

const ButtonWrapper = styled("div")({
  display: "flex",
  gap: "20px",
});

const CardGrid = styled("div")({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "20px",
});

const InfoCard = styled("article")({
  backgroundColor: "#fff",
  borderRadius: "12px",
  boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
  padding: "20px",
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: "0 6px 15px rgba(0,0,0,0.15)",
  },
});

const CardHeader = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "10px",
  "& h3": {
    font: "600 18px Manrope",
    color: "#222",
  },
});

const CardBody = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "6px",
  color: "#444",
  font: "400 15px Manrope",
});

const Tabs = styled("div")({
  display: "flex",
  gap: "15px",
  flexWrap: "wrap",
});

const TabButton = styled("button")(({ active }) => ({
  padding: "10px 20px",
  borderRadius: "8px",
  fontWeight: active ? "700" : "500",
  backgroundColor: active ? "#229CB8" : "#e0e0e0",
  color: active ? "#fff" : "#000",
  border: "none",
  cursor: "pointer",
  transition: "all 0.3s ease",
  "&:hover": {
    backgroundColor: active ? "#1b7f96" : "#cfd8dc",
  },
}));

const TabContent = styled("div")({
  backgroundColor: "#fff",
  padding: "25px",
  borderRadius: "10px",
  boxShadow: "0 3px 10px rgba(0,0,0,0.05)",
});

/* ---------- Selection Process styles ---------- */
const SelectionProcessContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
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
const StyledTableContainer = styled(TableContainer)({
  borderRadius: "10px",
  boxShadow: "0 3px 10px rgba(0,0,0,0.1)",
});
