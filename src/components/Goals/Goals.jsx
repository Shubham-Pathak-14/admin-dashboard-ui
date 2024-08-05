import React from "react";
import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import FlagIcon from "@mui/icons-material/Flag";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import Avatar from "@mui/material/Avatar";
import { pink, green, red, purple, blue } from "@mui/material/colors";

const items = [
  {
    icon: <FlagIcon />,
    text: "Goals",
    color: red[300],
  },
  { icon: <LocalDiningIcon />, text: "Popular Dishes", color: purple[300] },
  { icon: <MenuBookIcon />, text: "Menus", color: blue[400] },
];

const GoalsPopularDishesMenus = () => {
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
        <List>
          {items.map((item, index) => (
            <React.Fragment key={index}>
              <ListItem button>
                <ListItemIcon sx={{ color: "white" }}>
                  <Avatar sx={{ bgcolor: item.color }}>{item.icon}</Avatar>
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Typography
                      variant="body1"
                      sx={{ color: "white", fontSize: "1.2rem" }}
                    >
                      {item.text}
                    </Typography>
                  }
                />
                <ListItemIcon sx={{ color: "white" }}>
                  <Avatar sx={{ bgcolor: "##90a4ae" }}>
                    <ChevronRightIcon />
                  </Avatar>
                </ListItemIcon>
              </ListItem>
              {index < items.length - 1 && (
                <Divider sx={{ bgcolor: "rgba(255, 255, 255, 0.2)" }} />
              )}
            </React.Fragment>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default GoalsPopularDishesMenus;
