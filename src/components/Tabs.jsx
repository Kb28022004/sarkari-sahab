"use client";
import Link from "next/link";
import styled from "@emotion/styled";
import { usePathname } from "next/navigation";

const switchingTabs = [
  { tabName: "Vacancy Details", path: "vacancy-details" },
  { tabName: "Selection Process", path: "selection-process" },
  { tabName: "Important Links", path: "important-links" },
];

const Tabs = ({ jobId }) => {
  const pathname = usePathname();

  return (
    <TabContainer>
      {switchingTabs.map((tab, i) => {
        const isActive = pathname.endsWith(tab.path);
        return (
          <TabLink key={i} href={`/job-details/${jobId}/${tab.path}`} active={isActive ? 1 : 0}>
            {tab.tabName}
          </TabLink>
        );
      })}
    </TabContainer>
  );
};

export default Tabs;

const TabContainer = styled("div")({ display: "flex", gap: "20px", marginTop: "20px" });
const TabLink = styled(Link)(({ active }) => ({
  font: "600 18px Manrope",
  color: active ? "rgba(207,94,28,1)" : "rgb(135,90,90)",
  textDecoration: "none",
}));
