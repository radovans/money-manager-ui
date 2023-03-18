import React from "react";
import { Box, CircularProgress } from "@mui/material";
import StickyTable from "components/StickyTable";
import { useGetMonthlyCategoriesStatisticsQuery } from "state/api";

const MonthlyCategoriesTable = () => {
  // QUERIES
  const { data, isLoading } = useGetMonthlyCategoriesStatisticsQuery();

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

export default MonthlyCategoriesTable;
