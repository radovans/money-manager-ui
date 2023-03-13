import React, { useState } from "react";
import FlexBetween from "components/FlexBetween";
import {
  FormControl,
  MenuItem,
  InputLabel,
  Select,
  Box,
  useTheme,
  useMediaQuery,
  Typography,
} from "@mui/material";
import Header from "components/Header";
import CategoriesTransactions from "components/CategoriesTransactions";
import DateRangePicker from "components/DateRangePicker";
import CategoriesBarChart from "components/charts/CategoriesBarChart";
import CategoriesDonutChart from "components/charts/CategoriesDonutChart";

const Categories = () => {
  const theme = useTheme();
  const isNonMediumScreens = useMediaQuery("(min-width: 1200px)");

  const [view, setView] = useState("barChart");
  const [from, setFrom] = useState();
  const [to, setTo] = useState();
  const [category, setCategory] = useState();

  const childToParent = (childdata) => {
    setCategory(childdata);
  };

  return (
    <Box m="1.5rem 2.5rem">
      <FlexBetween>
        <Header
          title="CATEGORIES"
          subtitle="Statistics for all categories and subcategories. Click on graph to see more details."
        />
        <Box flexDirection="row" alignItems="left" display="flex">
          <FormControl sx={{ mb: "0.5rem", mr: "0.5rem", width: "8rem" }}>
            <InputLabel>View</InputLabel>
            <Select
              value={view}
              label="View"
              onChange={(e) => setView(e.target.value)}
            >
              <MenuItem value="barChart">Bar chart</MenuItem>
              <MenuItem value="pieChart">Pie chart</MenuItem>
            </Select>
          </FormControl>
          <DateRangePicker
            from={from}
            setFrom={setFrom}
            to={to}
            setTo={setTo}
          />
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
        <Box
          gridColumn="span 7"
          gridRow="span 4"
          backgroundColor={theme.palette.background.alt}
          p="1.5rem"
          borderRadius="0.55rem"
        >
          {
            {
              barChart: (
                <CategoriesBarChart
                  from={from}
                  to={to}
                  childToParent={childToParent}
                />
              ),
              pieChart: (
                <CategoriesDonutChart
                  isDashboard={false}
                  from={from}
                  to={to}
                />
              ),
            }[view]
          }
        </Box>
        <Box
          gridColumn="span 5"
          gridRow="span 4"
          backgroundColor={theme.palette.background.alt}
          p="1.5rem"
          borderRadius="0.55rem"
        >
          <Typography variant="h5" color={theme.palette.secondary[300]}>
            Most expensive transactions for shown categories
          </Typography>
          <CategoriesTransactions from={from} to={to} category={category} />
        </Box>
      </Box>
    </Box>
  );
};

export default Categories;
