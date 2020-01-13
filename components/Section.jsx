import { Box, Container } from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles'

export default ({ bg, children, container = true, ...props }) => {
  const theme = useTheme();
  const customStyle = {
    backgroundColor: theme.palette[bg].main,
    color: theme.palette[bg].contrastText
  };

  return (
    <Box style={customStyle}>
      {children && (
        <Box py={6} {...props}>
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
