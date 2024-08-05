import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import TrendingUpIcon from "@mui/icons-material/TrendingUpOutlined";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

Chart.register(ArcElement, Tooltip, Legend);

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
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "75%",
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
  };

  return (
    <Box p={2} sx={{ height: "100%" }}>
      <Card
        sx={{
          backgroundColor: "#1e1e2d",
          color: "white",
          flex: 1,
          borderRadius: "16px",
          textAlign: "left",
          height: "100%",
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", md: "center" },
          }}
        >
          <Box mb={2} sx={{ flexGrow: 1 }}>
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
              width: { xs: "100%", md: "200px" },
              height: { xs: "200px", md: "155px" },
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
              fontFamily: "Poppins",
              mt: { xs: 2, md: 0 },
            }}
          >
            <Doughnut data={data} options={options} />
            <Typography
              variant="h4"
              sx={{
                margin: "5px",
                textAlign: "center",
                position: "absolute",
                top: "20px",
                fontFamily: "Poppins",
                fontSize: { xs: "20px", md: "24px" },
              }}
            >
              70%
            </Typography>
            <Typography
              variant="body2"
              sx={{
                margin: "5px",
                textAlign: "center",
                position: "absolute",
                top: "55px",
                fontFamily: "Poppins",
                fontSize: { xs: "12px", md: "16px" },
              }}
            >
              Goal Completed
            </Typography>
            <Typography
              variant="body2"
              sx={{
                margin: "5px",
                textAlign: "center",
                fontFamily: "Poppins",
                fontSize: { xs: "10px", md: "12px" },
              }}
            >
              *The values given have been approximated
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default NetProfitCard;
