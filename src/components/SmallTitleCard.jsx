"use client"

import styled from '@emotion/styled'
import Link from 'next/link'
import React from 'react'

const SmallTitleCard = ({ backgroundColor, title, href }) => {
  // If href is provided, render Link, otherwise just a div
  if (href) {
    return (
      <MainLink href={href} backgroundColor={backgroundColor}>
        <Title>{title}</Title>
      </MainLink>
    )
  }

  return (
    <MainContainer backgroundColor={backgroundColor}>
      <Title>{title}</Title>
    </MainContainer>
  )
}

export default SmallTitleCard

// Card without link
const MainContainer = styled("div")(({ backgroundColor }) => ({
  width: "300px",
  height: "100px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "25px",
  backgroundColor: backgroundColor || "gray",
  textDecoration: "none",
  transition: "transform 0.5s ease",

  "&:hover": {
    transform: "scale(1.1)",
  },
}))

// Card as link
const MainLink = styled(Link)(({ backgroundColor }) => ({
  width: "300px",
  height: "100px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "25px",
  backgroundColor: backgroundColor || "gray",
  textDecoration: "none",
  transition: "transform 0.5s ease",

  "&:hover": {
    transform: "scale(1.1)",
  },
}))

const Title = styled("p")({
  font: "500 25px Roboto",
  color: "#ffffff",
});
