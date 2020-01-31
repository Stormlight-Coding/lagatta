import {
  Box,
  Grid,
  Typography,
  useMediaQuery,
  useTheme
} from "@material-ui/core";

import AccordionSpecs from "../components/AccordionSpecs";
import CarouselCrew from "../components/CarouselCrew";
import GridCrew from "../components/GridCrew";
import MetaData from "../components/MetaData";
import Section from "../components/Section";
import SectionCover from "../components/SectionCover";
import SectionText from "../components/SectionText";
import content from "../contents/the-cat.json";

export default () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <React.Fragment>
      <MetaData meta={content.meta} />

      <SectionCover bg={"primary"} content={content.lagoon_seventy} />

      <SectionText bg={"secondary"} content={content.our_philosophy} />

      <SectionCover bg={"primary"} content={content.the_crew}>
        {!isMobile ? (
          <GridCrew members={content.the_crew.members} />
        ) : (
          <CarouselCrew members={content.the_crew.members} />
        )}
      </SectionCover>

      <SectionCover bg={"primary"} content={content.catamaran_specifications}>
        <Box align="center" mb={2}>
          {content.catamaran_specifications.specs.map(s => (
            <Typography>{s}</Typography>
          ))}
        </Box>
      </SectionCover>

      <SectionCover bg={"secondary"} content={content.gattina} />

      <Section align="center" bg={"primary"}>
        <Typography
          variant="h2"
          style={{ marginBottom: isMobile ? "35px" : "85px" }}
        >
          {content.fully_equipped.title}
        </Typography>
        {!isMobile ? (
          <React.Fragment>
            <Grid container>
              <Grid item xs={12} sm={6} md={3}>
                <Box align="left" mb={2}>
                  <Typography variant="h3" paragraph>
                    {content.fully_equipped.equips[0].title}
                  </Typography>
                  {content.fully_equipped.equips[0].itens.map(e => (
                    <Typography>{e}</Typography>
                  ))}
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Box align="left" mb={2}>
                  <Typography variant="h3" paragraph>
                    {content.fully_equipped.equips[2].title}
                  </Typography>
                  {content.fully_equipped.equips[2].itens.map(e => (
                    <Typography>{e}</Typography>
                  ))}
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Box align="left" mb={5}>
                  <Typography variant="h3" paragraph>
                    {content.fully_equipped.equips[3].title}
                  </Typography>
                  {content.fully_equipped.equips[3].itens.map(e => (
                    <Typography>{e}</Typography>
                  ))}
                </Box>
                <Box align="left" mb={2}>
                  <Typography variant="h3" paragraph>
                    {content.fully_equipped.equips[1].title}
                  </Typography>
                  {content.fully_equipped.equips[1].itens.map(e => (
                    <Typography>{e}</Typography>
                  ))}
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Box align="left" mb={2}>
                  <Typography variant="h3" paragraph>
                    {content.fully_equipped.equips[4].title}
                  </Typography>
                  {content.fully_equipped.equips[4].itens.map(e => (
                    <Typography variant="body1">{e}</Typography>
                  ))}
                </Box>
              </Grid>
            </Grid>
          </React.Fragment>
        ) : (
          <AccordionSpecs equips={content.fully_equipped.equips} />
        )}
      </Section>
    </React.Fragment>
  );
};
