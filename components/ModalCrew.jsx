import { Box, Grid, makeStyles, useMediaQuery, useTheme } from '@material-ui/core'
import Dialog from '@material-ui/core/Dialog'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import CloseIcon from '@material-ui/icons/Close'
import React from 'react'

const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.up("md")]: {
      paddingLeft: theme.spacing(7),
      paddingRight: theme.spacing(7),
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(4)
    },

    [theme.breakpoints.down("sm")]: {
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4)
    }
  }
}));

export default function CustomizedDialogs({ open, handleClose, member }) {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Dialog
      PaperProps={{
        style: {
          backgroundColor: "transparent"
        }
      }}
      maxWidth={"lg"}
      scroll="body"
      fullWidth
      onClose={handleClose}
      open={open}
    >
      <Box
        bgcolor="primary.main"
        style={{ position: "relative" }}
        align="center"
      >
        <Grid container>
          <Grid item xs={12} md={5}>
            {isMobile ? (
              <img
                src={member.image_mobile.src}
                style={{
                  maxWidth: "100%",
                  borderRadius: "50%",
                  marginTop: "40px"
                }}
              />
            ) : (
              <img src={member.image.src} style={{ maxWidth: "100%" }} />
            )}
          </Grid>
          <Grid item xs={12} md={7}>
            <Box
              className={classes.root}
              color="white"
              align={!isMobile ? "left" : "center"}
            >
              <IconButton
                color="inherit"
                aria-label="close"
                style={{
                  position: "absolute",
                  right: "12px",
                  top: "12px"
                }}
                onClick={handleClose}
              >
                <CloseIcon />
              </IconButton>

              {member.title && (
                <Typography variant="h2" paragraph>
                  {member.title}
                </Typography>
              )}
              {member.body && (
                <Typography
                  variant="body2"
                  paragraph
                  style={{
                    fontWeight: 200,
                    fontSize: isMobile ? "11px" : "16px",
                    lineHeight: isMobile ? "19px" : "30px"
                  }}
                >
                  {member.body}
                </Typography>
              )}
              {member.bodies &&
                member.bodies.map(body => (
                  <Typography
                    variant="body2"
                    paragraph
                    style={{
                      fontWeight: 200,
                      fontSize: isMobile ? "11px" : "16px",
                      lineHeight: isMobile ? "19px" : "30px"
                    }}
                  >
                    {body}
                  </Typography>
                ))}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Dialog>
  );
}
