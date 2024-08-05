import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Avatar,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
} from "@mui/material";
import { green, red, orange } from "@mui/material/colors";

const orders = [
  {
    customer: "Wade Warren",
    orderNo: "15478256",
    amount: "$124.00",
    status: "Delivered",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    customer: "Jane Cooper",
    orderNo: "48965786",
    amount: "$305.02",
    status: "Delivered",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    customer: "Guy Hawkins",
    orderNo: "78985215",
    amount: "$45.88",
    status: "Cancelled",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    customer: "Kristin Watson",
    orderNo: "20965732",
    amount: "$65.00",
    status: "Pending",
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    customer: "Cody Fisher",
    orderNo: "95715620",
    amount: "$545.00",
    status: "Delivered",
    avatar: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    customer: "Savannah Nguyen",
    orderNo: "78514568",
    amount: "$128.20",
    status: "Delivered",
    avatar: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const getStatusColor = (status) => {
  switch (status) {
    case "Delivered":
      return green[500];
    case "Cancelled":
      return red[500];
    case "Pending":
      return orange[500];
    default:
      return "default";
  }
};

const RecentOrders = () => {
  return (
    <Card
      sx={{
        bgcolor: "#1e1e2d",
        color: "text.primary",
        m: 2,
        borderRadius: "20px",
      }}
    >
      <CardContent>
        <Typography
          variant="h5"
          gutterBottom
          sx={{
            textAlign: "left",
            fontFamily: "Poppins",
            color: "white",
            fontWeight: "bold",
          }}
        >
          Recent Orders
        </Typography>
        <TableContainer component={Paper} sx={{ bgcolor: "#1e1e2d" }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{
                    fontSize: "1.2rem",
                    color: "white",
                    fontFamily: "Poppins",
                  }}
                >
                  Customer
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: "1.2rem",
                    color: "white",
                    fontFamily: "Poppins",
                  }}
                >
                  Order No.
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: "1.2rem",
                    color: "white",
                    fontFamily: "Poppins",
                  }}
                >
                  Amount
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: "1.2rem",
                    color: "white",
                    fontFamily: "Poppins",
                  }}
                >
                  Status
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((order, index) => (
                <TableRow key={index}>
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{
                      fontSize: "1.3rem",
                      color: "white",
                      fontFamily: "Poppins",
                    }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Avatar
                        src={order.avatar}
                        alt={order.customer}
                        sx={{ mr: 2 }}
                      />
                      {order.customer}
                    </Box>
                  </TableCell>
                  <TableCell
                    sx={{
                      fontSize: "1.2rem",
                      color: "white",
                      fontFamily: "Poppins",
                    }}
                  >
                    {order.orderNo}
                  </TableCell>
                  <TableCell
                    sx={{
                      fontSize: "1.2rem",
                      color: "white",
                      fontFamily: "Poppins",
                    }}
                  >
                    {order.amount}
                  </TableCell>
                  <TableCell>
                    <Chip
                      label={order.status}
                      sx={{
                        bgcolor: getStatusColor(order.status),
                        color: "white",
                        fontSize: "1rem",
                        width: "100px",
                      }}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
};

export default RecentOrders;
