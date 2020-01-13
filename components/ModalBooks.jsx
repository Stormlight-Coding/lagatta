import { Box, Button, Grid } from '@material-ui/core'
import Dialog from '@material-ui/core/Dialog'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
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
    <React.Fragment>
      <Button onClick={handleClickOpen} variant="text">
        {content.button.text}
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

            {content.books_title && (
              <Typography variant="h2" style={{ marginBottom: "60px" }}>
                {content.books_title}
              </Typography>
            )}
            <Grid container spacing={3}>
              {content.books &&
                content.books.map(book => (
                  <React.Fragment>
                    <Grid item xs={6}>
                      <Typography align="right" variant="body1">
                        {book.author}
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography
                        style={{ textTransform: "uppercase" }}
                        align="left"
                        variant="body1"
                      >
                        {book.title}
                      </Typography>
                    </Grid>
                  </React.Fragment>
                ))}
            </Grid>
          </Box>
        </Box>
      </Dialog>
    </React.Fragment>
  );
}
