import { Box, Container, Grid, Hidden } from '@material-ui/core'
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
  images = [],
  ...props
}) => {
  const theme = useTheme();
  const customStyle = {
    backgroundColor: theme.palette[bg].main,
    color: theme.palette[bg].contrastText
  };

  return (
    <Box style={customStyle} className="siema">
      <Grid container>
        {boxLeft && (
          <Grid item xs={12} md={4}>
            {boxLeft}
          </Grid>
        )}
        <Hidden smDown>
          <Grid item xs={8}>
            {headerImage && <img src={headerImage} style={{ width: "100%" }} />}

            {children && (
              <Box py={5} px={7} {...props}>
                {container ? (
                  <Container fixed maxWidth={false}>
                    {children}
                  </Container>
                ) : (
                  children
                )}
              </Box>
            )}

            {images.length > 0 && (
              <Box>
                <Carousel
                  showThumbs={false}
                  showArrows={true}
                  autoPlay
                  stopOnHover
                  infiniteLoop
                >
                  {images.map(i => (
                    <img src={i.src} style={{ width: "100%" }} />
                  ))}
                </Carousel>
              </Box>
            )}
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
