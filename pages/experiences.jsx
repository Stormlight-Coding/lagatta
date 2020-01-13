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

    <SectionHalf bg={"primary"} content={content.kitesurfing} reverse />
    <SectionHalf bg={"primary"} content={content.scuba} />
    <SectionHalf bg={"primary"} content={content.paddle} reverse />
    <SectionHalf bg={"primary"} content={content.toys} />
    <SectionHalf bg={"primary"} content={content.land} reverse />

    <SectionCover
      hideSection={{ smDown: true }}
      bg={"secondary"}
      content={content.onboard}
    />

    <SectionHalf bg={"primary"} content={content.drone} reverse />
    <SectionHalf bg={"primary"} content={content.fishing} />

    <SectionHalf bg={"primary"} content={content.maritime} reverse>
      <ModalBooks content={content.maritime} />
    </SectionHalf>

    <SectionHalf bg={"primary"} content={content.record}>
      <ModalRecords content={content.record} />
    </SectionHalf>

    <SectionHalf bg={"primary"} content={content.fitness} reverse />

    <SectionCover
      hideSection={{ smDown: true }}
      bg={"secondary"}
      py={0}
      content={content.sunset}
    />

    <SectionHalf bg={"primary"} content={content.jacuzzi} reverse />
    <SectionHalf bg={"primary"} content={content.cinema} />
  </React.Fragment>
);
