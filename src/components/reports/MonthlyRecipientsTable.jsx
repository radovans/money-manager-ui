import React from "react";
import { Box, CircularProgress } from "@mui/material";
import { useGetMonthlyRecipientsStatisticsQuery } from "state/api";
import StickySpanningTable from "components/StickySpanningTable";

const MonthlyRecipientsTable = () => {
  // QUERIES
  const { data, isLoading } = useGetMonthlyRecipientsStatisticsQuery();

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

export default MonthlyRecipientsTable;
