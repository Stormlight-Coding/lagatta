import { Container } from '@material-ui/core'

import MetaData from '../components/MetaData'
import content from '../contents/dinning.json'

export default () => (
  <React.Fragment>
    <MetaData meta={content.meta} />

    <Container>
      dinning Content
      <br />
    </Container>
  </React.Fragment>
);
