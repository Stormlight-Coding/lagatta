import { Container } from '@material-ui/core'

import MetaData from '../components/MetaData'
import content from '../contents/index.json'

export default () => (
  <React.Fragment>
    <MetaData meta={content.meta} />

    <Container>
      Home Content
      <br />
    </Container>
  </React.Fragment>
);
