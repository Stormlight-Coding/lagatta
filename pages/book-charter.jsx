import MetaData from '../components/MetaData'
import SectionCover from '../components/SectionCover'
import content from '../contents/book-charter.json'

export default () => (
  <React.Fragment>
    <MetaData meta={content.meta} />
    <SectionCover bg={"primary"} content={content.booking_la_gatta} />
  </React.Fragment>
);
