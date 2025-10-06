"use client"

import { styled } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import JobIcon from '../../../public/jobIcon.svg'
import DynamicButton from './DynamicButton'

const JobCard = ({heading,date}) => {
  return (
    <JobCardContainer>
        <Image src={JobIcon} />
        <div>
            <h3>{heading || "ksdfakdsa"}</h3>
            <p>{date || "dnjkanfdka"}</p>
        </div>
        <DynamicButton text="Job Details" textColor="#18BC51" color="#094F21" />
    </JobCardContainer>
  )
}

export default JobCard


const JobCardContainer=styled("div")({
  width: "550px",
  height: "auto",
  backgroundColor: "#FFFFFF",

  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "8px",
  borderRadius: "12px",

})