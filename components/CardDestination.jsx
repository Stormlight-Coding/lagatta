import { Box, Grid, Typography } from '@material-ui/core'

export default ({ item }) => (
  <Grid item xs={12} sm={4} md={4}>
    <Box height="100%" bgcolor="secondary.main">
      <img src={item.image.src} style={{ width: "100%" }} />
      <Box pt={3} pb={4} bgcolor="secondary.main">
        <Typography
          variant="caption"
          style={{ fontWeight: 600 }}
          display="block"
        >
          {item.title}
        </Typography>
        <Typography
          variant="caption"
          style={{ fontWeight: 200 }}
          display="block"
        >
          {item.date}
        </Typography>
      </Box>
    </Box>
  </Grid>
);
