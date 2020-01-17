import { Box, Typography } from "@material-ui/core";
import { withRouter } from "next/router";

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

export default withRouter(
  ({
    router,
    forceColor = false,
    fontSize = {
      fontSize: "13px",
      lineHeight: "50px"
    },
    ...props
  }) => (
    <Box
      align="center"
      bgcolor={forceColor ? forceColor : getFooterColor(router)}
      {...props}
    >
      <Typography variant="body1" style={{ ...fontSize }}>
        Copyright © 2020 Lagatta US, Inc. All Rights Reserved.
      </Typography>
    </Box>
  )
);
