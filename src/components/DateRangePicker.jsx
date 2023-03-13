import React from "react";
import {
  Box,
  useTheme,
  Divider,
  Popover,
  Link,
  Button,
  TextField,
  Typography,
} from "@mui/material";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import EventBusyOutlinedIcon from "@mui/icons-material/EventBusyOutlined";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import {
  addDays,
  startOfWeek,
  endOfWeek,
  addWeeks,
  startOfMonth,
  endOfMonth,
  addMonths,
  startOfYear,
  endOfYear,
  addYears,
} from "date-fns";
import FlexBetween from "./FlexBetween";

const DateRangePicker = ({ from, setFrom, to, setTo }) => {
  const theme = useTheme();

  const popperSx = {
    "& .MuiCalendarPicker-root": {
      backgroundColor: theme.palette.primary[800],
    },
    "& .MuiPickersDay-root": {
      backgroundColor: theme.palette.primary[600],
    },
    "& .MuiPickersDay-today": {
      backgroundColor: theme.palette.primary[500],
    },
    "& .MuiPickersDay-dayOutsideMonth": {
      backgroundColor: theme.palette.primary[300],
    },
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const today = new Date();

  return (
    <Box>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="From"
          inputFormat="DD.MM.YYYY"
          value={from}
          onChange={(newValue) => {
            try {
              setFrom(newValue.toISOString());
            } catch (e) {}
          }}
          views={["day", "month", "year"]}
          showDaysOutsideCurrentMonth
          clearable
          renderInput={(params) => (
            <TextField {...params} sx={{ width: "9rem" }} />
          )}
          PopperProps={{
            sx: popperSx,
          }}
        />
      </LocalizationProvider>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="To"
          inputFormat="DD.MM.YYYY"
          value={to}
          onChange={(newValue) => {
            try {
              setTo(newValue.toISOString());
            } catch (e) {}
          }}
          views={["day", "month", "year"]}
          showDaysOutsideCurrentMonth
          clearable
          renderInput={(params) => (
            <TextField {...params} sx={{ width: "9rem" }} />
          )}
          PopperProps={{
            sx: popperSx,
          }}
        />
      </LocalizationProvider>
      <Button
        style={{ marginTop: ".25rem", marginLeft: ".5rem" }}
        sx={{
          backgroundColor: theme.palette.primary[800],
          color: theme.palette.primary[100],
          fontSize: "14px",
          fontWeight: "bold",
          padding: "10px 20px",
        }}
        aria-describedby={id}
        variant="contained"
        onClick={handleClick}
      >
        <CalendarMonthOutlinedIcon sx={{ mr: "10px" }} />
        Range
      </Button>

      {/* PREDEFINED RANGE */}
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        sx={{
          "& .MuiPopover-paper": {
            backgroundColor: theme.palette.primary[900],
          },
          "& .MuiLink-root": {
            color: theme.palette.secondary[100],
          },
        }}
      >
        <Box
          sx={{
            width: "20rem",
            maxWidth: 360,
          }}
        >
          <Box
            sx={{ m: 2 }}
            flexDirection="column"
            alignItems="left"
            display="flex"
          >
            <FlexBetween>
              <Link
                sx={{
                  mb: 1,
                }}
                href="#"
                underline="hover"
                onClick={(e) => {
                  setFrom(startOfWeek(today).toISOString());
                  setTo(endOfWeek(today).toISOString());
                  handleClose();
                }}
              >
                This week
              </Link>
              <Typography
                sx={{
                  mb: 1,
                  color: theme.palette.primary[200],
                }}
              >
                {startOfWeek(today).toLocaleDateString().replaceAll("/", ".")} -
                {endOfWeek(today).toLocaleDateString().replaceAll("/", ".")}
              </Typography>
            </FlexBetween>

            <FlexBetween>
              <Link
                sx={{
                  mb: 1,
                }}
                href="#"
                underline="hover"
                onClick={(e) => {
                  setFrom(startOfMonth(today).toISOString());
                  setTo(endOfMonth(today).toISOString());
                  handleClose();
                }}
              >
                This month
              </Link>
              <Typography
                sx={{
                  mb: 1,
                  color: theme.palette.primary[200],
                }}
              >
                {startOfMonth(today).toLocaleDateString().replaceAll("/", ".")}{" "}
                -{endOfMonth(today).toLocaleDateString().replaceAll("/", ".")}
              </Typography>
            </FlexBetween>

            <FlexBetween>
              <Link
                sx={{
                  mb: 1,
                }}
                href="#"
                underline="hover"
                onClick={(e) => {
                  setFrom(startOfYear(today).toISOString());
                  setTo(endOfYear(today).toISOString());
                  handleClose();
                }}
              >
                This year
              </Link>
              <Typography
                sx={{
                  mb: 1,
                  color: theme.palette.primary[200],
                }}
              >
                {startOfYear(today).toLocaleDateString().replaceAll("/", ".")} -
                {endOfYear(today).toLocaleDateString().replaceAll("/", ".")}
              </Typography>
            </FlexBetween>
          </Box>
          <Divider variant="middle" />
          <Box
            sx={{ m: 2 }}
            flexDirection="column"
            alignItems="left"
            display="flex"
          >
            <FlexBetween>
              <Link
                sx={{
                  mb: 1,
                }}
                href="#"
                underline="hover"
                onClick={(e) => {
                  setFrom(startOfWeek(addWeeks(today, -1)).toISOString());
                  setTo(endOfWeek(addWeeks(today, -1)).toISOString());
                  handleClose();
                }}
              >
                Last week
              </Link>
              <Typography
                sx={{
                  mb: 1,
                  color: theme.palette.primary[200],
                }}
              >
                {startOfWeek(addWeeks(today, -1))
                  .toLocaleDateString()
                  .replaceAll("/", ".")}{" "}
                -
                {endOfWeek(addWeeks(today, -1))
                  .toLocaleDateString()
                  .replaceAll("/", ".")}
              </Typography>
            </FlexBetween>

            <FlexBetween>
              <Link
                sx={{
                  mb: 1,
                }}
                href="#"
                underline="hover"
                onClick={(e) => {
                  setFrom(startOfMonth(addMonths(today, -1)).toISOString());
                  setTo(endOfMonth(addMonths(today, -1)).toISOString());
                  handleClose();
                }}
              >
                Last month
              </Link>
              <Typography
                sx={{
                  mb: 1,
                  color: theme.palette.primary[200],
                }}
              >
                {startOfMonth(addMonths(today, -1))
                  .toLocaleDateString()
                  .replaceAll("/", ".")}{" "}
                -
                {endOfMonth(addMonths(today, -1))
                  .toLocaleDateString()
                  .replaceAll("/", ".")}
              </Typography>
            </FlexBetween>

            <FlexBetween>
              <Link
                sx={{
                  mb: 1,
                }}
                href="#"
                underline="hover"
                onClick={(e) => {
                  setFrom(startOfYear(addYears(today, -1)).toISOString());
                  setTo(endOfYear(addYears(today, -1)).toISOString());
                  handleClose();
                }}
              >
                Last year
              </Link>
              <Typography
                sx={{
                  mb: 1,
                  color: theme.palette.primary[200],
                }}
              >
                {startOfYear(addYears(today, -1))
                  .toLocaleDateString()
                  .replaceAll("/", ".")}{" "}
                -
                {endOfYear(addYears(today, -1))
                  .toLocaleDateString()
                  .replaceAll("/", ".")}
              </Typography>
            </FlexBetween>
          </Box>
          <Divider variant="middle" />
          <Box
            sx={{ m: 2 }}
            flexDirection="column"
            alignItems="left"
            display="flex"
          >
            <FlexBetween>
              <Link
                href="#"
                underline="hover"
                onClick={(e) => {
                  setFrom("2020-01-01T00:00:00.000z");
                  setTo(today.toISOString());
                  handleClose();
                }}
              >
                All time
              </Link>
              <Typography
                sx={{
                  color: theme.palette.primary[200],
                }}
              >
                01.01.2020 - {today.toLocaleDateString().replaceAll("/", ".")}
              </Typography>
            </FlexBetween>
          </Box>
        </Box>
      </Popover>
      <Button
        style={{ marginTop: "0.25rem", marginLeft: "0.5rem" }}
        sx={{
          backgroundColor: theme.palette.primary[800],
          color: theme.palette.primary[100],
          fontSize: "14px",
          fontWeight: "bold",
          padding: "10px 20px",
        }}
        onClick={(e) => {
          setFrom("2020-01-01T00:00:00.000z");
          setTo(today.toISOString());
        }}
      >
        <EventBusyOutlinedIcon sx={{ mt: "2px", mb: "2px" }} />
      </Button>
    </Box>
  );
};

export default DateRangePicker;
