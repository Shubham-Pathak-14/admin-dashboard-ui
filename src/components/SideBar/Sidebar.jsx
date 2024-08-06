import React, { useState } from "react";
import styled from "styled-components";
import HomeIcon from "@mui/icons-material/Home";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import AssignmentTurnedInOutlinedIcon from "@mui/icons-material/AssignmentTurnedInOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import SummarizeOutlinedIcon from "@mui/icons-material/SummarizeOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import StartIcon from "@mui/icons-material/Start";
// import Box from "@mui/material";

import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  IconButton,
  Drawer,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

const SidebarContainer = styled(Box)`
  width: 50px;
  background-color: #252528;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;

  @media (max-width: 768px) {
    width: 50px;
  }

  @media (max-width: 350px) {
    width: 30px;
  }
`;

const SidebarItem = styled(ListItem)`
  margin: 20px 0;
  color: white;
  padding: 10px;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #44475a;
    border-left: 3px solid blue;
  }
`;

const IconColor = { color: "#ffffffbd" };

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const sidebarContent = (
    <List>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box mt={"-25px"}>
          <SidebarItem>
            <ListItemIcon>
              <HomeIcon sx={IconColor} />
            </ListItemIcon>
            {!isMobile && <ListItemText />}
          </SidebarItem>
          <SidebarItem>
            <ListItemIcon>
              <AssessmentOutlinedIcon sx={IconColor} />
            </ListItemIcon>
            {!isMobile && <ListItemText />}
          </SidebarItem>
          <SidebarItem>
            <ListItemIcon>
              <AssignmentTurnedInOutlinedIcon sx={IconColor} />
            </ListItemIcon>
            {!isMobile && <ListItemText />}
          </SidebarItem>
          <SidebarItem>
            <ListItemIcon>
              <AccountBalanceWalletOutlinedIcon sx={IconColor} />
            </ListItemIcon>
            {!isMobile && <ListItemText />}
          </SidebarItem>
          <SidebarItem>
            <ListItemIcon>
              <SummarizeOutlinedIcon sx={IconColor} />
            </ListItemIcon>
            {!isMobile && <ListItemText />}
          </SidebarItem>
        </Box>

        <Box mt={"260px"}>
          <SidebarItem>
            <ListItemIcon>
              <LogoutOutlinedIcon sx={IconColor} />
            </ListItemIcon>
            {!isMobile && <ListItemText />}
          </SidebarItem>
        </Box>
      </Box>
    </List>
  );

  return (
    <>
      {isMobile ? (
        <Drawer
          anchor="left"
          open={open}
          onClose={toggleDrawer}
          sx={{
            "& .MuiDrawer-paper": {
              backgroundColor: "#252528",
              width: "60px",
            },
          }}
        >
          <IconButton onClick={toggleDrawer} sx={{ color: "white" }}>
            <ChevronLeftIcon />
          </IconButton>
          {sidebarContent}
        </Drawer>
      ) : (
        <SidebarContainer>{sidebarContent}</SidebarContainer>
      )}

      {isMobile && (
        <IconButton
          onClick={toggleDrawer}
          sx={{
            position: "fixed",
            top: 70,
            left: 0,
            color: "white",
            zIndex: 1,
          }}
        >
          <StartIcon />
        </IconButton>
      )}
    </>
  );
};

export default Sidebar;
