import React, { useState } from "react";
import {
  Box,
  useTheme,
  useMediaQuery,
  Button,
  ButtonGroup,
} from "@mui/material";
import Header from "components/Header";
import FlexBetween from "components/FlexBetween";
import YearlySubcategoriesTable from "components/reports/YearlySubcategoriesTable";
import MonthlySubcategoriesTable from "components/reports/MonthlySubcategoriesTable";

const SubcategoryReport = () => {
  const theme = useTheme();
  const isNonMediumScreens = useMediaQuery("(min-width: 1200px)");

  const [openYearly, setOpenYearly] = useState(true);
  const [openMonthly, setOpenMonthly] = useState(false);

  const buttons = [
    <Button
      sx={{
        backgroundColor: theme.palette.secondary.light,
        color: theme.palette.background.alt,
        fontSize: "14px",
        fontWeight: "bold",
        padding: "10px 20px",
      }}
      variant="contained"
      key="one"
      onClick={(e) => {
        setOpenYearly(true);
        setOpenMonthly(false);
      }}
    >
      Yearly
    </Button>,
    <Button
      sx={{
        backgroundColor: theme.palette.secondary.light,
        color: theme.palette.background.alt,
        fontSize: "14px",
        fontWeight: "bold",
        padding: "10px 20px",
      }}
      variant="contained"
      key="two"
      onClick={(e) => {
        setOpenYearly(false);
        setOpenMonthly(true);
      }}
    >
      Monthly
    </Button>,
  ];

  return (
    <Box m="1.5rem 2.5rem">
      <FlexBetween>
        <Header title="SUBCATEGORY REPORT" subtitle="" />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            "& > *": {
              m: 1,
            },
          }}
        >
          <ButtonGroup size="large" aria-label="large button group">
            {buttons}
          </ButtonGroup>
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
          gridColumn="span 12"
          gridRow="span 4"
          backgroundColor={theme.palette.background.alt}
          p="1.5rem"
          borderRadius="0.55rem"
        >
          {openYearly && <YearlySubcategoriesTable />}
          {openMonthly && <MonthlySubcategoriesTable />}
        </Box>
      </Box>
    </Box>
  );
};

export default SubcategoryReport;
