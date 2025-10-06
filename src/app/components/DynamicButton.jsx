"use client";
import { Button, styled } from "@mui/material";

const DynamicButton = ({
  text,
  color,
  textColor,
  startIcon,
  endIcon,
  variant,
  borderColor,
  component,
  onClick,
  type,
  sx,
  to,
  borderRadius,
  padding, // ✅ new dynamic prop
}) => {
  return (
    <CustomButtonContainer
      variant={variant}
      startIcon={startIcon}
      endIcon={endIcon}
      customcolor={color}
      textColor={textColor}
      borderColor={borderColor}
      onClick={onClick}
      to={to}
      sx={sx}
      type={type}
      component={component}
      borderRadius={borderRadius}
      padding={padding} // pass padding to styled component
    >
      {text}
    </CustomButtonContainer>
  );
};

export default DynamicButton;

const CustomButtonContainer = styled(Button)(
  ({ customcolor, textColor, borderColor, borderRadius, padding }) => ({
    borderRadius: borderRadius || "8px",
    width: "auto",
    height: "auto",
    padding: padding || "8px 12px", // ✅ dynamic padding with default
    backgroundColor: customcolor,
    fontSize: "12px",
    fontWeight: 400,
    fontFamily: "Roboto",
    textTransform: "capitalize",
    color: textColor || "#fff",
    transition: "transform 0.3s ease",
    border: `1px solid ${borderColor}`,
    "&:hover": {
      transform: "scale(1.1)",
    },
  })
);
