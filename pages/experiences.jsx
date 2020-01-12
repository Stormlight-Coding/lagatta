import MetaData from '../components/MetaData'
import ModalBooks from '../components/ModalBooks'
import ModalRecords from '../components/ModalRecords'
import SectionCover from '../components/SectionCover'
import SectionHalf from '../components/SectionHalf'
import content from '../contents/experiences.json'

export default () => (
  <React.Fragment>
    <MetaData meta={content.meta} />

    <SectionCover bg={"secondary"} content={content.cover} />

    <SectionHalf bg={"primary"} content={content.kitesurfing} />
    <SectionHalf bg={"primary"} content={content.scuba} reverse />
    <SectionHalf bg={"primary"} content={content.paddle} />
    <SectionHalf bg={"primary"} content={content.toys} reverse />
    <SectionHalf bg={"primary"} content={content.land} />

    <SectionCover bg={"secondary"} content={content.onboard} />

    <SectionHalf bg={"primary"} content={content.drone} />
    <SectionHalf bg={"primary"} content={content.fishing} reverse />
    <SectionHalf bg={"primary"} content={content.maritime}>
      <ModalBooks content={content.maritime} />
    </SectionHalf>
    <SectionHalf bg={"primary"} content={content.record} reverse>
      <ModalRecords content={content.record} />
    </SectionHalf>
    <SectionHalf bg={"primary"} content={content.fitness} />

    <SectionCover bg={"secondary"} py={0} content={content.sunset} />

    <SectionHalf bg={"primary"} content={content.jacuzzi} />
    <SectionHalf bg={"primary"} content={content.cinema} reverse />
  </React.Fragment>
);
