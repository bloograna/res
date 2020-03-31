import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import grey from '@material-ui/core/colors/grey';
import aboutSection from '../../file/about.txt';

const styles = {
  root: {
    // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    // color: 'white',
    paddingTop: `2vh`,
    paddingLeft: `1vh`,
    paddingRight: `1vh`,
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column'
  },
  textBlock: {
    color: grey[700],
    lineHeight: 2
  }
};

class About extends React.PureComponent {
  processContent(classes) {
    const splited = aboutSection.split('\n');
    return splited.map((item, index) => <Typography className={classes.textBlock} key={`about-${index}`}>{item}</Typography>)
  }

  render() {
    const { classes } = this.props;
    let actualContent = this.processContent(classes);

    return (
      <div className={classes.root}>{actualContent}</div>
    )
  }
}

About.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired
};

About.contextTypes = {
  router: PropTypes.object
};

export default withStyles(styles)(About);
