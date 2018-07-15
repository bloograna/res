import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MainContainer from './MainContainer';
import MenuTabs from '../menu/MenuTabs';
import Footer from '../footer/Footer';

const styles = theme => ({
  root: {
    flexDirection: 'column',
    display: 'flex',
    width: `100vw`,
    height: `100vh`,
    backgroundColor: theme.palette.background.paper,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

class MainPage extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <MenuTabs />
        <Footer />
      </div>
    );
  }
}

MainPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default MainContainer(withStyles(styles)(MainPage));
