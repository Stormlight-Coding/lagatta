import { Box, Grid, Link, makeStyles } from '@material-ui/core'
import NextLink from 'next/link'
import { withRouter } from 'next/router'

import routes from '../routes'

const useStyles = makeStyles(theme => ({
  link: {
    textTransform: "uppercase",
    letterSpacing: "1.5px",
    fontSize: "12px",
    lineHeight: "16px",
    display: "inline-block",
    textAlign: "center",

    [theme.breakpoints.only("md")]: {
      letterSpacing: "1px",
      fontSize: "12px",
      lineHeight: "16px"
    }
  }
}));

const Links = ({ route, router }) => {
  const classes = useStyles();
  return (
    <Grid item>
      <NextLink passHref href={route}>
        <Link
          className={classes.link}
          style={{
            fontWeight: router.route == route ? 800 : 400
          }}
          color="inherit"
        >
          {routes[route].name}
        </Link>
      </NextLink>
    </Grid>
  );
};
export default withRouter(({ children, router }) => (
  <Grid container spacing={0} justify="space-between">
    <Grid item>
      <Box minWidth="320px" width="100%">
        <Grid container spacing={5} justify="space-between">
          {Object.keys(routes)
            .filter(r => routes[r].position === "left")
            .map(route => (
              <Links router={router} route={route} />
            ))}
        </Grid>
      </Box>
    </Grid>

    <Grid item style={{ width: "160px " }}>
      <Link href="/" style={{ verticalAlign: "center", lineHeight: "20px" }}>
        <img src={"/static/images/logo.svg"} alt="logo" height="18px" />
      </Link>
    </Grid>

    <Grid item>
      <Box minWidth="320px" width="100%">
        <Grid container spacing={5} justify="space-between">
          {Object.keys(routes)
            .filter(r => routes[r].position === "right")
            .map(route => (
              <Links router={router} route={route} />
            ))}
        </Grid>
      </Box>
    </Grid>
  </Grid>
));
