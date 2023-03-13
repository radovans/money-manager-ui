import React from "react";
import { Box, Typography, useTheme } from "@mui/material";

const TotalBox = ({ title, value }) => {
  const theme = useTheme();
  return (
    <Box
      width="15rem"
      p="0.25rem 2rem 0.25rem 2rem"
      backgroundColor={theme.palette.background.alt}
      borderRadius="0.55rem"
      align="center"
    >
      <Typography
        variant="h6"
        fontWeight="bold"
        style={{ marginTop: "0.3rem"}}
        sx={{ color: theme.palette.secondary[300] }}
      >
        {title}
      </Typography>

      <Typography
        variant="h5"
        fontWeight="600"
        sx={{ color: theme.palette.secondary[500] }}
      >
        {value}
      </Typography>
    </Box>
  );
};

export default TotalBox;
