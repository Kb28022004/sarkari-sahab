"use client";
import React from "react";
import { styled, Box, InputBase } from "@mui/material";
import JobIcon from '../../public/jobIcon.svg';
import resultIcon from '../../public/resultIcon.svg';
import admitCardIcon from '../../public/admitCard.svg';
import planeIcon from '../../public/plane.svg';
import bulbIcon from '../../public/bulb.svg';
import SearchIcon from "@mui/icons-material/Search";
import Image from 'next/image';
import DynamicButton from "./DynamicButton";

const HeroSection = ({ jobCount, admitCardCount, resultCount }) => {
    return (
        <HeroContainer>
            {/* Plane icon + title */}
            <HeroTitleContainer>
                <PlaneImageWrapper>
                    <Image src={planeIcon} alt="Plane Icon" width={90} height={80} />
                </PlaneImageWrapper>
                <HeroTitle>
                    Get your dream job with <br />
                    <Highlight>Find Jobs.</Highlight>
                </HeroTitle>
            </HeroTitleContainer>

            {/* Subtitle */}
            <HeroSubtitle>
                Stay updated with the latest government job notifications, exam results, admit cards, and recruitment updates across India. Search and find all relevant information in one place.
            </HeroSubtitle>

            {/* Search Bar */}
            <SearchContainer>   
                <SearchIcon />
                <SearchInput placeholder="Job Title, keywords..." />
                <DynamicButton
                    text={"Search"}
                    color="#000000"
                    borderRadius="25px"
                    padding="15px 50px"
                    sx={{ height: "100%" }} // full height to match input
                />
            </SearchContainer>

            {/* Bulb icon at right end */}
            <BulbImageWrapper>
                <Image src={bulbIcon} alt="Bulb Icon" width={130} height={130} />
            </BulbImageWrapper>

            {/* Stats */}
            <StatsContainer>
                <StatItem>
                    <Image src={JobIcon} height={30} width={30} alt="Jobs Icon" />
                    <StatText>
                        <strong>{jobCount || "20,320"}</strong> Jobs
                    </StatText>
                </StatItem>

                <StatItem>
                    <Image src={resultIcon} height={30} width={30} alt="Result Icon" />
                    <StatText>
                        <strong>{resultCount || "20,320"}</strong> Result
                    </StatText>
                </StatItem>

                <StatItem>
                    <Image src={admitCardIcon} height={30} width={30} alt="Admit Card Icon" />
                    <StatText>
                        <strong>{admitCardCount || "20,320"}</strong> Admit Card
                    </StatText>
                </StatItem>
            </StatsContainer>
        </HeroContainer>
    );
};

export default HeroSection;

// Container
const HeroContainer = styled(Box)({
    width: "100%",
    minHeight: "70vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "1rem",
    textAlign: "center",
    backgroundColor: "#f7f9fc",
    position: "relative", // for absolute bulb icon
});

// Plane + Title
const HeroTitleContainer = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "2rem",
    justifyContent: "center",
    marginBottom: "1rem",
    '@media(max-width:768px)': {
        flexDirection: "column",
        gap: "1rem",
    },
});

const PlaneImageWrapper = styled(Box)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    marginLeft: "-8rem",
    marginTop: "12rem"
});

const HeroTitle = styled("h1")({
    fontSize: "6rem",
    fontWeight: 600,
    lineHeight: 1.2,
    marginBottom: "0.8rem",
    color: "#0d1b2a",
    '@media(max-width:1024px)': {
        fontSize: "2.5rem",
    },
    '@media(max-width:768px)': {
        fontSize: "2rem",
    },
    '@media(max-width:480px)': {
        fontSize: "1.6rem",
    },
});

const Highlight = styled("span")({
    display: "block",
    color: "#10BC4C",
});

// Subtitle
const HeroSubtitle = styled("p")({
    fontSize: "1.2rem",
    color: "#333",
    marginBottom: "1.5rem",
    maxWidth: "500px",
    '@media(max-width:768px)': {
        fontSize: "0.9rem",
        maxWidth: "90%",
    },
    '@media(max-width:480px)': {
        fontSize: "0.8rem",
    },
});

// Search Bar
const SearchContainer = styled(Box)({
    display: "flex",
    width: "100%",
    height:"5   0px",
    maxWidth: "820px",
    marginBottom: "2.5rem",
    backgroundColor: "#fff",
    paddingLeft:"30px", 
    borderRadius: "50px",
    overflow: "hidden",
    boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
    alignItems: "center",
    '@media(max-width:768px)': {
        maxWidth: "90%",
    },
});

const SearchInput = styled(InputBase)({
    flex: 1,
    padding: "0.8rem 1rem 0.6rem 2.5rem",
    fontSize: "0.9rem",
    '@media(max-width:480px)': {
        padding: "0.5rem 0.8rem 0.5rem 2rem",
        fontSize: "0.8rem",
    },
});


// Bulb Icon
const BulbImageWrapper = styled(Box)({
    position: "absolute",
    bottom: "15%",
    right: "6rem",
    zIndex: 1,
    '@media(max-width:768px)': {
        top: "10%",
        right: "1rem",
    },
    '@media(max-width:480px)': {
        top: "5%",
        right: "0.5rem",
        width: "50px",
        height: "50px",
    },
});

// Stats
const StatsContainer = styled(Box)({
    display: "flex",
    gap: "2rem",
    justifyContent: "center",
    flexWrap: "wrap",
    '@media(max-width:480px)': {
        gap: "1rem",
    },
});

const StatItem = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    color: "#0d1b2a",
});

const StatText = styled("span")({
    fontSize: "1.2rem"
    , lineHeight: "1.2    ",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    '@media(max-width:480px)': {
        fontSize: "0.8rem",
    },
});
