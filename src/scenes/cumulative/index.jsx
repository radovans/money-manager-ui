import React from "react";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import Header from "components/Header";
import MonthlyBalanceLineChart from "components/charts/MonthlyBalanceLineChart";

const Cumulative = () => {
  const theme = useTheme();
  const isNonMediumScreens = useMediaQuery("(min-width: 1200px)");

  return (
    <Box m="1.5rem 2.5rem">
      <Header title="CUMULATIVE BALANCE" subtitle="Cumulative balance by month" />
      <Box
        mt="20px"
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="160px"
        gap="20px"
        sx={{
          "& > div": { gridColumn: isNonMediumScreens ? undefined : "span 12" },
        }}
      >
        <Box
          gridColumn="span 12"
          gridRow="span 4"
          backgroundColor={theme.palette.background.alt}
          p="1.5rem"
          borderRadius="0.55rem"
        >
          <MonthlyBalanceLineChart />
        </Box>
      </Box>
    </Box>
  );
};

export default Cumulative;
