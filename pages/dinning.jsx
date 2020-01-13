import MetaData from '../components/MetaData'
import ModalCocktails from '../components/ModalCocktails'
import ModalWines from '../components/ModalWines'
import SectionCover from '../components/SectionCover'
import SectionHalf from '../components/SectionHalf'
import content from '../contents/dinning.json'

export default () => (
  <React.Fragment>
    <MetaData meta={content.meta} />

    <SectionCover bg={"primary"} content={content.cover} />
    <SectionCover bg={"primary"} py={0} content={content.breakfast} />
    <SectionHalf bg={"primary"} content={content.sunrise} reverse />
    <SectionHalf bg={"primary"} content={content.midday} />

    <SectionCover
      hideSection={{ smDown: true }}
      bg={"primary"}
      py={0}
      content={content.charcuterie}
    />

    <SectionHalf
      hideImage={{ smDown: true }}
      bg={"primary"}
      content={content.sunset}
      reverse
    >
      <ModalCocktails />
      <ModalWines />
    </SectionHalf>

    <SectionCover bg={"primary"} py={0} content={content.swimdeck} />
  </React.Fragment>
);
