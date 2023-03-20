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

const StickySpanningTable = ({ data }) => {
  const theme = useTheme();

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  const colspan =
    data[0].recipientStatistics[0].periodCategoryStatistics.length;

  return (
    <TableContainer sx={{ maxHeight: 650 }}>
      <Table stickyHeader size="small">
        <TableHead>
          <StyledTableRow>
            <TableCell key={"recipient"}>Recipient</TableCell>
            {data[0].recipientStatistics[0].periodCategoryStatistics.map(
              (item, index) => (
                <TableCell align="right" key={index}>
                  {item.period}
                </TableCell>
              )
            )}
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {data.map((category, index) => (
            <>
              <StyledTableRow key={index}>
                <TableCell
                  sx={{
                    minWidth: 180,
                    backgroundColor: theme.palette.secondary[700],
                  }}
                >
                  {category.category}
                </TableCell>
                <TableCell
                  colSpan={colspan}
                  align="right"
                  sx={{
                    backgroundColor: theme.palette.secondary[700],
                    minWidth: 135,
                    fontFamily: ["Arial", "sans-serif"],
                  }}
                >
                  {category.formattedTotalAmount}
                </TableCell>
              </StyledTableRow>
              {category.recipientStatistics.map((recipient, index) => (
                <StyledTableRow key={index}>
                  <TableCell sx={{ minWidth: 180 }}>
                    {recipient.recipient}
                  </TableCell>
                  {recipient.periodCategoryStatistics.map((item, index) => (
                    <TableCell
                      align="right"
                      sx={{
                        minWidth: 135,
                        fontFamily: ["Arial", "sans-serif"],
                      }}
                      key={index}
                    >
                      {item.amountFormatted}
                    </TableCell>
                  ))}
                </StyledTableRow>
              ))}
            </>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default StickySpanningTable;
