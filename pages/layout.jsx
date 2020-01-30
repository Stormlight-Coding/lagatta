import { Box, Typography } from "@material-ui/core";

import MetaData from "../components/MetaData";
import SectionCover from "../components/SectionCover";
import SectionGallery from "../components/SectionGallery";
import SectionText from "../components/SectionText";
import content from "../contents/layout.json";

export default () => (
  <React.Fragment>
    <MetaData meta={content.meta} />

    <SectionCover bg={"primary"} py={0} content={content.cover} />
    <SectionText bg={"primary"} content={content.spacious_design} />
    <SectionText bg={"secondary"} content={content.cabins}>
      <Typography variant="h2" paragraph style={{ paddingTop: "50px" }}>
        {content.cabin_amenities.title}
      </Typography>
      <Box align="center" mb={2}>
        {content.cabin_amenities.specs.map(s => (
          <Typography>{s}</Typography>
        ))}
      </Box>
    </SectionText>

    <SectionGallery
      align="left"
      bg={"primary"}
      bgcolor={"#2E7379"}
      left
      areamap={content.cabins_galleries.image_map}
      galleries={content.cabins_galleries.items}
    />

    <SectionText bg={"secondary"} content={content.main_deck} />

    {/* aft cockpit */}
    <SectionGallery
      align="left"
      bg={"primary"}
      bgcolor={"#2E7379"}
      right
      areamap={content.salons_galleries.image_map}
      galleries={content.salons_galleries.items}
    />

    <SectionText bg={"secondary"} content={content.living_space} />

    {/* jacuzzi */}
    <SectionGallery
      align="left"
      bg={"primary"}
      bgcolor={"#2E7379"}
      left
      areamap={content.flybridge_galleries.image_map}
      galleries={content.flybridge_galleries.items}
    />
  </React.Fragment>
);
