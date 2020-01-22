import { Box, Container, useMediaQuery } from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles'

export default ({ bg, children, container = true, ...props }) => {
  const theme = useTheme();

  const customStyle = {
    backgroundColor: theme.palette[bg].main,
    color: theme.palette[bg].contrastText
  };
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box style={customStyle}>
      {children && (
        <Box py={!isMobile ? 6 : "50px"} {...props}>
          {container ? (
            <Container fixed maxWidth={false}>
              {children}
            </Container>
          ) : (
            children
          )}
        </Box>
      )}
    </Box>
  );
};
