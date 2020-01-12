import { Grid, Link } from '@material-ui/core'
import NextLink from 'next/Link'
import { withRouter } from 'next/router'

import routes from '../routes'

export default withRouter(({ children, router }) => (
  <Grid container spacing={3}>
    {Object.keys(routes)
      .filter(r => routes[r].page !== "/")
      .map(route => (
        <Grid item>
          <NextLink passHref href={route}>
            <Link
              style={{
                fontWeight: router.route == route ? "bold" : ""
              }}
              color="inherit"
            >
              {routes[route].name}
            </Link>
          </NextLink>
        </Grid>
      ))}
    {children}
  </Grid>
));
