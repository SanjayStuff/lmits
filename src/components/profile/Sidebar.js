import React, { useState } from 'react';
import logo from '../../assets/images/Logo.png';
import appStoreImg from '../../assets/images/navicons/Appstore.png';
import playStoreImg from '../../assets/images/navicons/Playstore.png';
import profileImg from '../../assets/images/navicons/profile.png';
import ordersIcon from '../../assets/images/dashboard/svg/orders.svg';
import addressIcon from '../../assets/images/dashboard/svg/address.svg';
import supportIcon from '../../assets/images/dashboard/svg/support.svg';
import logoutIcon from '../../assets/images/dashboard/svg/logout.svg';
import profileIcon from '../../assets/images/dashboard/svg/profile.svg';
import { Menu } from 'antd';
import MyProfile from '../profile/MyProfile';
import AddressBook from '../profile/AddressBook';
import MyOrders from '../profile/MyOrders';
import Support from '../profile/Support';
import { makeStyles } from '@material-ui/core/styles';
import { Upload } from 'antd';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import { useTheme } from '@material-ui/core/styles';
import { useHistory } from 'react-router';
import { MenuList, MenuItem, Container } from '@material-ui/core';
import Logout from './Logout';
import { Link } from 'react-router-dom';
import styles from '../../styles/profile/Sidebar.module.css';
import MyProfileNew from './MyProfileNew';
import { Row, Col, Typography } from 'antd';
import Avatar from '@material-ui/core/Avatar';

const { Text } = Typography;
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    position: 'relative',
    '& .MuiAppBar-colorPrimary': {
      backgroundColor: 'transparent',
    },
    "& .MuiToolbar-regular": {
      minHeight: "0px",
    },
    '& .MuiListItem-root.Mui-selected, .MuiListItem-root.Mui-selected:hover': {
      // background: '-webkit-linear-gradient(-120deg, #fff, transparent)',
    },
    "& .MuiListItemIcon-root": {
      minWidth: "36px",
    },
    '& .makeStyles-drawerPaper-6': {
      position: 'relative !important',
      borderRadius: '0.625rem !important',
      margin: '1.25rem !important',
      minHeight: '100vh !important',
      color: '#fff',
    },
    '& .MuiDrawer-paperAnchorLeft': {
      background: '-webkit-linear-gradient(-120deg, #B65FDD, #241D8C)',
    },
    '& .MuiList-root': {
      marginBottom: '2.5rem',
    },
  },

  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
    [theme.breakpoints.down("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
      display: "none",
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      backgroundColor: "#fff",
      boxShadow: "none",
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    outline: "none !important",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    color: "#fff",
    background: "-webkit-linear-gradient(-120deg, #B65FDD, #241D8C)",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  large: {
    margin: '0 auto',
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
}));

const Sidebar = (props) => {
  const classes = useStyles();
  let history = useHistory();
  const [dashboardContent, setDashboardContent] = useState("My Profile");
  const { window } = props;
  const [selectedIndex, setSelectedIndex] = useState(1);
  const [openLogout, setOpenLogout] = useState(false);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const mainContent = () => {
    switch (dashboardContent) {
      case "My Profile":
        return <MyProfileNew />;
      case "My Orders":
        return <MyOrders />;
      case "Address Book":
        return <AddressBook />;
      case "Support":
        return <Support />;
      // case "Logout":
      //   return <Logout />;
    }
  };

  const drawer = (
    <div>
      <div className={styles.sidebar_profile_padd}>
        <Avatar
          align="middle"
          alt="Profile"
          src={
            localStorage.getItem('lmits_prof_img')
              ? localStorage.getItem('lmits_prof_img')
              : profileImg
          }
          className={classes.large}
        />

        <h5>
          {localStorage.getItem("lmits_first_name")} {""}
          {localStorage.getItem("lmits_last_name")}
        </h5>
      </div>

      <MenuList>
        <MenuItem
          button
          selected={selectedIndex === 1}
          onClick={(event) => {
            handleListItemClick(event, 1);
            setDashboardContent("My Profile");
          }}
        >
          <ListItemIcon>
            <img src={profileIcon} alt="" width="20px" />
          </ListItemIcon>
          <ListItemText>My Profile</ListItemText>
        </MenuItem>

        <MenuItem
          button
          selected={selectedIndex === 3}
          onClick={(event) => {
            handleListItemClick(event, 3);
            setDashboardContent("Address Book");
          }}
        >
          <ListItemIcon>
            <img src={addressIcon} alt="" width="20px" />
          </ListItemIcon>
          <ListItemText>Address Book</ListItemText>
        </MenuItem>

        <MenuItem
          button
          selected={selectedIndex === 2}
          onClick={(event) => {
            handleListItemClick(event, 2);
            setDashboardContent("My Orders");
          }}
        >
          <ListItemIcon>
            <img src={ordersIcon} alt="" width="20px" />
          </ListItemIcon>
          <ListItemText>My Orders</ListItemText>
        </MenuItem>

        <MenuItem
          button
          selected={selectedIndex === 4}
          onClick={(event) => {
            handleListItemClick(event, 4);
            setDashboardContent("Support");
          }}
        >
          <ListItemIcon>
            <img src={supportIcon} alt="" width="20px" />
          </ListItemIcon>
          <ListItemText>Support</ListItemText>
        </MenuItem>

        <MenuItem
          button
          selected={selectedIndex === 5}
          onClick={(event) => {
            handleListItemClick(event, 5);
            // setDashboardContent("Logout");
            setOpenLogout(true);
          }}
        >
          <ListItemIcon>
            <img src={logoutIcon} alt="" width="20px" />
          </ListItemIcon>
          <ListItemText>Logout</ListItemText>
        </MenuItem>
      </MenuList>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return !localStorage.getItem("lmits_auth_key") ? (
    <>{history.push("/")}</>
  ) : (
    <>
      <div className="header-fluid">
        <div className="header">
          <Toolbar className={styles.sidebar_profile_toolbar}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <div className="logo">
              <Link to="">
                <img src={logo} alt="LMiTS" height={20} />
              </Link>
            </div>
          </Toolbar>

          <Menu mode="horizontal">
            <Menu.Item className="ant_text_disable nav-name">
              <Text className="font-weight-medium" style={{ color: "#303952" }}>
                Download
              </Text>
            </Menu.Item>
            <Menu.Item className="ant_text_disable nav-name">
              <Row>
                <Col>
                  <Link
                    className="app-store"
                    to={{ pathname: "https://www.apple.com/in/ios/app-store/" }}
                    target="_blank"
                  >
                    <img src={appStoreImg} alt="App Store" width={30} />
                  </Link>
                </Col>
                <Col>
                  <Link
                    className="play-store"
                    to={{ pathname: "https://play.google.com/store?hl=en_IN" }}
                    target="_blank"
                  >
                    <img src={playStoreImg} alt="Play Store" width={30} />
                  </Link>
                </Col>
              </Row>
            </Menu.Item>
            <Menu.Item>
              <Avatar
                alt="Profile"
                src={
                  localStorage.getItem('lmits_prof_img')
                    ? localStorage.getItem('lmits_prof_img')
                    : profileImg
                }
              />
            </Menu.Item>
          </Menu>
        </div>
      </div>
      <div className={classes.root}>
        <CssBaseline />
        <nav className={classes.drawer} aria-label="mailbox folders">
          <Hidden smUp implementation="css">
            <Drawer
              container={container}
              variant="temporary"
              anchor={theme.direction === "rtl" ? "right" : "left"}
              open={mobileOpen}
              onClose={handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>

        <main className={classes.content}>
          <Container>{mainContent()}</Container>
        </main>
        <Logout openLogout={openLogout} setOpenLogout={setOpenLogout} />
      </div>
    </>
  );
};

export default Sidebar;
