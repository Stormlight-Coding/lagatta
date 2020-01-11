import GridDestination from '../components/GridDestination'
import MetaData from '../components/MetaData'
import Section from '../components/Section'
import SectionCover from '../components/SectionCover'
import content from '../contents/destinations.json'

export default () => (
  <React.Fragment>
    <MetaData meta={content.meta} />
    <SectionCover bg={"primary"} content={content.cover} />
    <Section bg="secondary" py={0} container={false}>
      <GridDestination items={content.items} />
    </Section>
  </React.Fragment>
);
