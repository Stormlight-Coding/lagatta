import { Box, Grid, Typography } from '@material-ui/core'

export default ({ item }) => (
  <Grid item xs sm={6} md={4}>
    <img src={item.image.src} style={{ maxWidth: "100%" }} />
    <Box p={2} bgcolor="secondary.main">
      <Typography>{item.title}</Typography>
      <Typography>{item.date}</Typography>
    </Box>
  </Grid>
);
