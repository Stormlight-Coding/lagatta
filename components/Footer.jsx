import { Box } from '@material-ui/core'
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

export default withRouter(({ router, ...props }) => (
  <Box align="center" bgcolor={getFooterColor(router)} py={3} {...props}>
    Copyright © 2019 Lagatta US, Inc. All Rights Reserved.
  </Box>
));
