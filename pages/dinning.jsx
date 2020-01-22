import { Box } from '@material-ui/core'

import MetaData from '../components/MetaData'
import ModalCocktails from '../components/ModalCocktails'
import ModalWines from '../components/ModalWines'
import SectionCover from '../components/SectionCover'
import SectionHalf from '../components/SectionHalf'
import content from '../contents/dinning.json'

export default () => (
  <React.Fragment>
    <MetaData meta={content.meta} />

    <SectionCover bg={"secondary"} content={content.cover} />
    <SectionCover bg={"primary"} py={0} content={content.breakfast} />
    <SectionHalf bg={"primary"} content={content.sunrise} />
    <SectionHalf bg={"primary"} content={content.midday} reverse />

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
    >
      <Box mb="15px">
        <ModalWines />
      </Box>
      <Box>
        <ModalCocktails />
      </Box>
    </SectionHalf>

    <SectionCover bg={"primary"} py={0} content={content.swimdeck} />
  </React.Fragment>
);
