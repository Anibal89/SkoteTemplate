import React from "react";
import ReactEcharts from "echarts-for-react";

const Line = () => {
  const options = {
    tooltip: {
      trigger: "axis",
    },
    grid: {
      zlevel: 0,
      x: 50,
      x2: 50,
      y: 30,
      y2: 30,
      borderWidth: 0,
    },
    xAxis: {
      type: "category",
      data: ["Lun", "Mar", "Mie", "Jue", "Vie", "Sab", "Dom"],
      axisLable: {
        color: "#ffffff",
      },
      axisLine: {
        lineStyle: {
          color: "#74788d",
        },
      },
    },
    yAxis: {
      type: "value",
      axisLable: {
        color: "#ffffff",
      },
      axisLine: {
        lineStyle: {
          color: "#74788d",
        },
      },
    },
    series: [
      {
        data: [10, 5, 15, 25, 30, 25, 10],
        type: "line",
      },
    ],
    color: ["#556ee6"],
    textStyle: {
      color: ["#74788d"],
    },
  };
  return (
    <React.Fragment>
      <ReactEcharts style={{ height: "350px" }} option={options} />
    </React.Fragment>
  );
};
export default Line;
