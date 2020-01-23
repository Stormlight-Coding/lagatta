import { AppBar, Box, Button, Container, Grid, Hidden, Link, useMediaQuery, withTheme } from '@material-ui/core'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import NextLink from 'next/link'
import { withRouter } from 'next/router'

import TopMenu from './TopMenu'

const Header = ({ setMenu, support, setSupport, router, theme }) => {
  const trigger = useScrollTrigger({
    threshold: 0,
    disableHysteresis: true
  });
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <AppBar
      position="sticky"
      color={"primary"}
      style={{ height: !isMobile ? "45px" : "40px" }}
    >
      <Box
        alignItems="center"
        justifyItems="center"
        style={{
          zIndex: 999,
          height: !isMobile ? "45px" : "40px"
        }}
      >
        <Box>
          <Container fixed style={{ marginTop: 0, marginBottom: 0 }}>
            <Grid
              container
              style={{ marginTop: 0, marginBottom: 0 }}
              spacing={3}
              alignItems="center"
              justify="space-between"
            >
              <Hidden mdUp implementation="js">
                <Grid item xs={3}>
                  <Box align="left">
                    <Button
                      variant="text"
                      style={{
                        padding: 0,
                        minWidth: "auto",
                        lineHeight: "16px",
                        marginTop: "1px",
                        verticalAlign: "middle"
                      }}
                      edge="start"
                      color="inherit"
                      aria-label="menu"
                      onClick={() => setMenu(true)}
                    >
                      <img src="/static/images/Menu.svg" width="20px" />
                    </Button>
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box align="center">
                    <a
                      href="/"
                      style={{
                        lineHeight: "20px",
                        verticalAlign: "middle",
                        display: "inline-block",
                        height: "20px"
                      }}
                    >
                      <img
                        src={"/static/images/logo.svg"}
                        alt="logo"
                        height={isMobile ? "11px" : "18px"}
                      />
                    </a>
                  </Box>
                </Grid>
                <Grid item xs={3}>
                  <Box align="right">
                    <NextLink passHref href={"/book-charter"}>
                      <Link
                        style={{
                          fontWeight: 400,
                          textTransform: "uppercase",
                          textTransform: "uppercase",
                          letterSpacing: "1.5px",
                          fontSize: "12px",
                          lineHeight: "16px",
                          display: "inline-block",
                          marginTop: "0",
                          verticalAlign: "middle"
                        }}
                        variant="caption"
                        color="inherit"
                      >
                        BOOK
                      </Link>
                    </NextLink>
                  </Box>
                </Grid>
              </Hidden>
              <Hidden smDown implementation="js">
                <Grid item xs>
                  <TopMenu />
                </Grid>
              </Hidden>
            </Grid>
          </Container>
        </Box>
      </Box>
    </AppBar>
  );
};

export default withTheme(withRouter(Header));
