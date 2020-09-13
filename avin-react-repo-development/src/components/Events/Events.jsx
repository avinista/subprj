import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Alert from '@material-ui/lab/Alert';

import event from './../../Services/event.json';
import problem from './../../Services/problem.json';
import rokhdad from './../../Services/rokhdad.json';


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
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));
const tabsStyle =  {
  color:"#212121",
  fontFamily: "BTitrBold,'BTitrBold',tahoma",
  fontSize:"11px",

}
const Styles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
   
  },
}));

export function Events() {
  const classes = useStyles();
  const [value, setValue] = React.useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className="Tab__appbar">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" style={{backgroundColor:"#ffb84d"}} >
          <Tab style={tabsStyle} label=" رویدادها" {...a11yProps(0)} />
          <Tab style={tabsStyle}  label=" رخدادها" {...a11yProps(1)} />
          <Tab style={tabsStyle}  label=" مشکلات" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel  className={classes.tabs} value={value} index={0}>
          { event.map(row => (<Alert style={{marginBottom:"5px"}} severity="info">{row}</Alert>))}
      </TabPanel>
      <TabPanel value={value} index={1}>
      { rokhdad.map(row => (<Alert  style={{marginBottom:"5px"}} severity="warning">{row}</Alert>))}
      </TabPanel>
      <TabPanel value={value} index={2}>
      { problem.map(row => (<Alert style={{marginBottom:"5px"}} severity="error">{row}</Alert>))}
      </TabPanel>
    </div>
  );
}
