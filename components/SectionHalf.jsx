import { Box, Button, Grid, Hidden, makeStyles, Typography, useMediaQuery } from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles'

import Link from './Link'

const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.up("lg")]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
      paddingLeft: theme.spacing(7),
      paddingRight: theme.spacing(7)
    },

    [theme.breakpoints.only("md")]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
      paddingLeft: theme.spacing(5),
      paddingRight: theme.spacing(5)
    },

    [theme.breakpoints.only("sm")]: {
      padding: `50px 8px !important`,
      maxWidth: "600px",
      margin: "0 auto",
      textAlign: "center"
    },

    [theme.breakpoints.only("xs")]: {
      padding: `50px 25px !important`,
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
  const mdUp = useMediaQuery(theme.breakpoints.up("md"));
  const classes = useStyles();
  return (
    <Box style={customStyle}>
      <Grid
        container
        direction={reverse && smUp ? "row-reverse" : "row"}
        alignItems="stretch"
      >
        <Grid item xs={12} sm={12} md={6} style={{ display: "flex" }}>
          <Box className={classes.root} {...props}>
            {content.title && (
              <Typography variant="h2" paragraph>
                {content.title}
              </Typography>
            )}
            {content.body && (
              <Typography
                variant="body1"
                paragraph={
                  (content.bodies && content.bodies.length) ||
                  content.link ||
                  children
                }
              >
                {content.body}
              </Typography>
            )}
            {content.bodies &&
              content.bodies.map((body, index) => (
                <Typography
                  variant="body1"
                  paragraph={
                    content.link ||
                    children ||
                    index !== content.bodies.length - 1
                  }
                >
                  {body}
                </Typography>
              ))}

            {content.link && (
              <Box>
                <Link href={content.link.href}>
                  <Button
                    size="small"
                    variant="text"
                    style={{ marginLeft: mdUp ? "-12px" : "0" }}
                  >
                    {content.link.text}
                  </Button>
                </Link>
              </Box>
            )}

            {children}
          </Box>
        </Grid>

        <Grid item xs={12} sm={12} md={6} style={{ display: "flex" }}>
          <Box
            style={{
              backgroundColor: "white",
              height: "100%",
              width: "100%"
            }}
          >
            <Hidden {...hideImage}>
              {content.image && (
                <img
                  src={content.image.src}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              )}
            </Hidden>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
