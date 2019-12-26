import Box from '@material-ui/core/Box'
import CssBaseline from '@material-ui/core/CssBaseline'
import { makeStyles } from '@material-ui/core/styles'
import React from 'react'

import Footer from './Footer'
import Header from './Header'
import Page from './Page'
import SideMenu from './SideMenu'
import Theme from './Theme'

const useStyles = makeStyles(theme => ({
  root: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  main: {
    flex: 1
  },
  footer: {
    backgroundColor: "rgb(245, 245, 245)",
    marginTop: "auto"
  }
}));

const Layout = ({ children, setMenu, menu, setSupport, support }) => {
  const classes = useStyles();
  return (
    <Theme>
      <Box component="section" className={classes.root}>
        <CssBaseline />
        <SideMenu
          setMenu={setMenu}
          menu={menu}
          support={support}
          setSupport={setSupport}
        />

        <main className={classes.main}>
          <Header setMenu={setMenu} support={support} setSupport={setSupport} />
          <Page>{children}</Page>
        </main>

        <footer className={classes.footer}>
          <Footer />
        </footer>
      </Box>
    </Theme>
  );
};

export default Layout;
