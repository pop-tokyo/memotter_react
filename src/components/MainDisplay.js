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

  useEffect(() => {
    if (current_page === 'world') {
      setValue(0);
    } else if (current_page === 'home') {
      setValue(1);
    } else if (current_page === 'profile') {
      setValue(2);
    }
  }, []);

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
      >
        <Tab value={0} label="World" {...a11yProps()} />
        <Tab value={1} label="home" {...a11yProps(1)} />
        <Tab value={2} label="profile" {...a11yProps(2)} />
      </Tabs>

      <TabPanel value={value} index={0} className={classes.memos}>
        <MemoFamily gridXs={12} gridMd={12} requiredMemoInput={true} current_page={current_page} displayClassName=""/>
      </TabPanel>
      <TabPanel value={value} index={1}>
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
  memos: {
    width: '50%',
  },
}));
