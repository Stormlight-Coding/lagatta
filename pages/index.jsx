import { Box, Grid, Typography } from '@material-ui/core'

import MetaData from '../components/MetaData'
import Section from '../components/Section'
import content from '../contents/index.json'

export default () => (
  <React.Fragment>
    <MetaData meta={content.meta} />

    {/* Lagoon Seventy */}
    <Section
      align="center"
      bg={"primary"}
      coverImage={content.lagoon_seventy.image.src}
    >
      <Typography variant="h2" paragraph>
        {content.lagoon_seventy.title}
      </Typography>
      <Typography variant="body1" paragraph>
        {content.lagoon_seventy.body}
      </Typography>
      <Typography variant="caption">
        {content.lagoon_seventy.link.text}
      </Typography>
    </Section>

    {/* Our Philosopyhy */}
    <Section align="center" bg={"secondary"}>
      <Typography variant="h2" paragraph>
        {content.our_philosophy.title}
      </Typography>
      <Typography variant="body1" paragraph>
        {content.our_philosophy.body}
      </Typography>
    </Section>

    {/* The Crew */}
    <Section
      align="center"
      bg={"primary"}
      coverImage={content.the_crew.image.src}
    >
      <Typography variant="h2" paragraph>
        {content.the_crew.title}
      </Typography>
      <Typography variant="body1" paragraph>
        {content.the_crew.body}
      </Typography>

      <Grid container spacing={4} alignItems="center" justify="center">
        {content.the_crew.members.map(m => (
          <Grid item md={6}>
            <Box mb={2}>
              <img
                src={m.image.src}
                style={{ borderRadius: "50%", maxWidth: "100%" }}
              />
            </Box>
            <Typography variant="subtitle1">
              {m.title} - {m.name}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Section>

    {/* Catamaran */}
    <Section
      align="center"
      bg={"primary"}
      coverImage={content.catamaran_specifications.image.src}
    >
      <Typography variant="h2" paragraph>
        {content.catamaran_specifications.title}
      </Typography>
      <Box align="center" mb={6}>
        {content.catamaran_specifications.specs.map(s => (
          <Typography>{s}</Typography>
        ))}
      </Box>
    </Section>

    {/* Gattina */}
    <Section
      align="center"
      bg={"secondary"}
      coverImage={content.gattina.image.src}
    >
      <Typography variant="h2" paragraph>
        {content.gattina.title}
      </Typography>
      <Typography variant="body1" paragraph>
        {content.gattina.body}
      </Typography>
    </Section>

    {/* Fully Equiped */}
    <Section align="center" bg={"primary"}>
      <Typography variant="h2" paragraph>
        {content.fully_equipped.title}
      </Typography>
      <Grid container>
        <Grid item xs={12} sm={6} md={4}>
          <Box align="left" mb={6}>
            <Typography variant="h3" paragraph>
              {content.fully_equipped.equips[0].title}
            </Typography>
            {content.fully_equipped.equips[0].itens.map(e => (
              <Typography>{e}</Typography>
            ))}
          </Box>
          <Box align="left" mb={6}>
            <Typography variant="h3" paragraph>
              {content.fully_equipped.equips[1].title}
            </Typography>
            {content.fully_equipped.equips[1].itens.map(e => (
              <Typography>{e}</Typography>
            ))}
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Box align="left" mb={6}>
            <Typography variant="h3" paragraph>
              {content.fully_equipped.equips[2].title}
            </Typography>
            {content.fully_equipped.equips[2].itens.map(e => (
              <Typography>{e}</Typography>
            ))}
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Box align="left" mb={6}>
            <Typography variant="h3" paragraph>
              {content.fully_equipped.equips[3].title}
            </Typography>
            {content.fully_equipped.equips[3].itens.map(e => (
              <Typography>{e}</Typography>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Section>
  </React.Fragment>
);
