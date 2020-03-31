import React from 'react'
import PropTypes from 'prop-types';
import { Link, Typography, withStyles } from '@material-ui/core';

const styles = {
  root: {
    height: `5vh`,
    width: `90vw`
  }
};

const Footer = ({ classes }) =>
  <React.Fragment>
    <footer className={classes.footer}>
      <Typography variant="body2" color="textSecondary" align="center">
        {'© '}
        <Link color="inherit" href="https://nadiabernhardt.com/">
          Nadia Bernhardt
      </Link>{' '}
        {new Date().getFullYear()}
        {'. All Rights Reserved.'}
      </Typography>
    </footer>
  </React.Fragment>

Footer.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles, { withTheme: true })(Footer);
