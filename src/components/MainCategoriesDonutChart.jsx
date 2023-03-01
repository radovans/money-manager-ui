import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { useGetMainCategoriesStatisticsQuery } from "state/api";
import { useTheme } from "@mui/material";

ChartJS.register(Tooltip, Legend, ChartDataLabels, ArcElement);

const MainCategoriesDonutChart = () => {
  const theme = useTheme();
  const { data } = useGetMainCategoriesStatisticsQuery();
  console.log(data);

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
      },
    ],
  };

  var options = {
    maintainAspectRatio: false,
    tooltips: {
      enabled: false,
    },
    plugins: {
      legend: {
        display: true,
        position: "right",
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
          color: "#ffffff",
        },
      },
      datalabels: {
        color: "white",
        anchor: "center",
        display: "auto",
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
        bodyFont: {},
      },
    },
  };

  return (
    <div>
      <Doughnut data={chartData} height={290} options={options} />
    </div>
  );
};

export default MainCategoriesDonutChart;
