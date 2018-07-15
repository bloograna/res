import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import About from '../tabContent/About';
import TechStack from '../tabContent/TechStack';
import Contact from '../tabContent/Contact';

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    flexDirection: 'column',
    display: 'flex',
    alignItems: 'flex-end',
    width: `90vw`,
    height: `95vh`,
    flexWrap: `nowrap`
  },
  header: {
    display: 'flex',
    justifyContent: 'center',
    width: `90vw`,
    height: `10vh`
  },
  tabContent: {
    width: `90vw`,
    justifyContent: 'center'
  }
});

class MenuTabs extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {
    const { classes, theme } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.header}>
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            fullWidth
          >
            <Tab label="About" />
            <Tab label="Tech Stack" />
            <Tab label="Contact" />
          </Tabs>
        </div>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.value}
          className={classes.tabContent}
          onChangeIndex={this.handleChangeIndex}
        >
          <About />
          <TechStack />
          <Contact />
        </SwipeableViews>
      </div>
    );
  }
}

MenuTabs.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(MenuTabs);
