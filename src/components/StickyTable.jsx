import React from "react";
import {
  styled,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const StickyTable = ({ data }) => {
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  return (
    <TableContainer sx={{ maxHeight: 650 }}>
      <Table stickyHeader aria-label="sticky table" size="small">
        <TableHead>
          <StyledTableRow>
            <TableCell
              // style={{
              //   position: "sticky",
              //   left: 0,
              //   zIndex: 800,
              // }}
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
          {data.map((category, index) => (
            <StyledTableRow key={index}>
              <TableCell sx={{ minWidth: 180 }}>{category.category}</TableCell>
              {category.periodCategoryStatistics.map((item, index) => (
                <TableCell
                  align="right"
                  sx={{ minWidth: 135, fontFamily: ["Arial", "sans-serif"] }}
                  key={index}
                >
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
