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
        {"COCKTAILS >"}
      </Button>

      <Dialog
        PaperProps={{
          style: {
            backgroundColor: "transparent"
          }
        }}
        maxWidth={"lg"}
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

            <Box mb={6}>
              <img src="/static/images/LA_GATTA_DRINK_MENU_121119_Page_1.png" />
            </Box>
            <Box mb={6}>
              <img src="/static/images/LA_GATTA_DRINK_MENU_121119_Page_2.png" />
            </Box>
            <Box mb={6}>
              <img src="/static/images/LA_GATTA_DRINK_MENU_121119_Page_3.png" />
            </Box>
            <Box mb={6}>
              <img src="/static/images/LA_GATTA_DRINK_MENU_121119_Page_4.png" />
            </Box>
            <Box mb={6}>
              <img src="/static/images/LA_GATTA_DRINK_MENU_121119_Page_5.png" />
            </Box>
          </Box>
        </Box>
      </Dialog>
    </Box>
  );
}
