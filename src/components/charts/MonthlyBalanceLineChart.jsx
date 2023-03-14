import React from "react";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { useGetMonthlyStatisticsQuery } from "state/api";
import { Box, CircularProgress, useTheme } from "@mui/material";

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
  ChartDataLabels
);

const MonthlyBalanceLineChart = ({ isDashboard = false }) => {
  const theme = useTheme();
  const { data, isLoading } = useGetMonthlyStatisticsQuery();

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

  var chartData = {
    labels: data?.map((x) => x.month),
    datasets: [
      {
        label: "Cumulative balance",
        data: data?.map((x) => x.cumulativeBalance),
        backgroundColor: [theme.palette.chart_opacity[100]],
        borderColor: [theme.palette.chart[100]],
        borderWidth: 3,
      },
      {
        label: "Monthly balance",
        data: data?.map((x) => x.balance),
        backgroundColor: [theme.palette.chart_opacity[200]],
        borderColor: [theme.palette.chart[200]],
        borderWidth: 2,
      },
    ],
  };

  var options = {
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          font: {
            family: theme.typography.fontFamily,
            size: isDashboard
              ? theme.typography.fontSizeChartSmall
              : theme.typography.fontSizeChartMedium,
          },
          color: "#ffffff",
        },
      },
      x: {
        ticks: {
          font: {
            family: theme.typography.fontFamily,
            size: isDashboard
              ? theme.typography.fontSizeChartSmall
              : theme.typography.fontSizeChartMedium,
          },
          color: "#ffffff",
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        position: "top",
        labels: {
          font: {
            family: theme.typography.fontFamily,
            size: isDashboard
              ? theme.typography.fontSizeChartSmall
              : theme.typography.fontSizeChartMedium,
          },
          usePointStyle: true,
          pointStyle: "circle",
          color: "#ffffff",
        },
      },
      datalabels: {
        color: "white",
        anchor: "center",
        display: "auto",
        align: "top",
        clip: true,
        font: {
          family: theme.typography.fontFamily,
          size: isDashboard
            ? theme.typography.fontSizeChartSmall
            : theme.typography.fontSizeChartMedium,
        },
      },
      tooltip: {
        enabled: true,
        padding: 10,
        backgroundColor: "#000000",
        borderColor: "#ffffff",
        borderWidth: 1,
        titleColor: "#ffffff",
        bodyColor: "#ffffff",
        usePointStyle: true,
        bodyFont: {
          family: theme.typography.fontFamily,
          size: isDashboard
            ? theme.typography.fontSizeChartSmall
            : theme.typography.fontSizeChartMedium,
        },
        titleFont: {
          family: theme.typography.fontFamily,
          size: isDashboard
            ? theme.typography.fontSizeChartSmall
            : theme.typography.fontSizeChartMedium,
        },
        callbacks: {
          label: function (context) {
            let label = context.dataset.label || "";

            if (label) {
              label += ": ";
            }
            if (context.parsed.y !== null) {
              label += new Intl.NumberFormat("cs-CZ", {
                style: "currency",
                currency: "CZK",
              }).format(context.parsed.y);
            }
            return label;
          },
        },
      },
    },
    elements: {
      line: {
        tension: 0.3,
      },
      point: {
        pointStyle: "circle",
        radius: 4,
        hitRadius: 30,
      },
    },
  };

  return (
    <div>
      <Line
        data={chartData}
        height={isDashboard ? 300 : 650}
        options={options}
      />
    </div>
  );
};

export default MonthlyBalanceLineChart;
