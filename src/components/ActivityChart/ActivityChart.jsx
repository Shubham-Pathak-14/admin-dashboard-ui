import "./ActivityChart.css";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { Typography } from "@mui/material";
import { Box, Select, MenuItem } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { styled } from "@mui/system";

const data = [
  { name: "5", uv: 1200, pv: 2400, amt: 2400 },
  { name: "7", uv: 3400, pv: 4000, amt: 2210 },
  { name: "9", uv: 2000, pv: 3500, amt: 2290 },
  { name: "11", uv: 2780, pv: 3908, amt: 2000 },
  { name: "13", uv: 1890, pv: 4800, amt: 2181 },
  { name: "15", uv: 2390, pv: 3800, amt: 2500 },
  { name: "17", uv: 1520, pv: 2380, amt: 2100 },
  { name: "19", uv: 2390, pv: 1280, amt: 2500 },
  { name: "21", uv: 1520, pv: 700, amt: 1800 },
  { name: "23", uv: 1200, pv: 3800, amt: 2400 },
  { name: "25", uv: 700, pv: 1398, amt: 2210 },
];

const CustomBox = styled(Box)({
  // marginTop:"50px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  backgroundColor: "#1E1E2D",
  fontFamily: "Poppins",
  borderRadius: "10px",
  padding: "10px 20px",
  width: "100%",
  boxSizing: "border-box",
});

const CustomSelect = styled(Select)({
  backgroundColor: "#605a5a",
  color: "#FFF",
  borderRadius: "80px",
  height: "34px",
  fontFamily: "Poppins, sans-serif",
  ".MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
  ".MuiSvgIcon-root": {
    color: "#FFF",
  },
  "& .MuiSelect-icon": {
    top: "calc(50% - 12px)",
  },
  "& .MuiSelect-select": {
    paddingRight: "32px",
    paddingLeft: "15px",
  },
});

export default function App() {
  return (
    <div className="chart-container">
      <CustomBox>
        <Typography
          variant="h5"
          color="white"
          sx={{
            fontFamily: "Poppins",
            fontWeight: "bold",
          }}
        >
          Activity
        </Typography>
        <CustomSelect defaultValue="weekly">
          <MenuItem value="daily">Daily</MenuItem>
          <MenuItem value="weekly">Weekly</MenuItem>
          <MenuItem value="monthly">Monthly</MenuItem>
        </CustomSelect>
      </CustomBox>
      <ResponsiveContainer
        width="100%"
        height={250}
        style={{ marginTop: "10px" }}
      >
        <BarChart width={700} height={500} data={data} barCategoryGap={20}>
          <CartesianGrid
            strokeDasharray=""
            vertical={false}
            stroke="rgba(255, 255, 255, 0.2)"
          />
          <XAxis dataKey="name" axisLine={false} tickLine={false} />
          <YAxis axisLine={false} tickLine={false} />
          <Bar
            dataKey="pv"
            fill="#B25DB7"
            radius={[20, 20, 20, 20]}
            barSize={25}
            style={{ transform: "translateY(-15px)" }}
          />
          <Bar
            dataKey="uv"
            fill="#B25DB7"
            radius={[20, 20, 20, 20]}
            barSize={25}
            style={{ transform: "translateY(-15px)" }}
          />
          <Bar
            dataKey="amt"
            fill="#B25DB7"
            radius={[20, 20, 20, 20]}
            barSize={25}
            style={{ transform: "translateY(-15px)" }}
          />
        </BarChart>
      </ResponsiveContainer>
         
    </div>
  );
}
