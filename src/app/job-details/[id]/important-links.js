"use client";

import { Card, CardContent, Typography, Button, Box } from "@mui/material";
import DescriptionIcon from "@mui/icons-material/Description";
import LaunchIcon from "@mui/icons-material/Launch";
import React from "react";

const ImportantLinks = () => {
  // Temporary mock data — replace later with API data or props
  const importantLinks = {
    officialNotification:
      "https://example.com/official-notification.pdf",
    applyOnline: "https://example.com/apply-online",
  };

  const linksData = [
    {
      title: "Official Notification",
      icon: <DescriptionIcon sx={{ fontSize: 50, color: "#ff5722" }} />,
      url: importantLinks.officialNotification,
      buttonText: "View PDF",
      color: "primary",
    },
    {
      title: "Apply Online",
      icon: <LaunchIcon sx={{ fontSize: 50, color: "#4caf50" }} />,
      url: importantLinks.applyOnline,
      buttonText: "Apply Now",
      color: "success",
    },
  ];

  return (
    <Box
      component="section"
      sx={{
        minHeight: "80vh",
        background: "linear-gradient(135deg, #f9fafb, #e3f2fd)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: { xs: "20px", md: "40px" },
      }}
    >
      <Typography
        variant="h4"
        sx={{
          mb: 4,
          fontWeight: "bold",
          color: "#1976d2",
          textAlign: "center",
        }}
      >
        🔗 Important Links
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "20px",
          width: "100%",
          maxWidth: "900px",
        }}
      >
        {linksData.map((link, index) => (
          <Card
            key={index}
            sx={{
              boxShadow: 4,
              borderRadius: 3,
              transition: "0.3s",
              "&:hover": { transform: "scale(1.05)", boxShadow: 8 },
            }}
          >
            <CardContent sx={{ textAlign: "center" }}>
              {link.icon}
              <Typography
                variant="h6"
                sx={{ mt: 2, mb: 2, fontFamily: "Manrope" }}
              >
                {link.title}
              </Typography>
              <Button
                variant="contained"
                color={link.color}
                endIcon={<LaunchIcon />}
                href={link.url || "#"}
                target="_blank"
                sx={{
                  borderRadius: "20px",
                  fontWeight: "bold",
                  textTransform: "none",
                }}
                disabled={!link.url}
                aria-label={`Go to ${link.title}`}
              >
                {link.buttonText}
              </Button>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default ImportantLinks;
