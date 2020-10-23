import React, { useState } from 'react';
import logo from '../../assets/images/Logo.png';
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
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import { useTheme, withStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router';
import { MenuList, MenuItem, Container } from '@material-ui/core';
import Logout from './Logout';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    // position: 'relative',
    // display: 'flex',
    '& .MuiAppBar-colorPrimary': {
      backgroundColor: 'transparent',
    },
    '& .MuiToolbar-regular': {
      minHeight: '0px',
    },
    '& .makeStyles-content-7': {
      padding: '2rem 3.5rem',
    },
    '& .MuiListItem-root.Mui-selected, .MuiListItem-root.Mui-selected:hover': {
      // background: '-webkit-linear-gradient(-120deg, #fff, transparent)',
    },
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
    '& .makeStyles-drawerPaper-6': {
      position: 'relative',
      borderRadius: '10px',
      margin: '20px 20px 20px 20px',
      minHeight: '100vh',
      background: '-webkit-linear-gradient(-120deg, #B65FDD, #241D8C)',
      color: '#fff',
    },
    '& .MuiDrawer-paperAnchorLeft': {
      background: '-webkit-linear-gradient(-120deg, #B65FDD, #241D8C)',
    },
    '& .MuiList-root': {
      marginBottom: '2.5rem',
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
    color: '#fff',
    background: '-webkit-linear-gradient(-120deg, #B65FDD, #241D8C)',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const Sidebar = (props) => {
  const classes = useStyles();
  let history = useHistory();
  const [dashboardContent, setDashboardContent] = useState('My Profile');
  const { window } = props;
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const mainContent = () => {
    switch (dashboardContent) {
      case 'My Profile':
        return <MyProfile />;
      case 'My Orders':
        return <MyOrders />;
      case 'Address Book':
        return <AddressBook />;
      case 'Support':
        return <Support />;
      case 'Logout':
        return <Logout />;
    }
  };

  const drawer = (
    <div>
      <div align="middle" style={{ padding: '30px 0' }}>
        <Upload>
          <img src={profileImg} alt="" width="80px" />
        </Upload>

        <div>
          <h5 style={{ color: '#fff', marginTop: '10px' }}>
            {localStorage.getItem('lmits_first_name')} {''}
            {localStorage.getItem('lmits_last_name')}
          </h5>
        </div>
      </div>

      <MenuList>
        <MenuItem
          button
          selected={selectedIndex === 1}
          onClick={(event) => {
            handleListItemClick(event, 1);
            setDashboardContent('My Profile');
          }}
        >
          <ListItemIcon>
            <img src={profileIcon} alt="" width="25px" />
          </ListItemIcon>
          <ListItemText>Profile</ListItemText>
        </MenuItem>

        <MenuItem
          button
          selected={selectedIndex === 2}
          onClick={(event) => {
            handleListItemClick(event, 2);
            setDashboardContent('My Orders');
          }}
        >
          <ListItemIcon>
            <img src={ordersIcon} alt="" width="25px" />
          </ListItemIcon>
          <ListItemText>Orders</ListItemText>
        </MenuItem>

        <MenuItem
          button
          selected={selectedIndex === 3}
          onClick={(event) => {
            handleListItemClick(event, 3);
            setDashboardContent('Address Book');
          }}
        >
          <ListItemIcon>
            <img src={addressIcon} alt="" width="25px" />
          </ListItemIcon>
          <ListItemText>Address</ListItemText>
        </MenuItem>

        <MenuItem
          button
          selected={selectedIndex === 4}
          onClick={(event) => {
            handleListItemClick(event, 4);
            setDashboardContent('Support');
          }}
        >
          <ListItemIcon>
            <img src={supportIcon} alt="" width="25px" />
          </ListItemIcon>
          <ListItemText>Support</ListItemText>
        </MenuItem>

        <MenuItem
          button
          selected={selectedIndex === 5}
          onClick={(event) => {
            handleListItemClick(event, 5);
            setDashboardContent('Logout');
          }}
        >
          <ListItemIcon>
            <img src={logoutIcon} alt="" width="25px" />
          </ListItemIcon>
          <ListItemText>Logout</ListItemText>
        </MenuItem>
      </MenuList>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return !localStorage.getItem('lmits_auth_key') ? (
    <>
      {alert('You are not Logged in!')}
      {history.push('/')}
    </>
  ) : (
    <>
      <div className="header-fluid">
        <div className="header">
          <Toolbar style={{ minHeight: '0px' }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              style={{ outline: 'none' }}
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
            </Drawer>
          </Hidden>
        </nav>
        <main className={classes.content}>{mainContent()}</main>
      </div>
    </>
  );
};

export default Sidebar;
