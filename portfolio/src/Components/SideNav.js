import React, { useState, useEffect, useLayoutEffect } from 'react';
import { NavLink } from 'react-router-dom';

import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/core/styles';
import { TweenMax } from 'gsap';


const useStyles = makeStyles({
  nav: {
    display: 'flex',
    flexFlow: 'row wrap',
    color: 'black',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: '#7510f7',
    height: '8vh',
    overflow: 'hidden',
    zIndex: '99'

  },
  links: {
    display: 'flex',
  },
  link: {
    textDecoration: 'none',
    color: 'black',
    marginRight: '30px',
    '&:hover': {
      color: 'white'
    },
    active: {
      color: '#7510F7',
    }
  },
  menu: {
    position: 'fixed',
    top: 0,
    width: '100%',
    overflow: 'hidden',
    zIndex: '99'
  },
  mobile: {
    position: 'fixed',
    width: '100%',
    zIndex: '1',
    display: 'flex',
    flexFlow: 'row wrap',
    alignItems: 'center',
    background: '#F2F2F2',
    justifyContent: 'space-around',
  },
  img: {
    width: '15%',
  },
  mobileImg: {
    width: '10%',
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
      menuIcon, .5, { rotation: -90, repeat: 0, yoyo: true}
    )
  };
  
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  const handleClose = () => {
    setAnchorEl(null);
    TweenMax.from(
      menuIcon, .5, { rotation: 90, repeat: 0, yoyo: true}
    )
  };
  
  if (width < 1000) {
    return (
      <div className={classes.mobile}>
          <img className={classes.mobileImg} src={require('../Assets/Component 8.png')} />
      <MenuIcon onClick={handleClick}  fontSize="large" ref={el => menuIcon = el} />
       <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <NavLink activeStyle={{color: '#7510F7'}} exact to="/"className={classes.link}><MenuItem onClick={handleClose}>Home</MenuItem></NavLink>
        {/* <NavLink activeStyle={{color: '#0069e2'}} to="/About" className={classes.link}><MenuItem onClick={handleClose}>About</MenuItem></NavLink> */}
        <a href="mailto:danielmartin1205@gmail.com" target="_blank" className={classes.link}><MenuItem onClick={handleClose}>Contact</MenuItem></a>
        <a className={classes.link} href="https://docs.google.com/document/d/1qUfIOe7l0zUtmvlZt4e4P0Titj1E61VXMtQCq8gbNd4/edit?usp=sharing"><MenuItem onClick={handleClose}>Resume</MenuItem></a>

      </Menu>
      </div>
    )
  } else {
  
  return (
    <div className={classes.menu}>
      <nav className={classes.nav}>
        <div>
          <img className={classes.img} src={require('../Assets/Component 8.png')} />
        </div>
        <div className={classes.links}>
          <NavLink activeStyle={{color: 'white'}} className={classes.link} exact to="/">Home</NavLink>
          {/* <NavLink activeStyle={{color: '#0069e2'}} className={classes.link} to="/About">About</NavLink> */}
          <a href="mailto:danielmartin1205@gmail.com" target="_blank" className={classes.link} to="/Contact">Contact</a>
          <a className={classes.link} target="_blank" href="https://docs.google.com/document/d/1qUfIOe7l0zUtmvlZt4e4P0Titj1E61VXMtQCq8gbNd4/edit?usp=sharing">Resume</a>

        </div>
      </nav>
    </div>
  )
    }
}
export default SideNav;