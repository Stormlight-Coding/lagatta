import { Box, Drawer, Grid, IconButton, List, ListItem, ListItemText } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import CloseIcon from '@material-ui/icons/Close'
import NextLink from 'next/Link'
import { withRouter } from 'next/router'

import routes from '../routes'
import Footer from './Footer'

const useStyles = makeStyles(theme => {
  return {
    drawer: {
      width: "100%",
      // maxWidth: "420px",
      flexShrink: 0
    },
    drawerPaper: {
      width: "100%",
      // maxWidth: "420px",
      backgroundColor: theme.palette.primary.main
    }
  };
});

export default withRouter(({ setMenu, menu, router, setSupport }) => {
  const classes = useStyles();

  return (
    <Drawer
      variant="temporary"
      open={menu}
      onClose={() => setMenu(false)}
      classes={{
        paper: classes.drawerPaper
      }}
      ModalProps={{
        keepMounted: true
      }}
    >
      <Box p={4}>
        <Grid container alignItems="center" justify="center">
          <Grid item xs={true}>
            <Box align="center">
              <img src="/static/images/logo.svg" alt="" height="16" />
            </Box>
          </Grid>
          <Grid item>
            <IconButton
              color="inherit"
              style={{ padding: "4px" }}
              onClick={() => setSupport(false)}
            >
              <CloseIcon width="20px" />
            </IconButton>
          </Grid>
        </Grid>
      </Box>
      <Box mb={2}>
        <List>
          {Object.keys(routes)
            .filter(r => routes[r].page !== "/")
            .map(route => (
              <NextLink passHref href={route}>
                <ListItem
                  onClick={() => setMenu(false)}
                  button
                  key={route}
                  selected={router.route == route}
                >
                  <ListItemText
                    disableTypography
                    style={{
                      textTransform: "uppercase",
                      textAlign: "center",
                      fontSize: "20px",
                      padding: "6px 0"
                    }}
                  >
                    {routes[route].name}
                  </ListItemText>
                </ListItem>
              </NextLink>
            ))}
        </List>
      </Box>
      <Footer
        px={0}
        style={{
          borderTop: "1px solid white",
          position: "absolute",
          bottom: 0,
          textAlign: "center",
          left: 0,
          width: "100%"
        }}
      />
    </Drawer>
  );
});
