import { Box, Button } from '@material-ui/core'

import MetaData from '../components/MetaData'
import SectionCover from '../components/SectionCover'
import content from '../contents/book-charter.json'

export default () => (
  <React.Fragment>
    <MetaData meta={content.meta} />
    <SectionCover bg={"primary"} content={content.booking_la_gatta}>
      <Box mt={"85px"}>
        <Button variant="outlined" size="large">
          {content.booking_la_gatta.button.text}
        </Button>
      </Box>
    </SectionCover>
  </React.Fragment>
);
