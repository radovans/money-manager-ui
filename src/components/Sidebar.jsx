import React from "react";
import {
  Box,
  Collapse,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import {
  ChevronLeft,
  HomeOutlined,
  ReceiptLongOutlined,
  SsidChartOutlined,
  TrendingUpOutlined,
  TrendingDownOutlined,
  BarChartOutlined,
  UploadFileOutlined,
  RuleOutlined,
  ExpandLess,
  ExpandMore,
  TableRowsOutlined,
  SettingsOutlined,
  AccountBalanceOutlined,
} from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import FlexBetween from "./FlexBetween";
import SidebarItem from "./sidebar/SidebarItem";

const dataItems = [
  {
    text: "Transactions",
    icon: <ReceiptLongOutlined />,
  },
];

const graphsItems = [
  {
    text: "Balance",
    icon: <SsidChartOutlined />,
  },
  {
    text: "Incomes",
    icon: <TrendingUpOutlined />,
  },
  {
    text: "Expenses",
    icon: <TrendingDownOutlined />,
  },
  {
    text: "Categories",
    icon: <BarChartOutlined />,
  },
  {
    text: "Cumulative",
    icon: <SsidChartOutlined />,
  },
];

const settingsItems = [
  {
    text: "Rules",
    icon: <RuleOutlined />,
  },
  {
    text: "Accounts",
    icon: <AccountBalanceOutlined />,
  },
  {
    text: "Import",
    icon: <UploadFileOutlined />,
  },
];

const navItems = [
  {
    text: "Dashboard",
    icon: <HomeOutlined />,
  },
];

const Sidebar = ({
  user,
  drawerWidth,
  isSidebarOpen,
  setIsSidebarOpen,
  isNonMobile,
}) => {
  const { pathname } = useLocation();
  const [active, setActive] = useState("");
  const [dataOpen, setDataOpen] = useState(false);
  const [graphsOpen, setGraphsOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const navigate = useNavigate();
  const theme = useTheme();

  useEffect(() => {
    setActive(pathname.substring(1));
  }, [pathname]);

  const handleDataClick = () => {
    setDataOpen(!dataOpen);
  };

  const handleGraphsClick = () => {
    setGraphsOpen(!graphsOpen);
  };

  const handleSettingsClick = () => {
    setSettingsOpen(!settingsOpen);
  };

  return (
    <Box component="nav">
      {isSidebarOpen && (
        <Drawer
          open={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          variant="persistent"
          anchor="left"
          sx={{
            width: drawerWidth,
            "& .MuiDrawer-paper": {
              color: theme.palette.secondary[200],
              backgroundColor: theme.palette.background.alt,
              boxSixing: "border-box",
              borderWidth: isNonMobile ? 0 : "2px",
              width: drawerWidth,
            },
          }}
        >
          <Box width="100%">
            <Box m="1.5rem 2rem 2rem 3rem">
              <FlexBetween color={theme.palette.secondary.main}>
                <Box display="flex" alignItems="center" gap="0.5rem">
                  <Typography variant="h4" fontWeight="bold">
                    Money manager
                  </Typography>
                </Box>
                {!isNonMobile && (
                  <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                    <ChevronLeft />
                  </IconButton>
                )}
              </FlexBetween>
            </Box>
            <List>
              {/* DASHBOARD */}
              {navItems.map(({ text, icon }) => {
                const lcText = text.toLowerCase();

                return (
                  <SidebarItem
                    navigate={navigate}
                    setActive={setActive}
                    text={text}
                    lcText={lcText}
                    active={active}
                    icon={icon}
                    ml="1rem"
                  />
                );
              })}

              {/* DATA */}
              <ListItemButton sx={{ m: "0.5rem 0" }} onClick={handleDataClick}>
                <ListItemIcon
                  sx={{
                    ml: "1rem",
                    color: theme.palette.secondary[200],
                  }}
                >
                  <TableRowsOutlined />
                </ListItemIcon>
                <ListItemText primary="Data" />
                {dataOpen ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={dataOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {dataItems.map(({ text, icon }) => {
                    const lcText = text.toLowerCase();

                    return (
                      <SidebarItem
                        navigate={navigate}
                        setActive={setActive}
                        text={text}
                        lcText={lcText}
                        active={active}
                        icon={icon}
                      />
                    );
                  })}
                </List>
              </Collapse>

              {/* GRAPHS */}
              <ListItemButton sx={{ m: "0.5rem 0" }} onClick={handleGraphsClick}>
                <ListItemIcon
                  sx={{
                    ml: "1rem",
                    color: theme.palette.secondary[200],
                  }}
                >
                  <SsidChartOutlined />
                </ListItemIcon>
                <ListItemText primary="Graphs" />
                {graphsOpen ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={graphsOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {graphsItems.map(({ text, icon }) => {
                    const lcText = text.toLowerCase();

                    return (
                      <SidebarItem
                        navigate={navigate}
                        setActive={setActive}
                        text={text}
                        lcText={lcText}
                        active={active}
                        icon={icon}
                      />
                    );
                  })}
                </List>
              </Collapse>

              {/* SETTINGS */}
              <ListItemButton
                sx={{ m: "0.5rem 0" }}
                onClick={handleSettingsClick}
              >
                <ListItemIcon
                  sx={{
                    ml: "1rem",
                    color: theme.palette.secondary[200],
                  }}
                >
                  <SettingsOutlined />
                </ListItemIcon>
                <ListItemText primary="Settings" />
                {settingsOpen ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={settingsOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {settingsItems.map(({ text, icon }) => {
                    const lcText = text.toLowerCase();

                    return (
                      <SidebarItem
                        navigate={navigate}
                        setActive={setActive}
                        text={text}
                        lcText={lcText}
                        active={active}
                        icon={icon}
                      />
                    );
                  })}
                </List>
              </Collapse>
            </List>
            <Box m="7.5rem 2rem 2rem 3rem">
              <FlexBetween color={theme.palette.secondary.main}>
                <Box display="flex" alignItems="center" gap="0.5rem">
                  <Typography variant="h6">version 1.1</Typography>
                </Box>
                {!isNonMobile && (
                  <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                    <ChevronLeft />
                  </IconButton>
                )}
              </FlexBetween>
            </Box>
          </Box>
        </Drawer>
      )}
    </Box>
  );
};

export default Sidebar;