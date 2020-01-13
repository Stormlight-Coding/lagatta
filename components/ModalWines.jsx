import { Box, Button } from '@material-ui/core'
import Dialog from '@material-ui/core/Dialog'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import React from 'react'

export default function CustomizedDialogs({ content }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <Button onClick={handleClickOpen} variant="text">
        {"WINES >"}
      </Button>

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
          <Box py={7} px={7} color="white" align="center">
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
            WINE'S MENU
          </Box>
        </Box>
      </Dialog>
    </Box>
  );
}
