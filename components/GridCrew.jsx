import { Grid } from '@material-ui/core'

import CardCrew from './CardCrew'

export default ({ members }) => (
  <Grid container spacing={4} alignItems="center" justify="center">
    {members.map(member => (
      <CardCrew member={member} />
    ))}
  </Grid>
);
