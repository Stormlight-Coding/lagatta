import { Box, Button, Container, Typography, useMediaQuery } from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles'

import Link from './Link'

export default ({ content, bg, ...props }) => {
  const theme = useTheme();
  const customStyle = {
    backgroundColor: theme.palette[bg].main,
    color: theme.palette[bg].contrastText
  };
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box style={customStyle}>
      <Box py={!isMobile ? 6 : "50px"} align="center" {...props}>
        <Container fixed maxWidth={"md"}>
          {content.title && (
            <Typography variant="h2" paragraph>
              {content.title}
            </Typography>
          )}
          {content.body && (
            <Typography
              variant="body1"
              paragraph={
                (content.bodies && content.bodies.length) || content.link
              }
            >
              {content.body}
            </Typography>
          )}
          {content.bodies &&
            content.bodies.map((body, index) => (
              <Typography
                variant="body1"
                paragraph={content.link || index !== content.bodies.length - 1}
              >
                {body}
              </Typography>
            ))}

          {content.link && (
            <Box>
              <Link href={content.link.href}>
                <Button size="small" variant="text">
                  {content.link.text}
                </Button>
              </Link>
            </Box>
          )}

          {content.image && (
            <Box align="center">
              <img
                src={content.image.src}
                style={{ maxWidth: "732px", width: "100%" }}
              />
            </Box>
          )}
        </Container>
      </Box>
    </Box>
  );
};
