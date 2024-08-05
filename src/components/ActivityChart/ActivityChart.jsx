import React from "react";
import styled from "styled-components";
import { BarChart } from "@mui/x-charts/BarChart";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const ActivityChart = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <>
      <BarChart
        xAxis={[
          {
            scaleType: "band",
            data: [
              "5",
              "9",
              "11",
              "13",
              "15",
              "17",
              "19",
              "21",
              "23",
              "25",
              "27",
            ],
          },
        ]}
        yAxis={[{ min: 0 }]}
        series={[
          { data: [4, 3, 5, 7, 2, 6, 2, 3, 10, 11, 6], color: "#B25DB7" },
          { data: [2, 5, 9, 2, 4, 8, 7, 1, 5, 4, 9], color: "#B25DB7" },
        ]}
        width={1300}
        height={400}
        margin={1}
        borderRadius={100}
        sx={{
          "& .MuiChart-root": {
            backgroundColor: "#333",
            color: "#fff",
            marginLeft: "20px",
          },
          "& .MuiChart-axis": {
            color: "#fff",
          },
          "& .MuiChart-bar": {
            marginBottom: "10px",
          },
          bgcolor: "#1F1E2D",
          borderRadius: "24px",
        }}
      />
    </>
  );
};

export default ActivityChart;
