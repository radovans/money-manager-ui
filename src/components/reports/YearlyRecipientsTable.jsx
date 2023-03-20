import React from "react";
import { Box, CircularProgress } from "@mui/material";
import { useGetYearlyRecipientsStatisticsQuery } from "state/api";
import StickySpanningTable from "components/StickySpanningTable";

const YearlyRecipientsTable = () => {
  // QUERIES
  const { data, isLoading } = useGetYearlyRecipientsStatisticsQuery();

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

  return <StickySpanningTable data={data} />;
};

export default YearlyRecipientsTable;
