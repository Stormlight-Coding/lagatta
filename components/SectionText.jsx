import { Box, Button, Container, Typography } from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles'

import Link from './Link'

export default ({ content, bg, ...props }) => {
  const theme = useTheme();
  const customStyle = {
    backgroundColor: theme.palette[bg].main,
    color: theme.palette[bg].contrastText
  };

  return (
    <Box style={customStyle}>
      <Box py={6} align="center" {...props}>
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

          {content.link && (
            <Box>
              <Link href={content.link.href}>
                <Button variant="text">{content.link.text}</Button>
              </Link>
            </Box>
          )}

          {content.image && (
            <Box align="center">
              <img src={content.image.src} style={{ maxWidth: "732px" }} />
            </Box>
          )}
        </Container>
      </Box>
    </Box>
  );
};
