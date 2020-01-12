import { Box, Grid, Typography } from '@material-ui/core'

import ModalCrew from './ModalCrew'

export default ({ member }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Grid item md={6}>
      <Box onClick={handleClickOpen}>
        <Box mb={2}>
          <img
            src={member.image.src}
            style={{ borderRadius: "50%", maxWidth: "100%" }}
          />
        </Box>
        <Typography variant="subtitle1">
          {member.title} - {member.name}
        </Typography>
      </Box>
      <ModalCrew member={member.modal} open={open} handleClose={handleClose} />
    </Grid>
  );
};
