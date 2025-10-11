"use client";
import styled from "@emotion/styled";
import React from "react";

const HeadingSubHeading = ({ heading, subheading }) => {
  return (
    <HeadingSubHeadingContainer>
      <div style={{width:"800px" }}>
        <h1 style={{textAlign:"center"}}>{heading || "heading"}</h1>
        <p style={{textAlign:"center"}}>
          {subheading ||
            "At eu lobortis pretium tincidunt amet lacus ut aenean aliquet. Blandit a massa elementum id scelerisque rhoncus. Lectus dolor blandit massa pretium id ultrices phasellus tortor. Risus risus lectus augue justo lacus viverra sit. Ultricies purus dolor viverra mi laoreet at cursus justo. Ultrices purus diam egestas amet faucibus tempor blandit. Elit velit mauris aliquam est diam. Leo sagittis consectetur diam morbi erat aenean. Vulputate praesent congue faucibus in euismod feugiat euismod volutpat. Adipiscing risus amet phasellus imperdiet eget vel pulvinar. Risus in felis faucibus sit. Scelerisque consequat iaculis mauris amet vel felis id tincidunt nunc."}
        </p>
      </div>
    </HeadingSubHeadingContainer>
  );
};

export default HeadingSubHeading;

const HeadingSubHeadingContainer = styled("div")({
  width: "100vw",
  height: "auto",
  // background: "linear-gradient(to right, #FFF6E6, #FFFFFF)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "0px 8px",
});
