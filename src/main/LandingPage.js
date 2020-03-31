import React from 'react';
import PropTypes from 'prop-types';
import { Container, Grid, Card, CardMedia, CardContent, Typography, withStyles } from '@material-ui/core';
import { ListItemLink, breadcrumbNameMap } from '../otherSections/BreadCrumbLinks';
import dabImg from '../../file/dab.png'

const styles = theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  landingContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    display: 'flex',
    height: '100%',
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
});

const LandingPage = ({ classes }) =>
  <Container className={classes.cardGrid} maxWidth="md">
    <Grid container spacing={4} className={classes.landingContainer}>
      {Object.entries(breadcrumbNameMap).slice(1).map((path) => (
        <Grid item key={path[1]} xs={12} sm={6} md={4}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.cardMedia}
              image={dabImg}
              title="Image title"
            />
            <CardContent className={classes.cardContent} >
              <Typography gutterBottom variant="h5" component="h2">
                {/* {path[1]} */}
                <ListItemLink to={`${path[0]}`} />
              </Typography>
            </CardContent>
            {/* <CardActions>
              <ListItemLink to={`${path[0]}`} />
            </CardActions> */}
          </Card>
        </Grid>
      ))}
    </Grid>
  </Container>


LandingPage.propTypes = {
  classes: PropTypes.object.isRequired
}
export default withStyles(styles, { withTheme: true })(LandingPage);

