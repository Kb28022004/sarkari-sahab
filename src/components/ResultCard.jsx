"use client";
import React from "react";
import { styled } from "@mui/material"; 
import resultIcon from '../../public/resultIcon.svg'
import Image from "next/image";
import DynamicButton from "./DynamicButton";

const ResultCard = ({title,date}) => {
  return (
    <ResultCardContainer>
     <div style={{display:"flex",flexDirection:"column",gap:"14px"}}>
        <h3>{title || "djakfjkax"}</h3>
   <p style={{padding:"5px",backgroundColor:"#E7F6EA",color:"#0BA02C",borderRadius:"5px"}} >djkafjda</p>
   <Image src={resultIcon} />


     </div>
     <div style={{display:"flex",flexDirection:"column",gap:"14px"}} >
        <p>{date || "dfkasfjd"}</p>
        <DynamicButton text="View Result" color="#E5F7EA"  borderColor="#18BC51" />
     </div>
    </ResultCardContainer>
  );
};

export default ResultCard;

// ✅ Styled Component
const ResultCardContainer = styled("div")({
  width: "450px",
  height: "auto",
  background: "linear-gradient(to right, #FFF6E6, #FFFFFF)",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "12px 16px",
  borderRadius: "12px",
  boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
  cursor: "pointer",
  transition: "0.3s ease-in-out",
border: "1px solid", // thickness matters
 borderTop: "1px solid #8CFB71",    // green
  borderRight: "1px solid #1D27EE",  // blue
  borderLeft: "1px solid #1D27EE",   // blue
  borderBottom: "1px solid #E60D0D",
  "&:hover": {
    transform: "translateY(-3px)",
    boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
  },
});
