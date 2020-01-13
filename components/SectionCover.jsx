import { Box, Button, Container, Hidden, Typography } from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles'

import Link from './Link'

export default ({ content, bg, children, hideSection, ...props }) => {
  const theme = useTheme();
  const customStyle = {
    backgroundColor: theme.palette[bg].main,
    color: theme.palette[bg].contrastText
  };
  return (
    <Hidden {...hideSection}>
      <Box style={customStyle}>
        {content.image && (
          <img src={content.image.src} style={{ width: "100%" }} />
        )}
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

            {children}
          </Container>
        </Box>
      </Box>
    </Hidden>
  );
};
