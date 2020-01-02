import { Box, Grid, Typography } from '@material-ui/core'

import MetaData from '../components/MetaData'
import Section from '../components/Section'
import content from '../contents/index.json'

export default () => (
  <React.Fragment>
    <MetaData meta={content.meta} />

    {/* Cover */}
    <Section align="center" bg={"primary"} coverImage={content.cover.image.src}>
      <Typography variant="body1" paragraph>
        {content.cover.body}
      </Typography>
    </Section>

    {/* Destinations */}
    <Section align="center" bg={"secondary"}>
      <Typography variant="h2" paragraph>
        {content.destinations.title}
      </Typography>
      <Typography variant="body1" paragraph>
        {content.destinations.body}
      </Typography>
      <Typography variant="caption">
        {content.destinations.link.text}
      </Typography>
    </Section>

    {/* Destinations Items */}
    <Box align="center">
      <Grid container spacing={1}>
        <Grid item xs>
          <img
            src="/static/images/LG_D_GRANDPRIX.jpg"
            style={{ maxWidth: "100%" }}
          />
          <Box p={2} bgcolor="secondary.main">
            <Typography>MONACO GP</Typography>
            <Typography>MAY 2020</Typography>
          </Box>
        </Grid>
        <Grid item xs>
          <img
            src="/static/images/LG_D_GRANDPRIX.jpg"
            style={{ maxWidth: "100%" }}
          />
          <Box p={2} bgcolor="secondary.main">
            <Typography>MONACO GP</Typography>
            <Typography>MAY 2020</Typography>
          </Box>
        </Grid>
        <Grid item xs>
          <Box>
            <img
              src="/static/images/LG_D_GRANDPRIX.jpg"
              style={{ maxWidth: "100%" }}
            />
            <Box p={2} bgcolor="secondary.main">
              <Typography>MONACO GP</Typography>
              <Typography>MAY 2020</Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>

    {/* Seventy Layout */}
    <Section align="center" bg={"primary"}>
      <Typography variant="h2" paragraph>
        {content.seventy_layout.title}
      </Typography>
      <Typography variant="body1" paragraph>
        {content.seventy_layout.body}
      </Typography>
      <Typography variant="caption">
        {content.seventy_layout.link.text}
      </Typography>
      <img
        src={content.seventy_layout.image.src}
        style={{ maxWidth: "100%" }}
      />
    </Section>

    {/* Dinning */}
    <Section align="center" bg={"secondary"}>
      <Typography variant="h2" paragraph>
        {content.dinning.title}
      </Typography>
      <Typography variant="body1" paragraph>
        {content.dinning.body}
      </Typography>
      <Typography variant="caption">{content.dinning.link.text}</Typography>
    </Section>

    {/* Experience */}
    <Section
      align="center"
      bg={"primary"}
      coverImage={content.experiences.image.src}
    >
      <Typography variant="h2" paragraph>
        {content.experiences.title}
      </Typography>
      <Typography variant="body1" paragraph>
        {content.experiences.body}
      </Typography>
      <Typography variant="caption">{content.experiences.link.text}</Typography>
    </Section>

    {/* The Cat */}
    <Section
      align="center"
      bg={"secondary"}
      coverImage={content.the_cat.image.src}
    >
      <Typography variant="h2" paragraph>
        {content.the_cat.title}
      </Typography>
      <Typography variant="body1" paragraph>
        {content.the_cat.body}
      </Typography>

      <Typography variant="body1" paragraph>
        {content.the_cat.body2}
      </Typography>

      <Typography variant="caption">{content.the_cat.link.text}</Typography>
    </Section>

    {/* The Cat Image */}
    <Section
      align="center"
      bg={"primary"}
      py={0}
      coverImage={content.cat_front.image.src}
    />
  </React.Fragment>
);
