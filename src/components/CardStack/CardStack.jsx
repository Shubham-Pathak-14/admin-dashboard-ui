import React from "react";
import { Card, CardContent, Typography, Stack, Box } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CancelIcon from "@mui/icons-material/Cancel";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";

const data = [
  {
    title: "Total Orders",
    value: 75,
    change: 3,
    icon: <ShoppingCartIcon sx={{ color: "#4caf50", fontSize: 60 }} />,
  },
  {
    title: "Total Delivered",
    value: 70,
    change: -3,
    icon: <LocalShippingIcon sx={{ color: "#2196f3", fontSize: 60 }} />,
  },
  {
    title: "Total Cancelled",
    value: 5,
    change: 3,
    icon: <CancelIcon sx={{ color: "#f44336", fontSize: 60 }} />,
  },
  {
    title: "Total Revenue",
    value: "$12k",
    change: -3,
    icon: <AttachMoneyIcon sx={{ color: "#ffeb3b", fontSize: 60 }} />,
  },
];

const DashboardCards = () => {
  return (
    <Box p={2}>
      <Stack
        direction={{ xs: "column", sm: "column", md: "column", lg: "row" }}
        spacing={{ xs: 2, sm: 2, md: 2 }}
        p={0}
      >
        {data.map((item, index) => (
          <Card
            key={index}
            sx={{
              backgroundColor: "#1e1e2d",
              color: "white",
              flex: 1,
              borderRadius: "16px",
              paddingBottom: "0px",
              width: "100%",
            }}
          >
            <CardContent sx={{ paddingBottom: "0px" }}>
              <Box mb={2} sx={{ textAlign: "left" }}>
                {item.icon}
                <Box>
                  <Typography variant="h6" sx={{ fontFamily: "Poppins" }}>
                    {item.title}
                  </Typography>
                </Box>
              </Box>

              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography
                  variant="h4"
                  sx={{ margin: "20px 0", fontFamily: "Poppins" }}
                >
                  {item.value}
                </Typography>
                <Box display="flex">
                  {item.change > 0 ? (
                    <TrendingUpIcon color="success" />
                  ) : (
                    <TrendingDownIcon color="error" />
                  )}
                  <Typography
                    variant="body2"
                    color={item.change > 0 ? "success.main" : "error.main"}
                    sx={{
                      marginLeft: 1,
                      fontFamily: "Poppins",
                      fontSize: "20px",
                    }}
                  >
                    {item.change}%
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Stack>
    </Box>
  );
};

export default DashboardCards;
