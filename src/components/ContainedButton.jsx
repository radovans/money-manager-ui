import React from "react";
import { Button, useTheme } from "@mui/material";

const ContainedButton = ({
  text,
  icon,
  onClick,
  disabled = false,
  marginLeft,
}) => {
  const theme = useTheme();

  return (
    <Button
      sx={{
        backgroundColor: theme.palette.secondary.light,
        color: theme.palette.background.alt,
        fontSize: "14px",
        fontWeight: "bold",
        padding: "10px 20px",
        ml: { marginLeft },
      }}
      onClick={onClick}
      variant="contained"
      disabled={disabled}
    >
      {icon}
      {text}
    </Button>
  );
};

export default ContainedButton;
