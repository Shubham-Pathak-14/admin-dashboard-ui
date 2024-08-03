import React from "react";
import styled from "styled-components";
import HomeIcon from "@mui/icons-material/Home";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import AssignmentTurnedInOutlinedIcon from "@mui/icons-material/AssignmentTurnedInOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import SummarizeOutlinedIcon from "@mui/icons-material/SummarizeOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { List, ListItem, ListItemIcon, ListItemText, Box } from "@mui/material";

const SidebarContainer = styled(Box)`
  width: 70px;
  height: 950px;
  background-color: #252528;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    padding: 10px;
  }

  @media (max-width: 350px) {
    width: 100%;
    height: auto;
    padding: 10px;
    display: flex;
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
  return (
    <SidebarContainer>
      <List>
        <SidebarItem>
          <ListItemIcon>
            <HomeIcon sx={IconColor} />
          </ListItemIcon>
          <ListItemText />
        </SidebarItem>
        <SidebarItem>
          <ListItemIcon>
            <AssessmentOutlinedIcon sx={IconColor} />
          </ListItemIcon>
          <ListItemText />
        </SidebarItem>
        <SidebarItem>
          <ListItemIcon>
            <AssignmentTurnedInOutlinedIcon sx={IconColor} />
          </ListItemIcon>
          <ListItemText />
        </SidebarItem>
        <SidebarItem>
          <ListItemIcon>
            <AccountBalanceWalletOutlinedIcon sx={IconColor} />
          </ListItemIcon>
          <ListItemText />
        </SidebarItem>
        <SidebarItem>
          <ListItemIcon>
            <SummarizeOutlinedIcon sx={IconColor} />
          </ListItemIcon>
          <ListItemText />
        </SidebarItem>
      </List>

      <List>
        <SidebarItem>
          <ListItemIcon>
            <LogoutOutlinedIcon sx={IconColor} />
          </ListItemIcon>
          <ListItemText />
        </SidebarItem>
      </List>
    </SidebarContainer>
  );
};

export default Sidebar;
