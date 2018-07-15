import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import grey from '@material-ui/core/colors/grey';
import techStack from '../../file/techStack';

const styles = {
  root: {
    paddingTop: `2vh`,
    paddingLeft: `1vh`,
    paddingRight: `1vh`,
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column'
  },
  codeBlock: {
    color: grey[700]
  },
  disclaimer: {
    color: grey[700],
    textAlign: 'left'
  }
};

class TechStack extends React.Component {
  render() {
    const { classes } = this.props;
    const tech = JSON.stringify(techStack, null, 2);

    return (
      <div className={classes.root}>
        <Typography className={classes.codeBlock} component="pre">
          <code>{tech}</code>
        </Typography>
        <Typography className={classes.disclaimer} variant="body1">
          * This is not an actual stack.
        </Typography>
      </div>
    );
  }
}

TechStack.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TechStack);
