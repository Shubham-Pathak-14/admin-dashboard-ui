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
      <Box
        sx={{
          width: "500px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <h3>Activity</h3>
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={10}>Weekly</MenuItem>
              <MenuItem value={20}>Monthly</MenuItem>
              <MenuItem value={30}>Yearly</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>
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
        width={650}
        height={300}
        borderRadius={50}
        sx={{
          "& .MuiChart-root": {
            backgroundColor: "#333",
            color: "#fff",
          },
          "& .MuiChart-axis": {
            color: "#fff",
          },
          "& .MuiChart-bar": {
            marginBottom: "10px",
          },
          //   bgcolor: "#252528",
          //   color: "#FFF",
        }}
      />
    </>
  );
};

export default ActivityChart;
