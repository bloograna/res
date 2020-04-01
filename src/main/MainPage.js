import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import MainContainer from './MainContainer.hoc';
import LandingPage from './LandingPage';
import About from '../tabContent/About';
import Contact from '../tabContent/Contact';
import TechStack from '../tabContent/Tech';
import Footer from '../otherSections/Footer';
import BreadCrumbLinks from '../otherSections/BreadCrumbLinks';

const styles = theme => ({
  root: {
    flexDirection: 'column',
    display: 'flex',
    width: `100vw`,
    height: `100vh`,
    backgroundColor: theme.palette.background.paper,
    justifyContent: 'center',
    alignItems: 'center'
  },
  breadCrumb: {
    width: '100vw',
    height: '10vh',
    display: 'flex',
    alignItems: 'flex-end',
    paddingLeft: '20%'
  },
  body: {
    width: '100vw',
    height: '85vh',
    flex: '1 1 auto'
  },
  footer: {
    width: '100vw',
    height: '5vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

class MainPage extends Component {

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.breadCrumb}>
          <BreadCrumbLinks />
        </div>
        <div className={classes.body}>
          <Switch>
            <Route name="about" path="/about" >
              <About />
            </Route>
            <Route name="tech" path="/tech" >
              <TechStack />
            </Route>
            <Route name="contact" path="/contact" >
              <Contact />
            </Route>
            <Route name="landing" exact path="/" >
              <LandingPage />
            </Route>
          </Switch>
        </div>
        <div className={classes.footer}>
          <Footer />
        </div>
      </div>
    );
  }
}

MainPage.propTypes = {
  classes: PropTypes.object.isRequired,
};



export default MainContainer(withStyles(styles)(MainPage));
