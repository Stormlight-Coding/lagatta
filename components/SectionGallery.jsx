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
  const [hover, setHover] = React.useState(-1);
  const [current, setCurrent] = React.useState(0);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const gallery = galleries[current];
  const galleryHover = hover > -1 ? galleries[hover] : false;

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
      <ModalGallery
        open={open && isMobile}
        handleClose={handleClose}
        gallery={gallery}
      />
      <Grid container alignItems="center">
        {left && (
          <Grid item xs={12} md={4}>
            <Box align="center">
              <img
                src={
                  galleryHover
                    ? galleryHover.image_side.src
                    : gallery.image_side.src
                }
                useMap={`#${areamap.name}`}
                style={{
                  maxWidth: "480px",
                  maxHeight: "720px",
                  width: "100%"
                }}
              />
              {areamap && (
                <map name={areamap.name}>
                  {areamap.areas.map(a => (
                    <area
                      href={`javascript:void(0)`}
                      style={{ cursor: "pointer" }}
                      coords={a.coords}
                      shape={a.shape}
                      onMouseOut={() => {
                        setHover(-1);
                      }}
                      onMouseOver={() => {
                        var index = galleries.findIndex(g => a.name === g.name);
                        if (index >= 0) setHover(index);
                        console.log("hover" + index);
                      }}
                      onClick={
                        !isMobile
                          ? () => {
                              setCurrentIndex(0);
                              var index = galleries.findIndex(
                                g => a.name === g.name
                              );
                              if (index >= 0) setCurrent(index);
                            }
                          : () => {
                              setCurrentIndex(0);
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
                interval={6000}
                showArrows={true}
                showStatus={false}
                showIndicators={false}
                selectedItem={currentIndex}
                onChange={setCurrentIndex}
                autoPlay
                stopOnHover
                infiniteLoop
                labels={{
                  leftArrow: "here"
                }}
              >
                {gallery.images.map(i => (
                  <Box bgcolor="blue" style={{ height: "100%", width: "100%" }}>
                    <Grid
                      container
                      direction="column"
                      style={{ height: "100%", width: "100%" }}
                    >
                      <Grid item style={{ display: "flex", width: "100%" }}>
                        <Box
                          style={{ height: "100%", width: "100%" }}
                          py={5}
                          pl={7}
                          pr={5}
                          bgcolor={gallery.color}
                          align="left"
                        >
                          <Typography
                            variant="h2"
                            style={{ marginBottom: "15px" }}
                          >
                            {i.title}
                          </Typography>
                          <Typography variant="body1">{i.body}</Typography>
                        </Box>
                      </Grid>
                      <Grid
                        item
                        style={{ flex: 1, display: "flex", width: "100%" }}
                      >
                        <img
                          src={i.src}
                          style={{
                            width: "100%",
                            objectFit: "cover",
                            height: "100%"
                          }}
                        />
                      </Grid>
                    </Grid>
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
                src={
                  galleryHover
                    ? galleryHover.image_side.src
                    : gallery.image_side.src
                }
                useMap={`#${areamap.name}`}
                style={{ maxWidth: "480px", maxHeight: "720px", width: "95%" }}
              />
              {areamap && (
                <map name={areamap.name}>
                  {areamap.areas.map(a => (
                    <area
                      style={{ cursor: "pointer" }}
                      coords={a.coords}
                      shape={a.shape}
                      onMouseOut={() => {
                        setHover(-1);
                      }}
                      onMouseOver={() => {
                        var index = galleries.findIndex(g => a.name === g.name);
                        if (index >= 0) setHover(index);
                        console.log("hover" + index);
                      }}
                      onClick={
                        !isMobile
                          ? () => {
                              setCurrentIndex(0);
                              var index = galleries.findIndex(
                                g => a.name === g.name
                              );
                              if (index >= 0) setCurrent(index);
                            }
                          : () => {
                              setCurrentIndex(0);
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
            </Box>
          </Grid>
        )}
      </Grid>
    </Box>
  );
};
