import { Box, IconButton, Typography } from '@material-ui/core'
import Dialog from '@material-ui/core/Dialog'
import CloseIcon from '@material-ui/icons/Close'
import React from 'react'

export default function CustomizedDialogs({ open, handleClose, gallery }) {
  return (
    <Dialog
      PaperProps={{
        style: {
          backgroundColor: "transparent"
        }
      }}
      maxWidth={"md"}
      scroll="body"
      onClose={handleClose}
      open={open}
    >
      <Box bgcolor="primary.main" style={{ position: "relative" }}>
        <IconButton
          color="inherit"
          aria-label="close"
          style={{
            position: "absolute",
            right: "12px",
            top: "2px"
          }}
          onClick={handleClose}
        >
          <CloseIcon />
        </IconButton>
        {gallery.images.map(i => (
          <Box>
            <Box py={"20px"} px={"40px"} bgcolor={gallery.color} align="left">
              <Typography variant="h2" style={{ marginBottom: "15px" }}>
                {i.title}
              </Typography>
              <Typography variant="body1">{i.body}</Typography>
            </Box>

            <Box>
              <img src={i.src} style={{ width: "100%" }} />
            </Box>
          </Box>
        ))}
      </Box>
    </Dialog>
  );
}
