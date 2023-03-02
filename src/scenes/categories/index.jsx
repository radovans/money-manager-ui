import React, { useState } from "react";
import FlexBetween from "components/FlexBetween";
import {
  FormControl,
  MenuItem,
  InputLabel,
  Select,
  Button,
  Box,
  useTheme,
  useMediaQuery,
  Typography,
} from "@mui/material";
import Header from "components/Header";
import MainCategoriesBarChart from "components/charts/MainCategoriesBarChart";
import MainCategoriesDonutChart from "components/charts/MainCategoriesDonutChart";
import { EventBusyOutlined, CalendarMonthOutlined } from "@mui/icons-material";
import CategoriesTransactions from "components/CategoriesTransactions";

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
        <Box>
          <FormControl sx={{ mb: "0.5rem", width: "10rem" }}>
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

          <Button
            style={{ marginTop: ".25rem", marginLeft: ".5rem" }}
            sx={{
              backgroundColor: theme.palette.primary[800],
              color: theme.palette.primary[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
            onClick={(e) => {
              setFrom("2020-01-01T00:00:00.000z");
              setTo("2023-12-31T23:59:29.999z");
            }}
          >
            <EventBusyOutlined sx={{ mr: "10px" }} />
            All
          </Button>
          <Button
            style={{ marginTop: ".25rem", marginLeft: ".5rem" }}
            sx={{
              backgroundColor: theme.palette.primary[800],
              color: theme.palette.primary[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
            onClick={(e) => {
              setFrom("2023-01-01T00:00:00.000z");
              setTo("2023-12-31T23:59:29.999z");
            }}
          >
            <CalendarMonthOutlined sx={{ mr: "10px" }} />
            This year
          </Button>
          <Button
            style={{ marginTop: ".25rem", marginLeft: ".5rem" }}
            sx={{
              backgroundColor: theme.palette.primary[800],
              color: theme.palette.primary[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
            onClick={(e) => {
              setFrom("2022-01-01T00:00:00.000z");
              setTo("2022-12-31T23:59:29.999z");
            }}
          >
            <CalendarMonthOutlined sx={{ mr: "10px" }} />
            Last year
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
                <MainCategoriesBarChart
                  from={from}
                  to={to}
                  childToParent={childToParent}
                />
              ),
              pieChart: (
                <MainCategoriesDonutChart
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
