import { useTheme } from "@mui/material";
import { tokens } from "../theme";
import MonthlyBalanceLineChart from "./MonthlyBalanceLineChart";
import YearlyBalanceLineChart from "./YearlyBalanceLineChart";

const LineChart = ({ isCustomLineColors = false, isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <YearlyBalanceLineChart />
  );
};

export default LineChart;
