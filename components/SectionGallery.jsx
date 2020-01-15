import { Box, Button, Grid, Hidden, Typography } from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles'
import { Carousel } from 'react-responsive-carousel'

export default ({
  bg,
  children,
  headerImage,
  footerImage,
  container = true,
  boxLeft = false,
  boxRight = false,
  galleries = [],
  images = [],
  ...props
}) => {
  const theme = useTheme();
  const customStyle = {
    backgroundColor: theme.palette[bg].main,
    color: theme.palette[bg].contrastText,
    position: "relative"
  };
  const [current, setCurrent] = React.useState(0);

  const gallery = galleries[current];

  return (
    <Box style={customStyle}>
      <Grid container alignItems="center">
        {boxLeft && (
          <Grid item xs={12} md={4}>
            {boxLeft}

            <Box
              align="center"
              style={{
                position: "absolute",
                top: 0,
                left: 0
              }}
            >
              {galleries.map((g, i) => (
                <Box>
                  <Button
                    size="small"
                    variant="text"
                    onClick={() => setCurrent(i)}
                  >
                    {g.title}
                  </Button>
                </Box>
              ))}
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
        {boxRight && (
          <Grid item xs={12} md={4}>
            {boxRight}
          </Grid>
        )}
      </Grid>
    </Box>
  );
};
