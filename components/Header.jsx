import { AppBar, Container, Grid, Hidden, IconButton, Link, Toolbar } from '@material-ui/core'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import MenuIcon from '@material-ui/icons/Menu'
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
            <Grid item>
              <Link href="/">
                <img src={"/static/images/logo.svg"} alt="logo" height="20" />
              </Link>
            </Grid>
            <Hidden xsDown implementation="css">
              <Grid item>
                <TopMenu />
              </Grid>
            </Hidden>
            <Hidden smUp implementation="css">
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
            </Hidden>
          </Grid>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default withRouter(Header);
