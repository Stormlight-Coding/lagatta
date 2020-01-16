import { Box, Grid, Hidden, Typography, useMediaQuery } from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles'
import { Carousel } from 'react-responsive-carousel'

import ModalGallery from './ModalGallery'

export default ({
  bg,
  children,
  headerImage,
  footerImage,
  container = true,
  left = false,
  right = false,
  galleries = [],
  images = [],
  areamap,
  ...props
}) => {
  const theme = useTheme();
  const customStyle = {
    backgroundColor: theme.palette[bg].main,
    color: theme.palette[bg].contrastText,
    position: "relative"
  };
  const [current, setCurrent] = React.useState(0);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const gallery = galleries[current];

  React.useEffect(() => {
    ImageMap("img[usemap]");
  });

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box style={customStyle}>
      <Grid container alignItems="center">
        {left && (
          <Grid item xs={12} md={4}>
            <Box align="center">
              <img
                src={areamap.src}
                usemap={`#${areamap.name}`}
                style={{ maxWidth: "480px", maxHeight: "720px", width: "100%" }}
              />
              {areamap && (
                <map name={areamap.name}>
                  {areamap.areas.map(a => (
                    <area
                      style={{ cursor: "pointer" }}
                      coords={a.coords}
                      shape={a.shape}
                      onClick={
                        !isMobile
                          ? () => {
                              var index = galleries.findIndex(
                                g => a.name === g.name
                              );
                              if (index >= 0) setCurrent(index);
                            }
                          : () => {
                              var index = galleries.findIndex(
                                g => a.name === g.name
                              );
                              if (index >= 0) setCurrent(index);
                              setOpen(true);
                            }
                      }
                    />
                  ))}
                </map>
              )}
              <ModalGallery
                open={open && isMobile}
                handleClose={handleClose}
                gallery={gallery}
              />
            </Box>
          </Grid>
        )}
        <Hidden smDown>
          <Grid item xs={8}>
            <Box>
              {headerImage && (
                <img src={headerImage} style={{ width: "100%" }} />
              )}
              <Carousel
                showThumbs={false}
                showArrows={true}
                showStatus={false}
                showIndicators={false}
                autoPlay
                stopOnHover
                infiniteLoop
                labels={{
                  leftArrow: "here"
                }}
              >
                {gallery.images.map(i => (
                  <Box>
                    <Box
                      py={5}
                      pl={7}
                      pr={5}
                      bgcolor={gallery.color}
                      align="left"
                    >
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
              </Carousel>
            </Box>
          </Grid>
        </Hidden>

        {right && (
          <Grid item xs={12} md={4}>
            <Box align="center">
              <img
                src={areamap.src}
                usemap={`#${areamap.name}`}
                style={{ maxWidth: "480px", maxHeight: "720px", width: "95%" }}
              />
              {areamap && (
                <map name={areamap.name}>
                  {areamap.areas.map(a => (
                    <area
                      style={{ cursor: "pointer" }}
                      coords={a.coords}
                      shape={a.shape}
                      onClick={() => {
                        var index = galleries.findIndex(g => a.name === g.name);
                        if (index >= 0) setCurrent(index);
                      }}
                    />
                  ))}
                </map>
              )}
            </Box>
          </Grid>
        )}
      </Grid>
    </Box>
  );
};
