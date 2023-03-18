import React from "react";
import {
  styled,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  useTheme,
} from "@mui/material";

const StickyTable = ({ data }) => {
  const theme = useTheme();

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  return (
    // <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
    // <Paper sx={{ width: "100%", overflow: "hidden" }}>
    <TableContainer sx={{ maxHeight: 650 }}>
      <Table stickyHeader aria-label="sticky table" size="small">
        <TableHead>
          <StyledTableRow>
            <TableCell
              style={{
                position: "sticky",
                left: 0,
                zIndex: 800,
              }}
              key={"category"}
            >
              Category
            </TableCell>
            {data[0].periodCategoryStatistics.map((item, index) => (
              <TableCell key={index}>{item.period}</TableCell>
            ))}
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {data.map((data, index) => (
            <StyledTableRow
              key={index}
            >
              <TableCell
                style={{
                  position: "sticky",
                  left: 0,
                  background: theme.palette.primary[500],
                  zIndex: 800,
                }}
                sx={{ minWidth: 180 }}
              >
                {data.category}
              </TableCell>
              {data.periodCategoryStatistics.map((item, index) => (
                <TableCell align="right" sx={{ minWidth: 135 , fontFamily: ["Arial", "sans-serif"] }} key={index}>
                  {item.amountFormatted}
                </TableCell>
              ))}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default StickyTable;
