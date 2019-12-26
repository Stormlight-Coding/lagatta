import { Container } from '@material-ui/core'

import MetaData from '../components/MetaData'
import content from '../contents/layout.json'

export default () => (
  <React.Fragment>
    <MetaData meta={content.meta} />

    <Container>
      layout Content
      <br />
    </Container>
  </React.Fragment>
);
