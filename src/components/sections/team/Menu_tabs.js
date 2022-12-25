import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import SelectTextFields from './suggest';
import Carousel from "react-multi-carousel";
import Playing_XI from "./Suggest_playingXI";
import DlCalculator from './dl_calculator';
import Retention from './Retention';
import Card from './PlayerCard';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs(props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5,
        slidesToSlide: 2 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};

  return (
    <Box sx={{ width: '100%' }} style={{marginTop:"3vh"}}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }} style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Complete Squad" {...a11yProps(0)} />
          <Tab label="Playing XI" {...a11yProps(1)} />
          <Tab label="DL Method" {...a11yProps(2)} />
          <Tab label="Player Retention" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
          <Carousel responsive={responsive}>
              {props.franchise.team.map((player) => (
                <Card player={player} purpose={'squad'} />
              ))}
            </Carousel>
            <SelectTextFields players_stats={props.franchise.draft} />
      </TabPanel>
      <TabPanel value={value} index={1}>
          <Carousel responsive={responsive}>
              {props.franchise.playing_xi.map((player) => (
                <Card player={player} purpose={'playing_xi'}/>
              ))}
            </Carousel>
        <div className='container'>
          <Playing_XI players_stats={props.franchise.team} playing_xi={props.franchise.playing_xi}/>
        </div>
      
      </TabPanel>
      <TabPanel value={value} index={2}>
                <DlCalculator />
      </TabPanel>
      <TabPanel value={value} index={3}>
               <Retention franchise={props.franchise} />
      </TabPanel>
    </Box>
  );
}