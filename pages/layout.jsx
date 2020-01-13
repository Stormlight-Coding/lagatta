import { Box, Typography } from '@material-ui/core'

import MetaData from '../components/MetaData'
import SectionCover from '../components/SectionCover'
import SectionSided from '../components/SectionSided'
import SectionText from '../components/SectionText'
import content from '../contents/layout.json'

export default () => (
  <React.Fragment>
    <MetaData meta={content.meta} />

    <SectionCover bg={"primary"} py={0} content={content.cover} />
    <SectionText bg={"primary"} content={content.spacious_design} />
    <SectionText bg={"secondary"} content={content.cabins} />

    {/* panther_cabin */}
    <SectionSided
      align="left"
      bg={"primary"}
      bgcolor="#1E3A57"
      boxLeft={
        <Box align="center">
          <img
            src={content.panther_cabin.image_side.src}
            style={{ maxWidth: "480px", width: "100%" }}
          />
        </Box>
      }
      footerImage={content.panther_cabin.image.src}
    >
      <Typography variant="h2" style={{ marginBottom: "15px" }}>
        {content.panther_cabin.title}
      </Typography>
      <Typography variant="body1">{content.panther_cabin.body}</Typography>
    </SectionSided>

    <SectionText bg={"secondary"} content={content.main_deck} />

    {/* aft cockpit */}
    <SectionSided
      align="left"
      bg={"primary"}
      bgcolor={"#2E7379"}
      boxRight={
        <Box align="center">
          <img
            src={content.cockpit.image_side.src}
            style={{ maxWidth: "480px", width: "100%" }}
          />
        </Box>
      }
      footerImage={content.cockpit.image.src}
    >
      <Typography variant="h2" style={{ marginBottom: "15px" }}>
        {content.cockpit.title}
      </Typography>
      <Typography variant="body1">{content.cockpit.body}</Typography>
    </SectionSided>

    <SectionText bg={"secondary"} content={content.living_space} />

    {/* jacuzzi */}
    <SectionSided
      align="left"
      bg={"primary"}
      bgcolor="#0B446B"
      boxLeft={
        <Box align="center">
          <img
            src={content.jacuzzi.image_side.src}
            style={{ maxWidth: "480px", width: "100%" }}
          />
        </Box>
      }
      footerImage={content.jacuzzi.image.src}
    >
      <Typography variant="h2" style={{ marginBottom: "15px" }}>
        {content.jacuzzi.title}
      </Typography>
      <Typography variant="body1">{content.jacuzzi.body}</Typography>
    </SectionSided>
  </React.Fragment>
);
