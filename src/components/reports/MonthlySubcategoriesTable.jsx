import React from "react";
import { Box, CircularProgress } from "@mui/material";
import StickyTable from "components/StickyTable";
import { useGetMonthlySubcategoriesStatisticsQuery } from "state/api";

const MonthlySubcategoriesTable = () => {
  // QUERIES
  const { data, isLoading } = useGetMonthlySubcategoriesStatisticsQuery();

  if (!data || isLoading)
    return (
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        height={650}
      >
        <CircularProgress />
      </Box>
    );

  return <StickyTable data={data} />;
};

export default MonthlySubcategoriesTable;
