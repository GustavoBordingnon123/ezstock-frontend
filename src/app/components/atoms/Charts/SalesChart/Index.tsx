"use client";
import React, { Component } from "react";
import Chart from "react-apexcharts";

export default function SalesChart() {
  const option = {
    chart: {
      id: "apexchart-example",
      toolbar: {
        show: false,
      },
      dropShadow: {
        enabled: true,
        color: "#000",
        top: 18,
        left: 7,
        blur: 10,
        opacity: 0.2,
      },
    },
    xaxis: {
      categories: [
        "Produto 1",
        "Produto 2",
        "Produto 3",
        "Produto 4",
        "Produto 5",
        "Produto 6",
      ],
      labels: {
        show: false, // Esconde os indicadores do eixo X
      },
    },
    yaxis: {
      show: false,
    },
    fill: {
      colors: ["#FFFFFF"],
      opacity: 1,
      type: "solid",
    },
    dataLabels: {
      enabled: true,
      style: {
        colors: ["#D27339"],
        weight: "bold",
      },
    },
    markers: {
      colors: ["#F44336", "#E91E63", "#9C27B0"],
    },
    colors: ["#FFFFFF"],
    grid: {
      show: true,
    },
    tooltip: {
      theme: "dark",
      style: {
        fontSize: "12px",
        color: "FFFFFF",
      },
    },
  };

  const series = [
    {
      data: [
        {
          x: "Produto 1",
          y: 10,
        },
        {
          x: "Produto 2",
          y: 18,
        },
        {
          x: "Produto 3",
          y: 13,
        },
        {
          x: "Produto 4",
          y: 30,
        },
        {
          x: "Produto 5",
          y: 17,
        },
        {
          x: "Produto 6",
          y: 6,
        },
      ],
    },
  ];

  return (
    <Chart
      type="bar"
      options={option}
      series={series}
      height="100%"
      width="100%"
    />
  );
}