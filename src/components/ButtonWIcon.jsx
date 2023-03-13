import React from "react";
import { Button, useTheme } from "@mui/material";

const ButtonWIcon = ({ text, icon, onClick, disabled = false, link }) => {
  const theme = useTheme();
  return (
    <Button
      sx={{
        backgroundColor: theme.palette.secondary.light,
        color: theme.palette.background.alt,
        fontSize: "14px",
        fontWeight: "bold",
        padding: "10px 20px",
      }}
      onClick={onClick}
      variant="contained"
      disabled={disabled}
    >
      {icon}
      {text}
      {link}
    </Button>
  );
};

export default ButtonWIcon;
