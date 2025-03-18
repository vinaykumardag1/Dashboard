import React, { useState } from 'react';
import { Button, Menu, MenuItem, IconButton } from '@mui/material';
import { AccountCircle, Settings, Brightness4, Brightness7, Logout, NotificationAdd } from '@mui/icons-material';
import Badge from '@mui/material/Badge';

// import { useTranslation } from 'react-i18next';
import icons8 from '../assets/icons8-administrator-male-96.png';
import { Link } from 'react-router-dom';
import FullscreenToggle from './fullsrceen';

const Navbar = ({ toggleTheme, theme }) => {
  // const { t, i18n } = useTranslation();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // const changeLanguage = (event) => {
  //   i18n.changeLanguage(event.target.value);
  // };

  return (
    <>
      <div className='flex mb-[40px] pr-[30px] py-[10px] justify-between bg-[#FFE600] items-center'>
        <div className='px-[40px]'>
          <img src={icons8} alt="profile icon" className='rounded-full ' />
          <p className='m-[0]'>user@gmail.com</p>
        </div>
        <p className='text-5xl'>Dashboard</p>
        <div>
          <FullscreenToggle />
          <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                 <NotificationAdd  color='primary' sx={{fontSize:30}}/>
              </Badge>
          </IconButton>
          <Button
            size="large"
            edge="end"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="error"
            variant='contained'
           sx={{margin:"0px 20px"}}
          >
            menu
          </Button>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>
              <AccountCircle sx={{ mr: 1 }} />
              <Link to="/profile">Profile</Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Settings sx={{ mr: 1 }} />
              <Link to="/settings">Settings</Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Button onClick={toggleTheme} sx={{ mr: 2 }}>
                {theme === 'dark' ? <Brightness7 /> : <Brightness4 />}
                {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
              </Button>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Logout sx={{ mr: 1 }} />
              Logout
            </MenuItem>
          </Menu>
        </div>
      </div>
    </>
  );
};

export default Navbar;
