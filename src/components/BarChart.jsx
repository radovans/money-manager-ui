import { useTheme } from "@mui/material";
import { tokens } from "../theme";
import MainCategoriesBarChart from "./MainCategoriesBarChart";

const BarChart = ({ isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <MainCategoriesBarChart />
  );
};

export default BarChart;
