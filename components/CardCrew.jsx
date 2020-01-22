import { Box, Typography, useMediaQuery, useTheme } from '@material-ui/core'

import ModalCrew from './ModalCrew'

export default ({ member }) => {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <Box onClick={handleClickOpen} style={{ cursor: "pointer" }}>
        <Box mb={"35px"}>
          <img
            src={member.image.src}
            style={{
              borderRadius: "50%",
              maxWidth: isMobile ? "200px" : "280px"
            }}
          />
        </Box>
        <Typography variant="subtitle1">
          {member.title} - {member.name}
        </Typography>
      </Box>
      <ModalCrew member={member.modal} open={open} handleClose={handleClose} />
    </Box>
  );
};
