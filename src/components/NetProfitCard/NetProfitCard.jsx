import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import TrendingUpIcon from "@mui/icons-material/TrendingUpOutlined";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { fontSize } from "@temp-mui/system";

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
            flexDirection: { xs: "column", sm: "row", md: "row" },
            justifyContent: "space-evenly",
            alignItems: { xs: "flex-start", md: "center" },
          }}
        >
          <Box
            sx={{
              flexGrow: 1,
              height: "100%",
              display: "flex",
              flexDirection: "column",
              // alignItems:"center",
              justifyContent: "center",
              margin: "auto",
              gap: "2",
            }}
          >
            {/* <AccountBalanceWalletIcon
              sx={{ color: "#4caf50", fontSize: 40, fontFamily: "Poppins" }}
            /> */}
            <Box>
              <Typography
                variant="h8"
                sx={{ letterSpacing: 1, fontSize: "1rem" }}
              >
                Net Profit
              </Typography>
            </Box>
            <Typography
              variant="h4"
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
                variant="h5"
                color="success.main"
                sx={{ fontSize: "18px", marginRight: "5px" }}
              >
                3%
              </Typography>
              <TrendingUpIcon color="success" />
            </Box>
          </Box>
          <Box
            sx={{
              width: { xs: "100%", md: "200px", lg: "100px" },
              height: { xs: "200px", md: "155px", lg: "123px" },
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
              fontFamily: "Poppins",
              mt: { xs: 2, md: 0 },
              // mr: "10px"
            }}
          >
            <Doughnut data={data} options={options} />
            <Typography
              variant="h8"
              sx={{
                margin: "12px",
                textAlign: "center",
                position: "absolute",
                top: { xs: "35px", sm: "30px", md: "20px" },
                fontFamily: "Poppins",
                fontSize: { xs: "30px", md: "24px", lg: "15px" },
              }}
            >
              70%
            </Typography>
            <Typography
              variant="h7"
              sx={{
                margin: "-1px",
                textAlign: "center",
                position: "absolute",
                top: { sm: "90px", md: "70px", lg: "55px" },
                fontFamily: "Poppins",
                // fontSize: ".4rem",
                fontSize: { xs: "15px", md: "12px", lg: "8px" },
              }}
            >
              Goal Completed
            </Typography>
            <Typography
              variant="body2"
              sx={{
                // margin: "5px",
                textAlign: "center",
                fontFamily: "Poppins",
                fontSize: { xs: "10px", md: "8px", lg: "6px" },
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
