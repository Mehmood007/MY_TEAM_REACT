import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Graph from './detailed_barcharts';

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
          <Tab label="Complete Stats" {...a11yProps(0)} />
          <Tab label="League vs International" {...a11yProps(1)} />
          <Tab label="Positional Stats" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Graph player_stats={props.player_details.stats} required={"Complete"}/> 
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Graph player_stats={props.player_details.stats} required={"League-International"}/>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <Graph player_stats={props.player_details.position_stats} required={"Positional"}/>
      </TabPanel>
    </Box>
  );
}