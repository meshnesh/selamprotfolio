import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, IconButton, Menu, MenuItem, Box, Link, Drawer, List, ListItem, ListItemText, CssBaseline } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Image from 'mui-image';
import logo from '../../../../assets/sk.png';

const Topbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [menuCloseTimer, setMenuCloseTimer] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    if (menuCloseTimer) {
      clearTimeout(menuCloseTimer);
    }
    setAnchorEl(null);
  };

  const handleMenuEnter = () => {
    if (menuCloseTimer) {
      clearTimeout(menuCloseTimer);
    }
  };

  const handleMenuLeave = () => {
    setMenuCloseTimer(setTimeout(() => {
      setAnchorEl(null);
    }, 200)); // Adjust delay as needed
  };

  const open = Boolean(anchorEl);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', width: 250 }}>
      <List>
        <ListItem button component="a" href="/">
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component="a" href="/page-about">
          <ListItemText primary="About" />
        </ListItem>
        <ListItem button component="a" href="/page-services">
          <ListItemText primary="Services" />
        </ListItem>
        <ListItem button component="a" href="/page-family-success-coach">
          <ListItemText primary="Family Success Coach" />
        </ListItem>
        <ListItem button component="a" href="/page-photography">
          <ListItemText primary="Photography" />
        </ListItem>
        <ListItem button component="a" href="/page-podcasts">
          <ListItemText primary="Podcast" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <CssBaseline />
      <AppBar position="static" sx={{ backgroundColor: 'transparent', boxShadow: 'none', width: '100%' }}>
        <Toolbar sx={{ justifyContent: 'space-between', width: '100%' }}>
          <Box display={'flex'} alignItems={'center'}>
            <Box
              display={'flex'}
              alignItems="baseline"
              component="a"
              underline="none"
              href="/"
              title="selamkairu"
              height={{ xs: 28, md: 88 }}
              width={100}>
              <Image src={logo} height={'80%'} width={'80%'} />
            </Box>
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', color: 'black' }}>
            <Box marginX={2}>
              <Link underline="none" component="a" href="/" color="black">
                Home
              </Link>
            </Box>
            <Box marginX={2}>
              <Link underline="none" component="a" href="/page-about" color="black">
                About
              </Link>
            </Box>
            <Box
              marginX={2}
              onMouseEnter={handleMenuOpen}
              onMouseLeave={handleMenuClose}
              sx={{ position: 'relative' }}>
              <Link underline="none" component="a" color="black">
                Services
              </Link>
              <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleMenuClose}
                MenuListProps={{
                  onMouseEnter: handleMenuEnter,
                  onMouseLeave: handleMenuLeave,
                }}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}>
                <MenuItem component="a" href="/page-family-success-coach">Family Success Coach</MenuItem>
                <MenuItem component="a" href="/page-photography">Photography</MenuItem>
              </Menu>
            </Box>
            <Box marginX={2}>
              <Link underline="none" component="a" href="/page-podcasts" color="black">
                Podcast
              </Link>
            </Box>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton color="black" edge="start" onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={mobileOpen} onClose={handleDrawerToggle}>
        {drawer}
      </Drawer>
    </>
  );
};

Topbar.propTypes = {
  themeMode: PropTypes.string.isRequired,
  themeToggler: PropTypes.func.isRequired,
};

export default Topbar;
