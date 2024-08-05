import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  CircularProgress,
} from "@mui/material";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import TrendingUpIcon from "@mui/icons-material/TrendingUpOutlined";
import CanvasJSReact from "@canvasjs/react-charts";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

Chart.register(ArcElement, Tooltip, Legend);
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const NetProfitCard = () => {
  const netProfit = 6759.25;
  const completionPercentage = 70;

  const data = {
    labels: ["Completed", "Remaining"],
    datasets: [
      {
        data: [completionPercentage, 100 - completionPercentage],
        backgroundColor: ["#B25DB7", "#757575"],
        borderRadius: 7,
      },
    ],
    subtitles: [
      {
        text: "70% Positive",
        verticalAlign: "center",
        fontSize: 24,
        dockInsidePlotArea: true,
      },
    ],
  };

  const options = {
    cutout: "75%",
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
      doughnutlabel: {
        labels: [
          {
            text: `${completionPercentage}%`,
            font: {
              size: "12",
            },
            color: "#fff",
          },
        ],
      },
    },
  };

  return (
    <Box
      p={2}
      sx={{
        height: "230px",
      }}
    >
      <Card
        sx={{
          backgroundColor: "#1e1e2d",
          color: "white",
          flex: 1,
          borderRadius: "16px",
          textAlign: "left",
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box mb={2}>
            <AccountBalanceWalletIcon
              sx={{ color: "#4caf50", fontSize: 40, fontFamily: "Poppins" }}
            />
            <Box>
              <Typography variant="h6">Net Profit</Typography>
            </Box>
            <Typography
              variant="h3"
              sx={{
                margin: "8px 0px",
                fontWeight: "bold",
                fontFamily: "Poppins",
              }}
            >
              ${netProfit.toFixed(2)}
            </Typography>
            <Box display="flex">
              <Typography
                variant="body2"
                color="success.main"
                sx={{ marginLeft: 1, fontSize: "18px" }}
              >
                3%
              </Typography>
              <TrendingUpIcon color="success" />
            </Box>
          </Box>
          <Box
            sx={{
              width: "300px",
              height: "155px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
              fontFamily: "Poppins",
              marginTop: "16px",
            }}
          >
            {/* <CanvasJSChart options={options1} /> */}
            <Typography
              variant="h4"
              sx={{
                margin: "5px",
                textAlign: "center",
                position: "absolute",
                top: "20px",
                fontFamily: "Poppins",
              }}
            >
              70%
            </Typography>
            <Typography
              variant="p"
              sx={{
                margin: "5px",
                textAlign: "center",
                position: "absolute",
                top: "55px",
                fontFamily: "Poppins",
              }}
            >
              Goal Completed
            </Typography>
            <Doughnut data={data} options={options} />
            <Typography
              variant="p"
              sx={{
                margin: "5px",
                textAlign: "center",
                fontFamily: "Poppins",
              }}
            >
              *The values given has been approximated
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default NetProfitCard;
