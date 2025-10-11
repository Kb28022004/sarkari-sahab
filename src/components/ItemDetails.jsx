"use client";
import styled from "@emotion/styled";
import DynamicButton from "./DynamicButton";
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";
import CurrencyRupeeOutlinedIcon from "@mui/icons-material/CurrencyRupeeOutlined";
import { useState } from "react";

const tabs = ["Vacancy Details", "Selection Process", "Important Links"];

const ItemDetails = ({ data }) => {
  const jobData = data || {
    title: "Sample Job Title",
    description: "This is a sample description for the job.",
    totalVacancies: 50,
    importantDates: {
      startDate: "2025-10-10",
      endDate: "2025-11-10",
    },
    applicationFee: {
      general: 100,
      obc: 50,
      sc: 25,
      female: 0,
    },
    importantLinks: {
      applyOnline: "#",
      syllabus: "#",
      notification: "#",
    },
    vacancyDetails: "Vacancy details content goes here.",
    selectionProcess: "Selection process content goes here.",
    importantLinksContent: "Important links content goes here.",
  };

  const [activeTab, setActiveTab] = useState(0);

  const renderTabContent = () => {
    switch (activeTab) {
      case 0:
        return <p>{jobData.vacancyDetails}</p>;
      case 1:
        return <p>{jobData.selectionProcess}</p>;
      case 2:
        return <p>{jobData.importantLinksContent}</p>;
      default:
        return null;
    }
  };

  return (
    <JobDetailsMainContainer>
      {/* Header */}
    <FirstSection>
            <TitleSection>
              <Title as="h1">jknkj</Title>
              <Description>jknkj</Description>
              <SubTitle>
                dakfmldka
              </SubTitle>
            </TitleSection>
            <LastDate>
              Last Date:&nbsp;
              <strong style={{ color: "rgb(210, 76, 19)" }}>
                dakfdamkl
              </strong>
            </LastDate>
          </FirstSection>

      {/* Apply Button */}
      <SecondSection>
        <DynamicButton href={jobData.importantLinks.applyOnline} color="#229CB8" text="Apply Now" />
      </SecondSection>

      {/* Info Cards */}
      <ThirdSection>
        <InfoCard>
          <UpperSection><DateRangeOutlinedIcon /><strong>Important Dates</strong></UpperSection>
          <LowerSection>
            <p>Start Date: <strong>{new Date(jobData.importantDates.startDate).toLocaleDateString()}</strong></p>
            <p>End Date: <strong>{new Date(jobData.importantDates.endDate).toLocaleDateString()}</strong></p>
          </LowerSection>
        </InfoCard>

        <InfoCard>
          <UpperSection><CurrencyRupeeOutlinedIcon /><strong>Application Fee</strong></UpperSection>
          <LowerSection>
            <p>General: <strong>₹ {jobData.applicationFee.general}</strong></p>
            <p>OBC: <strong>₹ {jobData.applicationFee.obc}</strong></p>
            <p>SC/ST: <strong>₹ {jobData.applicationFee.sc}</strong></p>
            <p>Female: <strong>₹ {jobData.applicationFee.female}</strong></p>
          </LowerSection>
        </InfoCard>
      </ThirdSection>

      {/* Tabs */}
      <TabsContainer>
        {tabs.map((tab, i) => (
          <Tab
            key={i}
            active={i === activeTab}
            onClick={() => setActiveTab(i)}
          >
            {tab}
          </Tab>
        ))}
      </TabsContainer>

      {/* Tab Content */}
      <TabContent>
        {renderTabContent()}
      </TabContent>
    </JobDetailsMainContainer>
  );
};

export default ItemDetails;

/* Styled Components */
const JobDetailsMainContainer = styled("div")({
  width: "100%",
  padding: "20px 60px",
  display: "flex",
  flexDirection: "column",
  gap: "40px",
  boxSizing: "border-box",
  marginTop:"40px",


  "@media (max-width: 768px)": {
    padding: "20px",
    gap: "25px",
  },
});


const FirstSection = styled("section")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexWrap: "wrap",
  gap: "20px",
});
const SecondSection = styled("div")({ display: "flex", gap: "20px" });
const ThirdSection = styled("div")({ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px" });
const InfoCard = styled("article")({ backgroundColor: "#fff", padding: "20px", borderRadius: "10px", boxShadow: "0 4px 10px rgba(0,0,0,0.1)" });
const UpperSection = styled("div")({ display: "flex", alignItems: "center", gap: "10px" });
const LowerSection = styled("div")({ display: "flex", flexDirection: "column", gap: "8px" });
const TitleSection = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "1px",
  backgroundColor:"red"
});
const LastDate = styled("div")({ backgroundColor: "rgba(231,225,225,0.58)", padding: "15px 20px", borderRadius: "8px", font: "600 18px Manrope" });
const Title = styled("h1")({ font: "600 30px Manrope" });
const Description = styled("p")({ font: "400 20px Manrope" });
const SubTitle = styled("p")({ font: "500 18px Roboto" });

const TabsContainer = styled("div")({ display: "flex", gap: "20px", flexWrap: "wrap", marginTop: "20px" });
const Tab = styled("button")(({ active }) => ({
  padding: "10px 20px",
  fontWeight: active ? "700" : "500",
  backgroundColor: active ? "#229CB8" : "#f0f0f0",
  color: active ? "#fff" : "#000",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  transition: "all 0.3s ease",
}));
const TabContent = styled("div")({ marginTop: "20px", backgroundColor: "#f8f8f8", padding: "20px", borderRadius: "10px" });
