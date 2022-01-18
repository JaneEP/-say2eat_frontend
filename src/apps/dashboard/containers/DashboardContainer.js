import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import RangePicker from "react-range-picker";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Avatar from "@mui/material/Avatar";

import logoDashboard from "././imgDashboard/logoDashboard.png";
import notification from "././imgDashboard/notification.png";
import Vector from "././imgDashboard/Vector.png";
import delimiter from "././imgDashboard/delimiter.png";
import fotoAdmin from "././imgDashboard/fotoAdmin.png";
import vector from "././imgDashboard/vector.png";

import "./DashboardContainer.scss";
// import Count from "../../../Count";
import TotalSales from "../components/totalSales/TotalSales";
import TotalCustomers from "../components/totalCustomers/TotalCustomers";
import Chart from "../components/chart/Chart";
import Table from "../components/table/Table";
import { CLOSE_CALENDAR, RESET_USER } from "../../../actions";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

const drawerWidth = 290;

function DashboardContainer(props) {
  const { window, RESET_USER, user } = props;
  // console.log(user);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  let redirect = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Grid
      className="side-panel"
      container
      direction="column"
      justifyContent="space-between"
      alignItems="center"
      height="100vh"
      overflow="hidden"
    >
      <div className="logo-side-panel">
        <img src={logoDashboard} alt={"logo"} />
      </div>
      <div style={{ display: "flex", alignItems: "center"}}>
        <Avatar sx={{ m: 4 }} variant="rounded" >
          <div className="avatar-side-panel">
            <img src={fotoAdmin} alt={"fotoAdmin"} />
          </div>
        </Avatar>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
           
          }}
        >
          <span className="name-avatar">{user.name}</span>
          <span className="user-avatar">{user.role}</span>
        </div>
        <Avatar
          sx={{ m: 4 }}
          variant="rounded"
          // alignItems="flex-end"
          style={{ backgroundColor: "white" }}
        >
          <div className="avatar-side-panel">
            <button
              onClick={() => {
                RESET_USER();
                redirect("/");
              }}
            >
              <img src={vector} alt={"logout"} />
            </button>
          </div>
        </Avatar>
      </div>
    </Grid>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    // backgroundColor: alpha(theme.palette.common.white, 0.45),
    // "&:hover": {
    //   backgroundColor: alpha(theme.palette.common.white, 0.45),
    // },
    marginLeft: 0,
    width: "100%",
    backgroundColor: "white",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#36998B",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(12em + ${theme.spacing(9)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        color: "black",
        "&:focus": {
          // width: "20ch",
          color: "grey",
        },
      },
    },
  }));
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [value, setValue] = React.useState("one");

  const [dateObject, setDateObject] = React.useState("");
  // console.log(dateObject);
  const { customersLength } = props;

  // const onDateChanges = (date, date2) => console.log(" date is ", date, date2);
  // const closeCalendar = (date, date2) => console.log(" date is ", date, date2);
  const onDateChanges = (date, date2) =>
    setDateObject({ startDate: date, endDate: date2 });

  return (
    <>
      <Box sx={{ display: "flex", bgcolor: "primary.second", height: "100%" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
          }}
        >
          <Toolbar className="header">
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Grid
              // container rowSpacing={1} columnSpacing={{ sm: 2, md: 3 }}
              item
              xs={11}
              display="flex"
              alignItems="center"
              justifyContent="flex-end"
            >
              <Item>
                <Search>
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ "aria-label": "search" }}
                  />
                </Search>
              </Item>
              <Item className="notification-size">
                {/* <Item display="flex" flexDirection='row'> */}
                {/* <Item className="notification"> */}
                <img src={notification} alt={"logo"} />
                <img src={delimiter} alt={"logo"} />
                <img src={Vector} alt={"logo"} />
              </Item>
            </Grid>
          </Toolbar>
        </AppBar>

        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth, p: 2 }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
        <Box
          component="main"
          display="flex"
          flexDirection="column"
          sx={{
            // flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <Toolbar />
          <Box sx={{ width: "100%" }}>
            <Tabs
              className="tabs"
              value={value}
              onChange={handleChange}
              // backgroundColor="secondary"
              // textColor="black"
              sx={{ m: 4 }}
              // indicatorColor="secondary"
              // aria-label="secondary tabs example"
            >
              <Tab value="one" label="All Analytics" />
              <Tab value="two" label="Total sales" />
              <Tab value="three" label="All customers" />
              <Tab value="four" label="Sales by Hours" />
              <Tab value="five" label="Sales by Items" />
            </Tabs>
            {/* <Count /> */}
          </Box>
          <Grid container>
            <Grid item xs={6}>
              <RangePicker
                onDateSelected={onDateChanges}
                onClose={() => props.CLOSE_CALENDAR(dateObject)}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid className="block-data" item xs={6}>
              <TotalSales />
            </Grid>
            <Grid item xs={6}>
              <TotalCustomers customersLength={customersLength} />
            </Grid>
          </Grid>
          <Grid container>
            <Grid className="block-data" item xs={10}>
              <Chart />
            </Grid>
          </Grid>
          <Grid container>
            <Grid className="block-data" item xs={10}>
              <Table />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}

DashboardContainer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

const mapStateToProps = (state) => {
  return { user: state.auth.user };
};

const mapDispatchToProps = {
  CLOSE_CALENDAR,
  RESET_USER,
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
