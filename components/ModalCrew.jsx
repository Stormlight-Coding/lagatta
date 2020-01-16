import { Box, Grid, makeStyles } from '@material-ui/core'
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
      <Box bgcolor="primary.main" style={{ position: "relative" }}>
        <Grid container>
          <Grid item xs={12} md={5}>
            <img src={member.image.src} style={{ maxWidth: "100%" }} />
          </Grid>
          <Grid item xs={12} md={7}>
            <Box className={classes.root} color="white">
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
                    fontSize: "16px",
                    lineHeight: "30px"
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
                      fontSize: "16px",
                      lineHeight: "30px"
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
