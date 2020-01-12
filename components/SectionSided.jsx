import { Box, Container, Grid } from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles'

export default ({
  bg,
  children,
  headerImage,
  footerImage,
  container = true,
  boxLeft = false,
  boxRight = false,
  ...props
}) => {
  const theme = useTheme();
  const customStyle = {
    backgroundColor: theme.palette[bg].main,
    color: theme.palette[bg].contrastText
  };

  return (
    <Box style={customStyle}>
      <Grid container>
        {boxLeft && (
          <Grid item xs={4}>
            {boxLeft}
          </Grid>
        )}
        <Grid item xs>
          {headerImage && <img src={headerImage} style={{ width: "100%" }} />}

          {children && (
            <Box py={8} {...props}>
              {container ? (
                <Container fixed maxWidth={false}>
                  {children}
                </Container>
              ) : (
                children
              )}
            </Box>
          )}

          {footerImage && <img src={footerImage} style={{ width: "100%" }} />}
        </Grid>
        {boxRight && (
          <Grid item xs={4}>
            {boxRight}
          </Grid>
        )}
      </Grid>
    </Box>
  );
};
