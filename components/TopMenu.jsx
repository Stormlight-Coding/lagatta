import { Grid, Link } from '@material-ui/core'
import NextLink from 'next/link'
import { withRouter } from 'next/router'

import routes from '../routes'

const Links = ({ route, router }) => (
  <Grid item>
    <NextLink passHref href={route}>
      <Link
        style={{
          fontWeight: router.route == route ? 800 : 400,
          textTransform: "uppercase",
          letterSpacing: "1.5px",
          fontSize: "12px",
          lineHeight: "16px"
        }}
        color="inherit"
      >
        {routes[route].name}
      </Link>
    </NextLink>
  </Grid>
);

export default withRouter(({ children, router }) => (
  <Grid container spacing={3} justify="space-between">
    {Object.keys(routes)
      .filter(r => routes[r].position === "left")
      .map(route => (
        <Links router={router} route={route} />
      ))}

    <Grid item>
      <Link href="/" style={{ verticalAlign: "center", lineHeight: "20px" }}>
        <img src={"/static/images/logo.svg"} alt="logo" height="18px" />
      </Link>
    </Grid>

    {Object.keys(routes)
      .filter(r => routes[r].position === "right")
      .map(route => (
        <Links router={router} route={route} />
      ))}
  </Grid>
));
