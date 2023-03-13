import React, { useState } from "react";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { useGetCategoriesStatisticsQuery } from "state/api";
import { Box, CircularProgress, useTheme } from "@mui/material";

ChartJS.register(CategoryScale, LinearScale, BarElement);

const CategoriesBarChart = ({
  isDashboard = false,
  from,
  to,
  childToParent,
}) => {
  const theme = useTheme();
  const [category, setCategory] = useState();

  const { data, isLoading } = useGetCategoriesStatisticsQuery({
    from,
    to,
    category,
  });

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
    labels: data?.categories?.map((x) => x.name),
    datasets: [
      {
        label: "Main categories",
        data: data?.categories?.map((x) => x.amountAbs),
        backgroundColor: [
          theme.palette.chart_opacity[100],
          theme.palette.chart_opacity[200],
          theme.palette.chart_opacity[300],
          theme.palette.chart_opacity[400],
          theme.palette.chart_opacity[500],
          theme.palette.chart_opacity[600],
          theme.palette.chart_opacity[700],
          theme.palette.chart_opacity[800],
          theme.palette.chart_opacity[900],
        ],
        borderColor: [
          theme.palette.chart[100],
          theme.palette.chart[200],
          theme.palette.chart[300],
          theme.palette.chart[400],
          theme.palette.chart[500],
          theme.palette.chart[600],
          theme.palette.chart[700],
          theme.palette.chart[800],
          theme.palette.chart[900],
        ],
        borderWidth: 2,
        barThickness: 30,
        maxBarThickness: 30,
        categoryPercentage: 1.0,
        barPercentage: 1.0
      },
    ],
  };

  var options = {
    onClick(click, element, chart) {
      if (element.length === 1) {
        if (data?.categories[element[0].index].isSubcategory) {
          setCategory();
          childToParent();
        } else {
          setCategory(data?.categories[element[0].index].name);
          childToParent(data?.categories[element[0].index].name);
        }
      }
    },
    indexAxis: "y",
    barValueSpacing : 0.2,
    barDatasetSpacing : 0.2,
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
          display: isDashboard ? false : true,
          color: "#ffffff",
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      datalabels: {
        color: "white",
        anchor: "center",
        display: "auto",
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
              label =
                " " +
                new Intl.NumberFormat("cs-CZ", {
                  style: "currency",
                  currency: "CZK",
                }).format(context.parsed.x);
            }
            return label;
          },
        },
      },
    },
  };

  return (
    <div>
      <Bar
        data={chartData}
        height={isDashboard ? 400 : 650}
        options={options}
      />
    </div>
  );
};

export default CategoriesBarChart;
