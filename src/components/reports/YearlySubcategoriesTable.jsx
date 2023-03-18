import React from "react";
import { Box, CircularProgress } from "@mui/material";
import StickyTable from "components/StickyTable";
import { useGetYearlySubcategoriesStatisticsQuery } from "state/api";

const YearlySubcategoriesTable = () => {
  // QUERIES
  const { data, isLoading } = useGetYearlySubcategoriesStatisticsQuery();

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

export default YearlySubcategoriesTable;
