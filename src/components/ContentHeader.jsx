"use client";
import styled from "@emotion/styled";
import SmallTitleCard from "./SmallTitleCard";

const ContentHeader = ({ title = [] }) => {
  return (
    <HeaderContainer>
 

    

      <TitleCard>
        {title.map((t, i) => (
          <SmallTitleCard key={i} title={t} />
        ))}
      </TitleCard>
    </HeaderContainer>
  );
};

export default ContentHeader;

const HeaderContainer = styled("div")({ display: "flex", flexDirection: "column", gap: "20px", padding: "20px" });

const TitleCard = styled("div")({ display: "flex", gap: "20px", flexWrap: "wrap" });
