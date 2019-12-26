import { Container } from '@material-ui/core'

import MetaData from '../components/MetaData'
import content from '../contents/destinations.json'

export default () => (
  <React.Fragment>
    <MetaData meta={content.meta} />

    <Container>
      destinations Content
      <br />
    </Container>
  </React.Fragment>
);
