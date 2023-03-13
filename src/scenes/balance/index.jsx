import React from "react";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import Header from "components/Header";
import YearlyBalanceLineChart from "components/charts/YearlyBalanceLineChart";
import FlexBetween from "components/FlexBetween";
import TotalBox from "components/TotalBox";
import { useGetDashboardQuery, useGetYearlyStatisticsQuery } from "state/api";

const Balance = () => {
  const theme = useTheme();
  const isNonMediumScreens = useMediaQuery("(min-width: 1200px)");

  const { data, isLoading } = useGetYearlyStatisticsQuery({
    salaryOnly: false
  });

  const { data : dashboard } = useGetDashboardQuery();

  return (
    <Box m="1.5rem 2.5rem">
      <FlexBetween>
        <Header title="BALANCE" subtitle="Balance by month" />
        <TotalBox
          title="Total Balance"
          value={dashboard?.totalIncomeExpenseStatement?.formattedBalance}
        />
      </FlexBetween>
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
          <YearlyBalanceLineChart data={data} isLoading={isLoading} />
        </Box>
      </Box>
    </Box>
  );
};

export default Balance;
