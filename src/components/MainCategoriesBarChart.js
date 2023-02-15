import React, { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement);

const MainCategoriesBarChart = () => {
  const [chart, setChart] = useState([]);

  var baseUrl = "http://localhost:8088/statistics/main-categories";

  useEffect(() => {
    const fetchCategories = async () => {
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
              setChart(json);
            });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchCategories();
  }, [baseUrl]);

  var data = {
    labels: chart?.categories?.map((x) => x.name),
    datasets: [
      {
        label: "Main categories",
        data: chart?.categories?.map((x) => x.amountAbs),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  var options = {
    indexAxis: "y",
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
          display: false,
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
        clip: true
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
              label = " " + new Intl.NumberFormat("cs-CZ", {
                style: "currency",
                currency: "CZK",
              }).format(context.parsed.x);
            }
            return label;
          },
        },
      }
    },
  };

  return (
    <div>
      <Bar data={data} height={400} options={options} />
    </div>
  );
};

export default MainCategoriesBarChart;
