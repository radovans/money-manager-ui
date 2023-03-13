import React from "react";
import FlexBetween from "components/FlexBetween";
import Header from "components/Header";
import { DownloadOutlined } from "@mui/icons-material";
import { Box, Button, useTheme, useMediaQuery } from "@mui/material";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import DashboardTransactions from "components/DashboardTransactions";
import { useGetDashboardQuery, useGetYearlyStatisticsQuery } from "state/api";
import StatBox from "components/StatBox";
import BalanceBox from "components/BalanceBox";
import YearlyBalanceLineChart from "components/charts/YearlyBalanceLineChart";
import CategoriesDonutChart from "components/charts/CategoriesDonutChart";

const Dashboard = () => {
  const theme = useTheme();
  const isNonMediumScreens = useMediaQuery("(min-width: 1200px)");

  const { data } = useGetDashboardQuery();
  
  const { data : yearlyStatistics, isLoading } = useGetYearlyStatisticsQuery({
    salaryOnly: false
  });

  return (
    <Box m="1.5rem 2.5rem">
      <FlexBetween>
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />

        <Box>
          <Button
            sx={{
              backgroundColor: theme.palette.secondary.light,
              color: theme.palette.background.alt,
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlined sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>
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
        {/* ROW 1 */}
        <BalanceBox
          title="Balance"
          value={data?.totalIncomeExpenseStatement?.formattedBalance}
          increase={data?.totalIncomeExpenseStatement?.formattedSavingsRatio}
          description="Savings ratio"
          progress={data?.totalIncomeExpenseStatement?.savingsRatio}
        />
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={theme.palette.background.alt}
          p="1rem"
          borderRadius="0.55rem"
        >
          <YearlyBalanceLineChart data={yearlyStatistics} isLoading={isLoading} isDashboard={true} />
        </Box>
        <StatBox
          title="Year to date"
          value={data?.yearToDateIncomeExpenseStatement?.formattedBalance}
          increase={
            data?.yearToDateIncomeExpenseStatement?.formattedSavingsRatio
          }
          description="Savings ratio"
          icon={
            <AccountBalanceWalletOutlinedIcon
              sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
            />
          }
          progress={data?.yearToDateIncomeExpenseStatement?.savingsRatio}
        />
        <StatBox
          title="Last year"
          value={data?.lastYearIncomeExpenseStatement?.formattedBalance}
          increase={data?.lastYearIncomeExpenseStatement?.formattedSavingsRatio}
          description="Savings ratio"
          icon={
            <AccountBalanceWalletOutlinedIcon
              sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
            />
          }
          progress={data?.lastYearIncomeExpenseStatement?.savingsRatio}
        />

        {/* ROW 2 */}
        <Box
          gridColumn="span 8"
          gridRow="span 2"
        >
          <DashboardTransactions />
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={theme.palette.background.alt}
          p="1.5rem"
          borderRadius="0.55rem"
        >
          <CategoriesDonutChart isDashboard={true} />
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
