import React, { useState, useEffect } from "react";
import { Box, Button, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import BarChart from "../../components/BarChart";
import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [statistics, setStatistics] = useState([]);

  var baseUrl = "http://localhost:8088/statistics";

  useEffect(() => {
    const fetchStatistics = async () => {
      await fetch(`${baseUrl}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      })
        .then((response) => {
          if (response.ok) {
            response.json().then((json) => {
              console.log(json);
              setStatistics(json);
            });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchStatistics();
  }, [baseUrl]);

  const [data, setData] = useState([]);

  var baseTransactionsUrl =
    "http://localhost:8088/transactions?size=20&sort=id&direction=desc";

  useEffect(() => {
    const fetchData = async () => {
      await fetch(`${baseTransactionsUrl}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      })
        .then((response) => {
          if (response.ok) {
            response.json().then((json) => {
              console.log(json);
              setData(json);
            });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchData();
  }, [baseTransactionsUrl]);

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Financial dashboard" />
        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
            onClick={() => {
              alert('ALL');
            }}
          
          >
            <CalendarMonthOutlinedIcon sx={{ mr: "10px" }} />
            All
          </Button>
          <Button
            style={{ marginLeft: ".5rem" }}
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <CalendarMonthOutlinedIcon sx={{ mr: "10px" }} />
            This year
          </Button>
          <Button
            style={{ marginLeft: ".5rem" }}
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <CalendarMonthOutlinedIcon sx={{ mr: "10px" }} />
            Last year
          </Button>
        </Box>
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 4"
          backgroundColor={colors.greenAccent[800]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title={statistics?.totalIncomeExpenseStatement?.formattedBalance}
            subtitle="Total Balance"
            progress={statistics?.totalIncomeExpenseStatement?.savingsRatio}
            increase={
              statistics?.totalIncomeExpenseStatement?.formattedSavingsRatio
            }
            icon={
              <AccountBalanceWalletOutlinedIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 4"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title={
              statistics?.yearToDateIncomeExpenseStatement?.formattedBalance
            }
            subtitle="Year to Date Balance"
            progress={
              statistics?.yearToDateIncomeExpenseStatement?.savingsRatio
            }
            increase={
              statistics?.yearToDateIncomeExpenseStatement
                ?.formattedSavingsRatio
            }
            icon={
              <AccountBalanceWalletOutlinedIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 4"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title={statistics?.lastYearIncomeExpenseStatement?.formattedBalance}
            subtitle="Last Year Balance"
            progress={statistics?.lastYearIncomeExpenseStatement?.savingsRatio}
            increase={
              statistics?.lastYearIncomeExpenseStatement?.formattedSavingsRatio
            }
            icon={
              <AccountBalanceWalletOutlinedIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        {/* ROW 2 */}
        <Box
          gridColumn="span 8"
          gridRow="span 3"
          backgroundColor={colors.primary[400]}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h4"
                fontWeight="bold"
                color={colors.grey[100]}
              >
                Monthly balance
              </Typography>
            </Box>
          </Box>
          <Box height="250px" m="0px 30px 0 30px">
            <LineChart isDashboard={true} />
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 3"
          backgroundColor={colors.primary[400]}
        >
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ padding: "30px 30px 0 30px" }}
          >
            Main categories
          </Typography>
          <Box height="250px" mt="-20px" m="0px 20px 0 14px">
            <BarChart isDashboard={true} />
          </Box>
        </Box>

        {/* ROW 3 */}
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          overflow="auto"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            colors={colors.grey[100]}
            p="15px"
          >
            <Typography color={colors.grey[100]} variant="h4" fontWeight="bold">
              Recent Transactions
            </Typography>
          </Box>
          {data.map((transaction, i) => (
            <Box
              key={`${transaction.id}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              p="15px"
            >
              <Box>
                <Typography
                  color={colors.greenAccent[500]}
                  variant="h5"
                  fontWeight="600"
                >
                  {transaction.recipient}
                </Typography>
                <Typography color={colors.grey[100]}>
                  {transaction.note}
                </Typography>
              </Box>
              <Box color={colors.grey[100]}>{transaction.date}</Box>
              <Box
                backgroundColor={colors.greenAccent[800]}
                p="5px 10px"
                borderRadius="4px"
              >
                {transaction.amountInCzk} CZK
              </Box>
            </Box>
          ))}
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="30px"
        >
          <Typography variant="h5" fontWeight="600">
            Campaign
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="25px"
          >
            <ProgressCircle size="125" />
            <Typography
              variant="h5"
              color={colors.greenAccent[500]}
              sx={{ mt: "15px" }}
            >
              $48,352 revenue generated
            </Typography>
            <Typography>Includes extra misc expenditures and costs</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
