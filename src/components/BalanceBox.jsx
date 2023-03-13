import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import FlexBetween from "./FlexBetween";
import ProgressCircle from "./ProgressCircle";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";

const BalanceBox = ({
  title,
  value,
  increase,
  progress,
  description,
  icon,
}) => {
  const theme = useTheme();
  return (
    <Box
      gridColumn="span 4"
      gridRow="span 1"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      p="1.25rem 1rem"
      flex="1 1 100%"
      backgroundColor={theme.palette.background.alt}
      borderRadius="0.55rem"
    >
      <FlexBetween>
        <Box flexDirection="row" alignItems="left" display="flex">
          <AccountBalanceWalletOutlinedIcon
            sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
          />
          <Typography
            variant="h4"
            fontWeight="bold"
            style={{ marginTop: "0.3rem", marginLeft: "0.5rem" }}
            sx={{ color: theme.palette.secondary[300] }}
          >
            {title}
          </Typography>
        </Box>
        <ProgressCircle progress={progress} />
      </FlexBetween>

      <Typography
        variant="h3"
        fontWeight="600"
        sx={{ color: theme.palette.chart[300] }}
      >
        {value}
      </Typography>
      <FlexBetween gap="1rem">
        <Typography variant="h6" sx={{ color: theme.palette.secondary[300] }}>
          {description}
        </Typography>
        <Typography
          variant="h5"
          fontStyle="italic"
          sx={{ color: theme.palette.secondary.light }}
        >
          {increase}
        </Typography>
      </FlexBetween>
    </Box>
  );
};

export default BalanceBox;
