import React, { useState, useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'
import ChartDataLabels from 'chartjs-plugin-datalabels';


ChartJS.register(
  Tooltip, Legend, ChartDataLabels,
  ArcElement
)

const MainCategoriesDonutChart = () => {

  const [chart, setChart] = useState([])

  var baseUrl = "http://localhost:8088/statisics/main-categories"

  useEffect(() => {
    const fetchCategories = async () => {
      await fetch(`${baseUrl}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': "*"
        }
      })
        .then((response) => {
          if (response.ok) {
            response.json().then((json) => {
              console.log(json);
              setChart(json)
            });
          }
        }).catch((error) => {
          console.log(error);
        });
    };
    fetchCategories()
  }, [baseUrl])

  var data = {
    labels: chart?.categories?.map(x => x.name),
    datasets: [{
      data: chart?.categories?.map(x => x.percentage),
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }]
  }

  var options = {
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true
      }
    },
    tooltips: {
      enabled: false
    },
    plugins: {
      legend: {
        position: 'right',
        labels: {
          usePointStyle: true,
          pointStyle: 'circle'
        }
      },
      datalabels: {
        color: '#000000',
        anchor: 'center',
        display: 'auto'
      }
    }
    
  }

  return (
    <div>
      <Doughnut
        data={data}
        height={300}
        options={options}
      />
    </div>
  )
}

export default MainCategoriesDonutChart