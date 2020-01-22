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
                right: !isMobile ? "12px" : "6px",
                top: !isMobile ? "12px" : "6px"
              }}
              onClick={handleClose}
            >
              <CloseIcon />
            </IconButton>

            {content.songs_title && (
              <Typography
                variant="h2"
                style={{ marginBottom: !isMobile ? "60px" : "35px" }}
              >
                {content.songs_title}
              </Typography>
            )}
            {!isMobile ? (
              <Grid container spacing={3}>
                {content.songs &&
                  content.songs.map(song => (
                    <React.Fragment>
                      <Grid item xs={6}>
                        <Typography align="right" variant="body1">
                          {song.author}
                        </Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography
                          style={{
                            fontWeight: 600,
                            textTransform: "uppercase"
                          }}
                          align="left"
                          variant="body1"
                        >
                          {song.title}
                        </Typography>
                      </Grid>
                    </React.Fragment>
                  ))}
              </Grid>
            ) : (
              content.songs &&
              content.songs.map(song => (
                <Typography display="block" align="center" variant="body1">
                  <Typography variant="inherit" display="inline">
                    {song.author}
                  </Typography>
                  <Typography variant="inherit" display="inline">
                    {" - "}
                  </Typography>
                  <Typography
                    variant="inherit"
                    display="inline"
                    style={{ fontWeight: 800 }}
                  >
                    {song.title}
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
