import { Container } from '@material-ui/core'

import MetaData from '../components/MetaData'
import content from '../contents/experiences.json'

export default () => (
  <React.Fragment>
    <MetaData meta={content.meta} />

    <Container>
      experiences Content
      <br />
    </Container>
  </React.Fragment>
);
