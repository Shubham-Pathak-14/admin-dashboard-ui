import React from "react";
import styles from "./Dashboard.module.css";
import CardStack from "../CardStack/CardStack";
import NetProfitCard from "../NetProfitCard/NetProfitCard";
// import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import ActivityChart from "../ActivityChart/ActivityChart";
import RecentOrders from "../RecentOrder/RecentOrder";
import CustomerFeedback from "../CustomersFeedback/CustomersFeedback";
import GoalsPopularDishesMenus from "../Goals/Goals";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "black" : "black",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  width: "100%",
}));

function Dashboard() {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Dashboard</h2>

      <Grid container spacing={0}>
        <Grid xs={12} sm={12} md={12} lg={7.5}>
          <Item>
            <CardStack />
          </Item>
          {/* <CardStack /> */}
        </Grid>
        <Grid xs={12} sm={12} md={12} lg={4.5}>
          <Item>
            <NetProfitCard />
          </Item>
        </Grid>

        <Grid xs={12} sm={12} md={12} lg={7.5}>
          <Item>
            <ActivityChart />
          </Item>
          {/* <CardStack /> */}
        </Grid>
        <Grid xs={12} sm={12} md={12} lg={4.5}>
          <Item>
            <GoalsPopularDishesMenus />
          </Item>
        </Grid>

        <Grid xs={12} sm={12} md={12} lg={7.5}>
          <Item>
            <RecentOrders />
          </Item>
        </Grid>
        <Grid xs={12} sm={12} md={12} lg={4.5}>
          <Item>
            <CustomerFeedback />
          </Item>
        </Grid>
      </Grid>
    </div>
  );
}

export default Dashboard;
