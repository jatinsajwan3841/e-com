import React from "react";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

const ReqChart = ({ data, type }) => {
    const chartRef = React.createRef();
    const targetChartRef = React.useRef();

    React.useEffect(() => {
        if (targetChartRef.current !== undefined) {
            targetChartRef.current.data.labels = data.labels;
            targetChartRef.current.data.datasets[0].data = data.data;
            targetChartRef.current.update();
        }
    }, [data]);

    React.useEffect(() => {
        targetChartRef.current = new Chart(chartRef.current.getContext("2d"), {
            type: type,
            data: {
                labels: data.labels,
                datasets: [
                    {
                        label: data.label,
                        data: data.data,
                        backgroundColor: ["rgba(255, 99, 132, 0.3)"],
                        borderColor: [
                            "rgba(255, 99, 132, 1)",
                            "rgba(54, 162, 235, 1)",
                            "rgba(255, 206, 86, 1)",
                            "rgba(75, 192, 192, 1)",
                            "rgba(153, 102, 255, 1)",
                            "rgba(255, 159, 64, 1)",
                        ],
                        fill: {
                            target: "origin",
                        },
                        borderWidth: 2,
                        cubicInterpolationMode: "default",
                        tension: 0.3,
                    },
                ],
            },
            options: {
                plugins: {
                    legend: {
                        display: true,
                        labels: {
                            color: "rgba(0, 0, 0, 0.8)",
                        },
                    },
                },
                scales: {
                    x: {
                        ticks: {
                            color: "rgba(0, 0, 0, 0.8)",
                        },
                        grid: {
                            color: "rgba(0, 0, 0, 0.2)",
                        },
                    },
                    y: {
                        min: 0,
                        beginAtZero: true,
                        ticks: {
                            color: "rgba(0, 0, 0, 0.8)",
                        },
                        grid: {
                            color: "rgba(0, 0, 0, 0.2)",
                        },
                    },
                },
                responsive: true,
            },
        });
        // eslint-disable-next-line
    }, []);
    return (
        <div className="chart-container">
            <canvas ref={chartRef} />
        </div>
    );
};
export default ReqChart;
