import React from "react";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import Header from "components/Header";
import YearlyExpensesLineChart from "components/charts/YearlyExpensesLineChart";

const Expenses = () => {
  const theme = useTheme();
  const isNonMediumScreens = useMediaQuery("(min-width: 1200px)");

  return (
    <Box m="1.5rem 2.5rem">
      <Header title="EXPENSES" subtitle="Expenses by month" />
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
          <YearlyExpensesLineChart />
        </Box>
      </Box>
    </Box>
  );
};

export default Expenses;
