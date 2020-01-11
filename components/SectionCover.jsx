import { Box, Button, Container, Typography } from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles'

export default ({ content, bg, children, ...props }) => {
  const theme = useTheme();
  const customStyle = {
    backgroundColor: theme.palette[bg].main,
    color: theme.palette[bg].contrastText
  };
  return (
    <Box style={customStyle}>
      {content.image && (
        <img src={content.image.src} style={{ width: "100%" }} />
      )}
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
          {content.body2 && (
            <Typography variant="body1" paragraph>
              {content.body2}
            </Typography>
          )}
          {content.link && (
            <Typography variant="caption">{content.link.text}</Typography>
          )}

          {content.button && (
            <Button variant="outlined">{content.button.text}</Button>
          )}

          {children}
        </Container>
      </Box>
    </Box>
  );
};
