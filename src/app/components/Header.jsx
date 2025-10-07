"use client";

import React from "react";
import { styled } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TelegramIcon from "@mui/icons-material/Telegram";

const listData = [
  { name: "Home" },
  { name: "Job" },
  { name: "Result" },
  { name: "Admit Card" },
  { name: "Admission" },
  { name: "Answer Key" },
];

const Header = () => {
  return (
    <HeaderMainContainer>
      {/* Logo or title */}
      <HeaderTitle>Sarkari Sahab</HeaderTitle>

      {/* Navigation Menu */}
      <NavList>
        {listData.map((item, index) => (
          <NavItem key={index}>{item.name}</NavItem>
        ))}
      </NavList>

      {/* Social Icons */}
      <SocialIcons>
        <FacebookIcon className="icon" />
        <WhatsAppIcon className="icon" />
        <TelegramIcon className="icon" />
      </SocialIcons>
    </HeaderMainContainer>
  );
};

export default Header;

//
// Styled Components
//
const HeaderMainContainer = styled("div")({
  width: "80%",
  height: "auto",
  backgroundColor: "#1E1E23",
  margin: "30px auto 0",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "1px 20px",
  borderRadius: "32px",
  color: "#fff",
  boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
});

const HeaderTitle = styled("p")({
  fontSize: "22px",
  fontWeight: 700,
  letterSpacing: "1px",
  color: "#fff",
});

const NavList = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: "20px",
});

const NavItem = styled("p")({
  fontSize: "16px",
  fontWeight: 500,
  color: "#fff",
  cursor: "pointer",
  transition: "all 0.3s ease",
  "&:hover": {
    color: "#18BC51",
  },
});

const SocialIcons = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: "12px",
  "& .icon": {
    fontSize: "24px",
    color: "#fff",
    cursor: "pointer",
    transition: "color 0.3s ease",
    "&:hover": {
      color: " #18BC51",
    },
  },
});
