import { Container } from '@material-ui/core'

import MetaData from '../components/MetaData'
import content from '../contents/book-charter.json'

export default () => (
  <React.Fragment>
    <MetaData meta={content.meta} />

    <Container>
      Book Charter Content
      <br />
    </Container>
  </React.Fragment>
);
