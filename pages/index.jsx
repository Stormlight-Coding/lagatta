import GridDestination from "../components/GridDestination";
import MetaData from "../components/MetaData";
import Section from "../components/Section";
import SectionCover from "../components/SectionCover";
import SectionText from "../components/SectionText";
import content from "../contents/index.json";

export default () => (
  <React.Fragment>
    <MetaData meta={content.meta} />
    <SectionCover bg="primary" content={content.cover} />
    <SectionCover bg="secondary" content={content.destinations} />
    <Section bg="secondary" py={0} container={false}>
      <GridDestination items={content.destinations.items} />
    </Section>
    <SectionText bg="primary" content={content.seventy_layout} />
    <SectionText bg="secondary" content={content.dining} />
    <SectionCover bg="primary" content={content.experiences} />
    <SectionCover bg="secondary" content={content.the_cat} />
    <SectionCover bg="primary" py={0} content={content.cat_front} />
  </React.Fragment>
);
