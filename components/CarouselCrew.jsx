import { Box } from '@material-ui/core'
import { Carousel } from 'react-responsive-carousel'

import CardCrew from './CardCrew'

export default ({ members }) => (
  <Box className="crew-carousel" px={"40px"}>
    <Carousel
      showThumbs={false}
      showArrows={true}
      showStatus={false}
      showIndicators={false}
      autoPlay
      stopOnHover
      infiniteLoop
      labels={{
        leftArrow: "here"
      }}
    >
      {members.map(member => (
        <CardCrew member={member} />
      ))}
    </Carousel>
  </Box>
);
