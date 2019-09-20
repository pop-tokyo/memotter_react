import React, {useEffect} from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import MemoFamily from "./MemoFamily";

export default function MainDisplay(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const current_page = props.current_page;

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
        classes={{
          indicator: classes.indicator
        }}
        inkBarStyle={{background: 'blue'}}
      >
        <Tab label="home" {...a11yProps()} />
        <Tab label="world" {...a11yProps(1)} />
        <Tab label="profile" {...a11yProps(2)} />
      </Tabs>

      <TabPanel value={value} index={0} className={classes.memos}>
        <MemoFamily gridXs={12} gridMd={12} requiredMemoInput={true} current_page={current_page} displayClassName=""/>
      </TabPanel>
      <TabPanel value={value} index={1} className={classes.memos}>
        <MemoFamily gridXs={12} gridMd={12} requiredMemoInput={true} current_page={current_page} displayClassName=""/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        coming soon...
      </TabPanel>
    </div>
  );
}


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 224,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  indicator: {
    backgroundColor: '#FFFFFF',
  },
  memos: {
    width: '50%',
  },
}));
