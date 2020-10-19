import React, { useState } from 'react';
import logo from '../../assets/images/Logo.png';
import profileImg from '../../assets/images/navicons/profile.png';
import { Layout, Menu } from 'antd';
import { Switch, Route, Link, BrowserRouter } from 'react-router-dom';
import MyProfile from '../profile/MyProfile';
import Dashboard from './Dashboard';
import AddressBook from '../profile/AddressBook';
import MyOrders from '../profile/MyOrders';
import Support from '../profile/Support';
import { makeStyles } from '@material-ui/core/styles';

import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import { useTheme } from '@material-ui/core/styles';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
    '& .MuiAppBar-colorPrimary': {
      backgroundColor: 'transparent',
    },
    '& .MuiToolbar-regular': {
      minHeight: '0px',
    },
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
    '& .makeStyles-drawerPaper-6': {
      marginTop: '90px',
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      backgroundColor: '#fff',
      boxShadow: 'none',
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const { Header, Content, Sider } = Layout;

const Sidebar = (props) => {
  const classes = useStyles();
  const { window } = props;

  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      {/* <div className={classes.toolbar} /> */}
      <div align="middle">
        <img src={profileImg} alt="" width="80px" />
        <div>
          <h6>Dhanush</h6>
        </div>
      </div>
      <Divider />
      <List>
        {['Profile', 'Orders', 'Address', 'Support', 'Logout'].map(
          (text, index) => (
            <ListItem button component={Link} to={'/' + text} key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <AccountCircleIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          )
        )}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <>
      <Layout className="layout">
        <div className="header-fluid">
          <div className="header">
            <Toolbar style={{ minHeight: '0px' }}>
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
                <img src={logo} alt="LMiTS" height={20} />
              </div>
            </Toolbar>

            <Menu mode="horizontal">
              <Menu.Item>
                <div className="header_img">
                  <img src={profileImg} alt="" width={30} />
                </div>
              </Menu.Item>
            </Menu>
          </div>
        </div>
        <div className={classes.root}>
          <CssBaseline />
          <BrowserRouter>
            <nav className={classes.drawer} aria-label="mailbox folders">
              <Hidden smUp implementation="css">
                <Drawer
                  container={container}
                  variant="temporary"
                  anchor={theme.direction === 'rtl' ? 'right' : 'left'}
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
                  {/* <List>
                    <ListItem button>
                      <ListItemIcon>
                        <AccountCircleIcon />
                      </ListItemIcon>
                      <ListItemText>Profile</ListItemText>
                    </ListItem>
                    <ListItem button>
                      <ListItemIcon>
                        <TocIcon />
                      </ListItemIcon>
                      <ListItemText>Orders</ListItemText>
                    </ListItem>
                    <ListItem button>
                      <ListItemIcon>
                        <ImportContactsIcon />
                      </ListItemIcon>
                      <ListItemText>Address</ListItemText>
                    </ListItem>
                    <ListItem button>
                      <ListItemIcon>
                        <HelpOutlineIcon />
                      </ListItemIcon>
                      <ListItemText>Support</ListItemText>
                    </ListItem>
                    <ListItem button>
                      <ListItemIcon>
                        <ExitToAppIcon />
                      </ListItemIcon>
                      <ListItemText>Logout</ListItemText>
                    </ListItem>
                  </List> */}
                </Drawer>
              </Hidden>
            </nav>

            <main className={classes.content}>
              <Switch>
                <Route
                  exact
                  path="/"
                  render={() => (
                    <div>
                      <Dashboard />
                    </div>
                  )}
                />
                <Route
                  exact
                  path="/Profile"
                  render={() => (
                    <div>
                      {' '}
                      <MyProfile />{' '}
                    </div>
                  )}
                />
                <Route
                  exact
                  path="/Orders"
                  render={() => (
                    <div>
                      <MyOrders />
                    </div>
                  )}
                />
                <Route
                  exact
                  path="/Address"
                  render={() => (
                    <div>
                      <AddressBook />
                    </div>
                  )}
                />
                <Route
                  exact
                  path="/Support"
                  render={() => (
                    <div>
                      <Support />
                    </div>
                  )}
                />
              </Switch>
              {/* <Support /> */}
            </main>
          </BrowserRouter>
        </div>
      </Layout>
    </>
  );
};

Sidebar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  container: PropTypes.instanceOf(
    typeof Element === 'undefined' ? Object : Element
  ),
};

export default Sidebar;
