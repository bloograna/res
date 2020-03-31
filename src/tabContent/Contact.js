import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Button from '@material-ui/core/Button';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide } from '@material-ui/core';


const styles = theme => ({
  root: {
    paddingTop: `2vh`,
    paddingLeft: `1vh`,
    paddingRight: `1vh`,
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column'
  },
  button: {
    margin: theme.spacing(2)
  }
});

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

class Contact extends React.Component {
  state = {
    open: false
  };

  onClick = () => {
    this.setState({ open: true });
  };

  onClose = () => {
    this.setState({ open: false });
  };

  onLink = () => {
    window.open(
      'https://www.linkedin.com/in/nadia-bernhardt-8864394b/',
      '_blank'
    );
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Button
          variant="outlined"
          size="medium"
          color="secondary"
          className={classes.button}
          onClick={this.onClick}
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </Button>
        <Button
          variant="outlined"
          size="medium"
          color="secondary"
          className={classes.button}
          onClick={this.onLink}
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </Button>
        <Dialog
          open={this.state.open}
          TransitionComponent={Transition}
          onClose={this.onClose}
          aria-labelledby="dialog-slide-title"
          aria-describedby="dialog-slide-description"
        >
          <DialogTitle id="dialog-slide-title">
            {'This is awkward...'}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="dialog-slide-description">
              {
                "Nadia hasn't gotten around to wire up an actual feedback page yet and she hates mailto. "
              }
              {'Send her an email at nadia@nadiabernhardt.com in the meantime?'}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.onClose} color="secondary">
              Of Course
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

Contact.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Contact);
