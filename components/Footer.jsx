import { Box, Typography, useMediaQuery, useTheme } from '@material-ui/core'
import { withRouter } from 'next/router'

const getFooterColor = (router, theme, trigger) => {
  if (router.route === "/") return "secondary.main";
  if (router.route === "/destinations") return "primary.main";
  if (router.route === "/layout") return "secondary.main";
  if (router.route === "/experiences") return "secondary.main";
  if (router.route === "/book-charter") return "secondary.main";
  if (router.route === "/the-cat") return "secondary.main";
  if (router.route === "/dinning") return "secondary.main";
  return "primary";
};

export default withRouter(({ router, forceColor = false, ...props }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  let fontSize = {
    fontSize: "13px",
    lineHeight: "50px"
  };
  if (isMobile) {
    fontSize = {
      fontSize: "8px",
      lineHeight: "35px"
    };
  }
  return (
    <Box
      align="center"
      bgcolor={forceColor ? forceColor : getFooterColor(router)}
      {...props}
    >
      <Typography variant="body1" style={{ ...(props.fontSize || fontSize) }}>
        Copyright © 2020 Lagatta US, Inc. All Rights Reserved.
      </Typography>
    </Box>
  );
});
