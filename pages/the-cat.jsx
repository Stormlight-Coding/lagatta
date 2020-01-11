import { Box, Grid, Typography } from '@material-ui/core'

import MetaData from '../components/MetaData'
import Section from '../components/Section'
import SectionCover from '../components/SectionCover'
import SectionText from '../components/SectionText'
import content from '../contents/the-cat.json'

export default () => (
  <React.Fragment>
    <MetaData meta={content.meta} />

    <SectionCover bg={"primary"} content={content.lagoon_seventy} />

    <SectionText bg={"secondary"} content={content.our_philosophy} />

    <SectionCover bg={"primary"} content={content.the_crew}>
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
    </SectionCover>

    <SectionCover bg={"primary"} content={content.catamaran_specifications}>
      <Box align="center" mb={6}>
        {content.catamaran_specifications.specs.map(s => (
          <Typography>{s}</Typography>
        ))}
      </Box>
    </SectionCover>

    <SectionCover bg={"secondary"} content={content.gattina} />

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
