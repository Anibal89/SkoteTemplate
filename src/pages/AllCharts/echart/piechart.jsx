import React from "react";
import ReactEcharts from "echarts-for-react";

const Pie = () => {
  const options = {
    toolbox: {
      show: false,
    },
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b} : {c} ({d}%)",
    },
    legend: {
      orient: "vertical",
      left: "left",
      data: ["Usuarios", "Roles"],
      textStyle: {
        color: ["#74788d"],
      },
    },
    color: ["#02a499", "#f8b425"],
    series: [
      {
        name: "Total registros",
        type: "pie",
        radius: "55%",
        center: ["50%", "60%"],
        data: [
          { value: 30, name: "Usuarios" },
          { value: 4, name: "Roles" },
        ],
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
    ],
  };
  return (
    <React.Fragment>
      <ReactEcharts style={{ height: "350px" }} option={options} />
    </React.Fragment>
  );
};
export default Pie;
