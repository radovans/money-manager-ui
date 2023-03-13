import React, { useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { useGetCategoriesStatisticsQuery } from "state/api";
import { Box, CircularProgress, useTheme } from "@mui/material";

ChartJS.register(Tooltip, Legend, ChartDataLabels, ArcElement);

const CategoriesDonutChart = ({ isDashboard = false, from, to }) => {
  const theme = useTheme();
  const [value, setValue] = useState();
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
        height={isDashboard ? 290 : 650}
      >
        <CircularProgress />
      </Box>
    );

  var chartData = {
    labels: data?.categories?.map((x) => x.name),
    datasets: [
      {
        data: data?.categories?.map((x) => x.percentage),
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
        cutout: "50%",
      },
    ],
  };

  var options = {
    onHover(click, element, chart) {
      if (element.length === 1) {
        setValue(data?.categories[element[0].index].amountAbsFormatted);
      }
    },
    onClick(click, element, chart) {
      if (element.length === 1) {
        if (data?.categories[element[0].index].isSubcategory) {
          setCategory();
        } else {
          setCategory(data?.categories[element[0].index].name);
        }
      }
    },
    maintainAspectRatio: false,
    tooltips: {
      enabled: false,
    },
    plugins: {
      legend: {
        display: true,
        position: "chartArea",
        labels: {
          font: {
            family: theme.typography.fontFamily,
            size: isDashboard
              ? theme.typography.fontSizeChartSmall
              : theme.typography.fontSizeChartMedium,
          },
          padding: isDashboard ? 10 : 18,
          usePointStyle: true,
          pointStyle: "circle",
          color: "#ffffff",
        },
      },
      datalabels: {
        color: "white",
        anchor: "center",
        display: "auto",
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
      },
    },
  };

  return (
    <div style={{ position: "relative" }}>
      <Doughnut
        data={chartData}
        height={isDashboard ? 290 : 650}
        options={options}
      />
      {isDashboard ? (
        ""
      ) : (
        <div
          style={{
            position: "absolute",
            width: "100%",
            top: "50%",
            left: 0,
            textAlign: "center",
            marginTop: "-0.5%",
            lineHeight: "20px",
            fontSize: "16px",
            fontWeight: "bold",
          }}
        >
          {value ? <span>{value}</span> : <span>{data?.totalFormatted}</span>}
        </div>
      )}
    </div>
  );
};

export default CategoriesDonutChart;
