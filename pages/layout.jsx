import { Box } from '@material-ui/core'

import MetaData from '../components/MetaData'
import SectionCover from '../components/SectionCover'
import SectionGallery from '../components/SectionGallery'
import SectionText from '../components/SectionText'
import content from '../contents/layout.json'

export default () => (
  <React.Fragment>
    <MetaData meta={content.meta} />

    <SectionCover bg={"primary"} py={0} content={content.cover} />
    <SectionText bg={"primary"} content={content.spacious_design} />
    <SectionText bg={"secondary"} content={content.cabins} />

    <SectionGallery
      align="left"
      bg={"primary"}
      bgcolor={"#2E7379"}
      boxLeft={
        <Box align="center">
          <img
            src={content.cabins_galleries.image_map.src}
            style={{ maxWidth: "480px", maxHeight: "720px", width: "100%" }}
          />
        </Box>
      }
      galleries={content.cabins_galleries.items}
    />

    <SectionText bg={"secondary"} content={content.main_deck} />

    {/* aft cockpit */}
    <SectionGallery
      align="left"
      bg={"primary"}
      bgcolor={"#2E7379"}
      boxLeft={
        <Box align="center">
          <img
            src={content.salons_galleries.image_map.src}
            style={{ maxWidth: "480px", maxHeight: "720px", width: "100%" }}
          />
        </Box>
      }
      galleries={content.salons_galleries.items}
    />

    <SectionText bg={"secondary"} content={content.living_space} />

    {/* jacuzzi */}
    <SectionGallery
      align="left"
      bg={"primary"}
      bgcolor={"#2E7379"}
      boxLeft={
        <Box align="center">
          <img
            src={content.flybridge_galleries.image_map.src}
            style={{ maxWidth: "480px", maxHeight: "720px", width: "100%" }}
          />
        </Box>
      }
      galleries={content.flybridge_galleries.items}
    />
  </React.Fragment>
);
