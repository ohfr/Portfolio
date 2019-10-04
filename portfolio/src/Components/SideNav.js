import React, { useState, useEffect, useLayoutEffect } from 'react';
import { NavLink } from 'react-router-dom';

import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import { TweenMax } from 'gsap';

// const drawerWidth = 240;

// const useStyles = makeStyles(theme => ({
//   root: {
//     display: 'flex',
//   },
//   appBar: {
//     transition: theme.transitions.create(['margin', 'width'], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     }),
//   },
//   appBarShift: {
//     width: `calc(100% - ${drawerWidth}px)`,
//     marginLeft: drawerWidth,
//     transition: theme.transitions.create(['margin', 'width'], {
//       easing: theme.transitions.easing.easeOut,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   hide: {
//     display: 'none',
//   },
//   drawer: {
//     width: drawerWidth,
//     flexShrink: 0,
//   },
//   drawerPaper: {
//     width: drawerWidth,
//   },
//   drawerHeader: {
//     display: 'flex',
//     alignItems: 'center',
//     padding: theme.spacing(0, 1),
//     ...theme.mixins.toolbar,
//     justifyContent: 'flex-end',
//   },
//   content: {
//     flexGrow: 1,
//     padding: theme.spacing(3),
//     transition: theme.transitions.create('margin', {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     }),
//     marginLeft: -drawerWidth,
//   },
//   contentShift: {
//     transition: theme.transitions.create('margin', {
//       easing: theme.transitions.easing.easeOut,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//     marginLeft: 0,
//   },
// }));



// const SideNav = () => {
//   const classes = useStyles();
  
//   const theme = useTheme();
//   const [open, setOpen] = React.useState(false);

//   const handleDrawerOpen = () => {
//     setOpen(true);
//   };

//   const handleDrawerClose = () => {
//     setOpen(false);
//   };
  
//   // const drawer = (
//   //   <div>
//   //     <div className={classes.header}>
//   //       <h1>Daniel Martin</h1>
//   //       <p>Software Engineer</p>
//   //     </div>
//   //     <Divider />
//   //       <List>
//   //         <Link className={classes.link} to="/">
//   //           <ListItem button>
//   //             <ListItemText primary="About" />
//   //           </ListItem>
//   //         </Link>
//   //         {['Projects', 'Contact', 'Resume'].map((text, index) => (
//   //           <Link className={classes.link} to={`/${text}`}>
//   //           <ListItem button key={text}>
//   //             {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
//   //             <ListItemText primary={text} />
//   //           </ListItem>
//   //           </Link>
//   //         ))}
//   //       </List>
//   //     </div>
//   // );
//   return (
//     <div className={classes.root}>
//            <CssBaseline />
//       <AppBar
//         position="fixed"
//         className={clsx(classes.appBar, {
//           [classes.appBarShift]: open,
//         })}
//       >
//         <Toolbar>
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             onClick={handleDrawerOpen}
//             edge="start"
//             className={clsx(classes.menuButton, open && classes.hide)}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" noWrap>
//             Persistent drawer
//           </Typography>
//         </Toolbar>
//       </AppBar>
//       <Drawer
//         className={classes.drawer}
//         variant="persistent"
//         anchor="left"
//         open={open}
//         classes={{
//           paper: classes.drawerPaper,
//         }}
//       >
//         <div className={classes.drawerHeader}>
//           <IconButton onClick={handleDrawerClose}>
//             {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
//           </IconButton>
//         </div>
//         <Divider />
//         <List>
//           {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
//             <ListItem button key={text}>
//               <ListItemText primary={text} />
//             </ListItem>
//           ))}
//         </List>
//       </Drawer>
//     </div>
//   )
// }

const useStyles = makeStyles({
  nav: {
    display: 'flex',
    flexFlow: 'row wrap',
    color: 'black',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    background: '#F2F2F2',
    height: '10vh',
    overflow: 'hidden',

  },
  links: {
    display: 'flex',
  },
  link: {
    textDecoration: 'none',
    color: 'black',
    marginRight: '30px',
    '&:hover': {
      color: 'blue'
    },
    active: {
      color: 'blue',
    }
  },
  menu: {
    position: 'fixed',
    top: 0,
    width: '100%',
    overflow: 'hidden',
    zIndex: '1'
  }


})


const SideNav = () => {
  const classes=useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  let menuIcon;

const [width, setWidth] = useState(window.innerWidth);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
    TweenMax.from(
      menuIcon, .5, { rotation: 90, repeat: 0, yoyo: true}
    )
  };
  
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  const handleClose = () => {
    setAnchorEl(null);
    // TweenMax.to(menuIcon, .5, { rotation: 90, yoyo: true})
  };
  
  if (width < 1000) {
    return (
      <div className={classes.menu}>
      <MenuIcon onClick={handleClick}  fontSize="large" ref={el => menuIcon = el} />
       <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <NavLink activeStyle={{color: 'blue'}} to="/"className={classes.link}><MenuItem onClick={handleClose}>Home</MenuItem></NavLink>
        <NavLink activeStyle={{color: 'blue'}} to="/Contact" className={classes.link}><MenuItem onClick={handleClose}>Contact</MenuItem></NavLink>
        <NavLink activeStyle={{color: 'blue'}} to="/ResumePage" className={classes.link}><MenuItem onClick={handleClose}>Resume</MenuItem></NavLink>

      </Menu>
      </div>
    )
  } else {
  
  return (
    <div className={classes.menu}>
      <nav className={classes.nav}>
        <div>
          <h1>Daniel Martin</h1>
        </div>
        <div className={classes.links}>
          <NavLink activeStyle={{color: 'blue'}} className={classes.link} exact to="/">Home</NavLink>
          <NavLink activeStyle={{color: 'blue'}} className={classes.link} to="/Contact">Contact</NavLink>
          <NavLink activeStyle={{color: 'blue'}} className={classes.link} to="/Home">Resume</NavLink>
        </div>
      </nav>
    </div>
  )
    }
}
export default SideNav;