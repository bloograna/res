import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import grey from '@material-ui/core/colors/grey';

const styles = {
  root: {
    // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    // color: 'white',
    // color: grey[700],
    height: `5vh`,
    width: `90vw`
    // paddingTop: `2vh`,
    // paddingLeft: `0.5vh`,
    // paddingRight: `0.5vh`
  },
  divider: {
    color: grey[700]
  }
};

class Footer extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Divider className={classes.divider} />
      </div>
    );
  }
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Footer);
