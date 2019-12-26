import { Box, Drawer, Grid, IconButton, List, ListItem, ListItemText } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import CloseIcon from '@material-ui/icons/Close'
import NextLink from 'next/Link'
import { withRouter } from 'next/router'

import routes from '../routes'

const useStyles = makeStyles(theme => {
  return {
    drawer: {
      width: "80%",
      maxWidth: "320px",
      flexShrink: 0
    },
    drawerPaper: {
      width: "80%",
      maxWidth: "320px",
      backgroundColor: "#F8F8F8"
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
      <Box p={2} style={{ backgroundColor: "#FFFFFF" }}>
        <Grid container alignItems="center">
          <Grid item xs={true}>
            <img src="/static/images/logo-black.svg" alt="" height="20" />
          </Grid>
          <Grid item>
            <IconButton
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
          {Object.keys(routes).map(route => (
            <NextLink passHref href={route}>
              <ListItem
                onClick={() => setMenu(false)}
                button
                key={route}
                selected={router.route == route}
              >
                <ListItemText disableTypography>
                  {routes[route].name}
                </ListItemText>
              </ListItem>
            </NextLink>
          ))}
        </List>
      </Box>
    </Drawer>
  );
});
