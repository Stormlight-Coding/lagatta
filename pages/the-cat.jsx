import { Container } from '@material-ui/core'

import MetaData from '../components/MetaData'
import content from '../contents/the-cat.json'

export default () => (
  <React.Fragment>
    <MetaData meta={content.meta} />

    <Container>
      The Cat Content
      <br />
    </Container>
  </React.Fragment>
);
