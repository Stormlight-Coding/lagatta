import MetaData from '../components/MetaData'
import SectionCover from '../components/SectionCover'
import SectionHalf from '../components/SectionHalf'
import content from '../contents/dinning.json'

export default () => (
  <React.Fragment>
    <MetaData meta={content.meta} />

    <SectionCover bg={"primary"} content={content.cover} />
    <SectionCover bg={"primary"} py={0} content={content.breakfast} />
    <SectionHalf bg={"primary"} content={content.sunrise} />
    <SectionHalf bg={"primary"} content={content.midday} reverse />
    <SectionCover bg={"primary"} py={0} content={content.charcuterie} />
    <SectionHalf bg={"primary"} content={content.sunset} />
    <SectionCover bg={"primary"} py={0} content={content.swimdeck} />
  </React.Fragment>
);
