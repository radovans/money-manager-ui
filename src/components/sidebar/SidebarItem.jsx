import React from "react";
import { ListItem, ListItemButton, ListItemIcon, ListItemText, useTheme } from "@mui/material";
import { ChevronRightOutlined } from "@mui/icons-material";

const SidebarItem = ({ navigate, setActive, text, lcText, active, icon, ml = "2rem" }) => {
  const theme = useTheme();
  return (
    <ListItem key={text} disablePadding>
      <ListItemButton
        onClick={() => {
          navigate(`/${lcText}`);
          setActive(lcText);
        }}
        sx={{
          backgroundColor:
            active === lcText ? theme.palette.secondary[300] : "transparent",
          color:
            active === lcText
              ? theme.palette.primary[600]
              : theme.palette.secondary[100],
        }}
      >
        <ListItemIcon
          sx={{
            ml: ml,
            color:
              active === lcText
                ? theme.palette.primary[600]
                : theme.palette.secondary[200],
          }}
        >
          {icon}
        </ListItemIcon>
        <ListItemText primary={text} />
        {active === lcText && <ChevronRightOutlined sx={{ ml: "auto" }} />}
      </ListItemButton>
    </ListItem>
  );
};

export default SidebarItem;
