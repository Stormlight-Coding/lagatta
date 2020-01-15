import { Box, Button, Grid, Hidden, makeStyles, Typography, useMediaQuery } from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles'

import Link from './Link'

const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.up("lg")]: {
      paddingTop: theme.spacing(5),
      paddintBottom: theme.spacing(5),
      paddingLeft: theme.spacing(7),
      paddingRight: theme.spacing(7)
    },

    [theme.breakpoints.only("md")]: {
      padding: theme.spacing(5)
    },

    [theme.breakpoints.only("sm")]: {
      padding: `${theme.spacing(5)}px 8px !important`,
      maxWidth: "600px",
      margin: "0 auto"
    },

    [theme.breakpoints.only("xs")]: {
      padding: `${theme.spacing(5)}px 8px !important`,
      textAlign: "center"
    }
  }
}));

export default ({ content, bg, reverse, children, hideImage, ...props }) => {
  const theme = useTheme();
  const customStyle = {
    backgroundColor: theme.palette[bg].main,
    color: theme.palette[bg].contrastText
  };
  const smUp = useMediaQuery(theme.breakpoints.up("sm"));
  const classes = useStyles();
  return (
    <Box style={customStyle}>
      <Grid
        container
        direction={reverse && smUp ? "row-reverse" : "row"}
        alignItems="center"
      >
        <Grid item xs={12} sm={12} md={6}>
          <Box className={classes.root} {...props}>
            {content.title && (
              <Typography variant="h2" paragraph>
                {content.title}
              </Typography>
            )}
            {content.body && (
              <Typography variant="body1" paragraph>
                {content.body}
              </Typography>
            )}
            {content.bodies &&
              content.bodies.map(body => (
                <Typography variant="body1" paragraph>
                  {body}
                </Typography>
              ))}

            {content.link && (
              <Box>
                <Link href={content.link.href}>
                  <Button variant="text">{content.link.text}</Button>
                </Link>
              </Box>
            )}

            {children}
          </Box>
        </Grid>

        <Grid item xs={12} sm={12} md={6}>
          <Hidden {...hideImage}>
            {content.image && (
              <img src={content.image.src} style={{ width: "100%" }} />
            )}
          </Hidden>
        </Grid>
      </Grid>
    </Box>
  );
};
