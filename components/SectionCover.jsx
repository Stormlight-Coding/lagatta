import {
  Box,
  Button,
  Container,
  Hidden,
  Typography,
  useMediaQuery
} from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";

import Link from "./Link";

export default ({ content, bg, children, hideSection, ...props }) => {
  const theme = useTheme();
  const customStyle = {
    backgroundColor: theme.palette[bg].main,
    color: theme.palette[bg].contrastText
  };
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Hidden {...hideSection}>
      <Box style={customStyle}>
        <Box style={{ position: "relative" }}>
          {content.image && (
            <img src={content.image.src} style={{ width: "100%" }} />
          )}
          {content.message && (
            <Box
              align="center"
              style={{ position: "absolute", width: "100%", bottom: "50px" }}
            >
              <img src={content.message.src} style={{ width: "70%" }} />
            </Box>
          )}
        </Box>
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
                  (content.bodies && content.bodies.length) ||
                  content.link ||
                  children
                }
              >
                {content.body}
              </Typography>
            )}
            {content.bodies &&
              content.bodies.map((body, index) => (
                <Typography
                  variant="body1"
                  paragraph={
                    content.link ||
                    children ||
                    index !== content.bodies.length - 1
                  }
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

            {children}
          </Container>
        </Box>
      </Box>
    </Hidden>
  );
};
