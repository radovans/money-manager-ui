import React, { useState, useEffect } from "react";
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
  ChartDataLabels
);

const YearlyBalanceLineChart = () => {
  const [yearlyStatistics, setYearlyStatistics] = useState([]);

  var baseUrl = "http://localhost:8088/statistics/year-month/year";

  useEffect(() => {
    const fetchYearlyStatistics = async () => {
      await fetch(`${baseUrl}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      })
        .then((response) => {
          if (response.ok) {
            response.json().then((json) => {
              console.log(json);
              setYearlyStatistics(json);
            });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchYearlyStatistics();
  }, [baseUrl]);

  var data = {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets: [
      {
        label: "2020",
        data: yearlyStatistics?.x2020?.map((x) => x.totalAmount),
        backgroundColor: ["rgba(255, 206, 86, 0.2)"],
        borderColor: ["rgba(255, 206, 86, 1)"],
        borderWidth: 2,
      },
      {
        label: "2021",
        data: yearlyStatistics?.x2021?.map((x) => x.totalAmount),
        backgroundColor: ["rgba(255, 99, 132, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)"],
        borderWidth: 2,
      },
      {
        label: "2022",
        data: yearlyStatistics?.x2022?.map((x) => x.totalAmount),
        backgroundColor: ["rgba(54, 162, 235, 0.2)"],
        borderColor: ["rgba(54, 162, 235, 1)"],
        borderWidth: 2,
      },
      {
        label: "2023",
        data: yearlyStatistics?.x2023?.map((x) => x.totalAmount),
        backgroundColor: ["rgba(75, 192, 192, 0.2)"],
        borderColor: ["rgba(75, 192, 192, 1)"],
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
          color: "#ffffff",
        },
      },
      x: {
        ticks: {
          color: "#ffffff",
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        position: "top",
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
        align: "top",
        clip: true,
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
      <Line data={data} height={400} options={options} />
    </div>
  );
};

export default YearlyBalanceLineChart;
