import React from "react";
import { Box, CircularProgress } from "@mui/material";
import StickyTable from "components/StickyTable";
import { useGetYearlyCategoriesStatisticsQuery } from "state/api";

const YearlyCategoriesTable = () => {
  // QUERIES
  const { data, isLoading } = useGetYearlyCategoriesStatisticsQuery();

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

export default YearlyCategoriesTable;
