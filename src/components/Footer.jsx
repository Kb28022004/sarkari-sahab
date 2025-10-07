"use client";

import React from "react";
import { styled } from "@mui/material";
import DynamicButton from "./DynamicButton";
import JobIcon from '../../../public/jobIcon.svg'
import Image from "next/image";

// Footer link data
const footerLinks = [
  {
    title: "Company",
    links: ["Result", "Admit Card", "Jobs", "For candidates"],
  },
  {
    title: "Job Categories",
    links: ["Board Result", "Admit Card", "Scholarship", "Education"],
  },
];

const Footer = () => {
  return (
    <FooterContainer>
      {/* Top section */}
      <TopSection>
        <div>
            <div style={{display:"flex", alignItems:"center", gap:"15px"}}>
                <Image src={JobIcon} alt="JobIcon" height={40} width={40}/>
                          <h2>Job</h2>
            </div>
          <p style={{width:"250px"}}>
            Quis enim pellentesque viverra tellus eget malesuada facilisis. Congue
            nibh vivamus aliquet nunc mauris dui nullam et.
          </p>
        </div>

        {footerLinks.map((section, idx) => (
          <div key={idx}>
            <h2>{section.title}</h2>
            {section.links.map((link, i) => (
              <Link key={i}>{link}</Link>
            ))}
          </div>
        ))}

        <div>
          <h2>Newsletter</h2>
          <p style={{width:"200px"}}>Eu nunc pretium vitae platea. Non netus elementum vulputate</p>
          <DynamicButton text="View Your Dream" color="#18BC51" textColor="white" padding="8px 50px"/>
        </div>
      </TopSection>

      {/* Bottom section */}
      <BottomSection>
        <div>© Copyright Job Portal 2025.</div>
        <div style={{display:"flex", gap: "20px"}}>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
        </div>
      </BottomSection>
    </FooterContainer>
  );
};

export default Footer;

// ✅ Styled Components
const FooterContainer = styled("footer")({
  width: "88vw",
  backgroundColor: "#1E1E23",
  color: "#fff",
  padding: "40px 80px",
  display: "flex",
  flexDirection: "column",
  gap: "40px",
});

const TopSection = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  flexWrap: "wrap",
  gap: "20px",

  "& h2": {
    marginBottom: "12px",
    fontSize: "18px",
  },
  "& p": {
    fontSize: "14px",
    lineHeight: "1.6",
  },
});

const Link = styled("a")({
  display: "block",
  marginBottom: "8px",
  color: "#fff",
  cursor: "pointer",
  textDecoration: "none",

  "&:hover": {
    color: "#8CFB71",
  },
});

const BottomSection = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  borderTop: "1px solid #333",
  paddingTop: "20px",
  fontSize: "14px",
});
