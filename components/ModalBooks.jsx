import { Box, Button, Grid, useMediaQuery, withTheme } from '@material-ui/core'
import Dialog from '@material-ui/core/Dialog'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import CloseIcon from '@material-ui/icons/Close'
import React from 'react'

export default withTheme(({ content, theme }) => {
  const [open, setOpen] = React.useState(false);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button size="small" onClick={handleClickOpen} variant="text">
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
          <Box
            py={!isMobile ? 7 : "60px"}
            px={!isMobile ? 7 : "40px"}
            color="white"
            align="center"
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

            {content.books_title && (
              <Typography
                variant="h2"
                style={{ marginBottom: !isMobile ? "60px" : "35px" }}
              >
                {content.books_title}
              </Typography>
            )}
            {!isMobile ? (
              <Grid container spacing={3}>
                {content.books &&
                  content.books.map(book => (
                    <React.Fragment>
                      <Grid item xs={6}>
                        <Typography
                          align="right"
                          variant="body1"
                          style={{
                            fontWeight: 600,
                            textTransform: "uppercase"
                          }}
                        >
                          {book.title}
                        </Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography align="left" variant="body1">
                          {book.author}
                        </Typography>
                      </Grid>
                    </React.Fragment>
                  ))}
              </Grid>
            ) : (
              content.books &&
              content.books.map(book => (
                <Typography display="block" align="center" variant="body1">
                  <Typography
                    variant="inherit"
                    display="inline"
                    style={{ fontWeight: 800, textTransform: "uppercase" }}
                  >
                    {book.title}
                  </Typography>
                  <Typography variant="inherit" display="inline">
                    {" - "}
                  </Typography>
                  <Typography variant="inherit" display="inline">
                    {book.author}
                  </Typography>
                </Typography>
              ))
            )}
          </Box>
        </Box>
      </Dialog>
    </React.Fragment>
  );
});
