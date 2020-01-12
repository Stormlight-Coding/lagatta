import { Box, Grid } from '@material-ui/core'

import CardDestination from './CardDestination'

export default ({ items }) => (
  <Box align="center" bgcolor="white" overflow="hidden">
    <Grid container spacing={1}>
      {items.map(item => (
        <CardDestination item={item} />
      ))}
    </Grid>
  </Box>
);
