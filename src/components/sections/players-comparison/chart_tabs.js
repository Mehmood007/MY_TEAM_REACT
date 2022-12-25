import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Graph from './Comparison_Graph';

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

  return (
    <Box sx={{ width: '100%' }} style={{marginTop:"3vh"}}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }} style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Innings" {...a11yProps(0)} />
          <Tab label="Boundries" {...a11yProps(1)} />
          <Tab label="Batting" {...a11yProps(2)} />
          {props.data.player1.bowling_innings>=1 || props.data.player2.bowling_innings>=1 ?
          <Tab label="Bowling" {...a11yProps(3)} /> : <></>}
          <Tab label="Dots" {...a11yProps(4)} />
          <Tab label="Positions" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Graph display_requirement={"innings"} data={props.data}/> 
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Graph display_requirement={"boundries"} data={props.data}/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Graph display_requirement={"batting"} data={props.data}/>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Graph display_requirement={"bowling"} data={props.data}/>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Graph display_requirement={"dots"} data={props.data}/>
      </TabPanel>
      <TabPanel value={value} index={5}>
        <Graph display_requirement={"position"} data={props.data}/>
      </TabPanel>
    </Box>
  );
}