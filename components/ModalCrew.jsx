import { Box, Grid } from '@material-ui/core'
import Dialog from '@material-ui/core/Dialog'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import CloseIcon from '@material-ui/icons/Close'
import React from 'react'

export default function CustomizedDialogs({ open, handleClose, member }) {
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
          <Grid item xs={5}>
            <img src={member.image.src} style={{ maxWidth: "100%" }} />
          </Grid>
          <Grid item xs={7}>
            <Box px={7} py={6} color="white">
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
                <Typography variant="body2" paragraph>
                  {member.body}
                </Typography>
              )}
              {member.bodies &&
                member.bodies.map(body => (
                  <Typography variant="body2" paragraph>
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
