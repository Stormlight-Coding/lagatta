import { AppBar, Container, Grid, Hidden, IconButton, Link, Toolbar } from '@material-ui/core'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import MenuIcon from '@material-ui/icons/Menu'
import NextLink from 'next/Link'
import { withRouter } from 'next/router'

import TopMenu from './TopMenu'

const Header = ({ setMenu, support, setSupport, router, theme }) => {
  const trigger = useScrollTrigger({
    threshold: 0,
    disableHysteresis: true
  });
  return (
    <AppBar
      position="sticky"
      color={"primary"}
      inve
      style={{
        zIndex: 999
      }}
    >
      <Toolbar>
        <Container fixed>
          <Grid
            container
            spacing={3}
            alignItems="center"
            justify="space-between"
          >
            <Hidden mdUp implementation="js">
              <Grid item>
                <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  onClick={() => setMenu(true)}
                >
                  <MenuIcon />
                </IconButton>
              </Grid>
              <Grid item>
                <Link href="/">
                  <img src={"/static/images/logo.svg"} alt="logo" height="16" />
                </Link>
              </Grid>
              <Grid item>
                <NextLink passHref href={"/book-charter"}>
                  <Link
                    style={{
                      fontWeight: router.route === "/book-charter" ? 800 : 200,
                      textTransform: "uppercase",
                      letterSpacing: "1.5px",
                      fontSize: "14px",
                      lineHeight: "20px"
                    }}
                    color="inherit"
                  >
                    BOOK
                  </Link>
                </NextLink>
              </Grid>
            </Hidden>
            <Hidden smDown implementation="js">
              <Grid item xs>
                <TopMenu />
              </Grid>
            </Hidden>
          </Grid>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default withRouter(Header);
