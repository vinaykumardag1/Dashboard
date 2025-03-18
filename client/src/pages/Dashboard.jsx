import React, { useState } from 'react';
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Data1 from './Data1';
import Navbar from '../components/Navbar';
import CreateUser from '../components/createUser';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import InfoIcon from '@mui/icons-material/Info';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import StarIcon from '@mui/icons-material/Star';
import AddIcon from '@mui/icons-material/Add';
import Profile from './Profile';
import Settings from './Settings';
import Contact from './contact';
import Info from './Info';

const TabPanel = ({ children, value, index }) => {
  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      sx={{ flexGrow: 1, p: 3 }}
    >
      {value === index && <>{children}</>}
    </Box>
  );
};

const a11yProps = (index) => {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
};

const Dashboard = () => {
  const [value, setValue] = useState(0);
  const [theme, setTheme] = useState('light');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const themeConfig = createTheme({
    palette: {
      mode: theme,
    },
  });

  const tabs = [
    { label: 'Title 1', icon: <HomeIcon />, content: <Data1 /> },
    { label: 'Profile', icon: <PersonIcon />, content: <Profile/> },
    { label: 'Settings', icon: <SettingsIcon />, content: <Settings/> },
    { label: 'Info', icon: <InfoIcon />, content: <Info/> },
    { label: 'Contact ', icon: <ContactMailIcon />, content:<Contact/>},
    { label: 'Reviews', icon: <StarIcon />, content: 'Eat Five Star, Do Nothing' },
    { label: 'User', icon: <AddIcon />, content: <CreateUser /> },
  ];

  return (
    <ThemeProvider theme={themeConfig}>
      <CssBaseline />
      <Navbar toggleTheme={toggleTheme} theme={theme} />
      
      <Box sx={{ display: 'flex', bgcolor: 'background.paper' }}>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{ borderRight: 1, borderColor: 'divider', minWidth: 150 }}
        >
          {tabs.map((tab, index) => (
            <Tab key={index} label={tab.label} icon={tab.icon} {...a11yProps(index)} />
          ))}
        </Tabs>
        <Box sx={{ flexGrow: 1 }}>
          {tabs.map((tab, index) => (
            <TabPanel key={index} value={value} index={index}>
              {typeof tab.content === 'string' ? <Typography>{tab.content}</Typography> : tab.content}
            </TabPanel>
          ))}
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Dashboard;
