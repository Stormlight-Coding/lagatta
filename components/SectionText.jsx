import { Box, Container, Typography } from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles'

export default ({ content, bg, ...props }) => {
  const theme = useTheme();
  const customStyle = {
    backgroundColor: theme.palette[bg].main,
    color: theme.palette[bg].contrastText
  };

  return (
    <Box style={customStyle}>
      <Box py={8} align="center" {...props}>
        <Container fixed maxWidth={false}>
          {content.title && (
            <Typography variant="h2" paragraph>
              {content.title}
            </Typography>
          )}
          {content.body && (
            <Typography variant="body1" paragraph>
              {content.body}
            </Typography>
          )}
          {content.bodies &&
            content.bodies.map(body => (
              <Typography variant="body1" paragraph>
                {body}
              </Typography>
            ))}

          {content.image && (
            <img src={content.image.src} style={{ width: "100%" }} />
          )}
        </Container>
      </Box>
    </Box>
  );
};
