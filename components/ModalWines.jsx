import { Box, Button, useMediaQuery, useTheme } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import React from "react";

export default function CustomizedDialogs({ content }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <Button size="small" onClick={handleClickOpen} variant="text">
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
          <Box
            py={isMobile ? "40px" : 7}
            px={isMobile ? 0 : 7}
            color="white"
            align="center"
          >
            <IconButton
              color="inherit"
              aria-label="close"
              style={{
                position: "absolute",
                right: isMobile ? "12px" : "12px",
                top: isMobile ? "-5px" : "12px"
              }}
              onClick={handleClose}
            >
              <CloseIcon />
            </IconButton>
            <Box mb={isMobile ? "25px" : 6}>
              <img
                src="/static/images/LA_GATTA_WINE_MENU_1.png"
                style={{ maxWidth: "800px", width: "100%" }}
              />
            </Box>
            <Box mb={isMobile ? "25px" : 6}>
              <img
                src="/static/images/LA_GATTA_WINE_MENU_2.png"
                style={{ maxWidth: "800px", width: "100%" }}
              />
            </Box>
          </Box>
        </Box>
      </Dialog>
    </Box>
  );
}
