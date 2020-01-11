import { Box, Grid } from '@material-ui/core'

import CardDestination from './CardDestination'

export default ({ items }) => (
  <Box align="center">
    <Grid container spacing={1}>
      {items.map(item => (
        <CardDestination item={item} />
      ))}
    </Grid>
  </Box>
);
