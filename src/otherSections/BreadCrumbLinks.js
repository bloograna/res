import React from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink, Route } from 'react-router-dom';
import { Link, ListItem, ListItemText, Breadcrumbs, Typography, withStyles } from '@material-ui/core';

const styles = () => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: 360
  }
});

export const breadcrumbNameMap = {
  '/': 'Home',
  '/about': 'About',
  '/tech': 'Tech',
  '/contact': 'Contact'
};

const ListItemLink = (props) => {
  const { to, ...other } = props;
  const primary = breadcrumbNameMap[to];

  return (
    <ListItem button component={RouterLink} to={to} {...other}>
      <ListItemText primary={primary} />
    </ListItem>
  );
}

ListItemLink.propTypes = {
  to: PropTypes.string.isRequired,
};

const LinkRouter = (props) => <Link {...props} component={RouterLink} />;

const RouterBreadCrumbs = ({ classes }) =>
  <div className={classes.root}>
    <Route>
      {({ location }) => {
        const pathnames = location.pathname.split('/').filter((x) => x);

        return (
          <Breadcrumbs aria-label="breadcrumb">
            <LinkRouter color="inherit" to="/">
              Home
                </LinkRouter>
            {pathnames.map((value, index) => {
              const last = index === pathnames.length - 1;
              const to = `/${pathnames.slice(0, index + 1).join('/')}`;

              return last ? (
                <Typography color="textPrimary" key={to}>
                  {breadcrumbNameMap[to]}
                </Typography>
              ) : (
                  <LinkRouter color="inherit" to={to} key={to}>
                    {breadcrumbNameMap[to]}
                  </LinkRouter>
                );
            })}
          </Breadcrumbs>
        );
      }}
    </Route>
  </div>



RouterBreadCrumbs.propTypes = {
  classes: PropTypes.object.isRequired
}

export { ListItemLink };
export default withStyles(styles, { withTheme: true })(RouterBreadCrumbs);

