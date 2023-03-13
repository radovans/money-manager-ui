import React, { useState } from "react";
import {
  Box,
  FormControlLabel,
  Switch,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Header from "components/Header";
import YearlyIncomesLineChart from "components/charts/YearlyIncomesLineChart";
import FlexBetween from "components/FlexBetween";
import { useGetYearlyStatisticsQuery } from "state/api";

const Incomes = () => {
  const theme = useTheme();
  const isNonMediumScreens = useMediaQuery("(min-width: 1200px)");

  const [salaryOnlyChecked, setSalaryOnlyChecked] = useState(false);

  const handleSalaryOnlyChange = (event) => {
    setSalaryOnlyChecked(event.target.checked);
  };

  const { data, isLoading } = useGetYearlyStatisticsQuery({
    salaryOnlyChecked
  });

  return (
    <Box m="1.5rem 2.5rem">
      <FlexBetween>
        <Header title="INCOMES" subtitle="Incomes by month" />
        <FormControlLabel
          control={<Switch checked={salaryOnlyChecked} />}
          label="Salary only"
          onChange={handleSalaryOnlyChange}
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
          <YearlyIncomesLineChart data={data} isLoading={isLoading} salaryOnly={salaryOnlyChecked}/>
        </Box>
      </Box>
    </Box>
  );
};

export default Incomes;
