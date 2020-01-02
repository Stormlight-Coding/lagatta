import { Box, Button, Typography } from '@material-ui/core'

import MetaData from '../components/MetaData'
import Section from '../components/Section'
import content from '../contents/book-charter.json'

export default () => (
  <React.Fragment>
    <MetaData meta={content.meta} />

    {/* Lagoon Seventy */}
    <Section
      align="center"
      bg={"primary"}
      coverImage={content.booking_la_gatta.image.src}
    >
      <Box mb={8}>
        <Typography variant="h2" paragraph>
          {content.booking_la_gatta.title}
        </Typography>
        <Typography variant="body1" paragraph>
          {content.booking_la_gatta.body}
        </Typography>
      </Box>
      <Button variant="outlined" color="primary">
        {content.booking_la_gatta.button.text}
      </Button>
    </Section>
  </React.Fragment>
);
