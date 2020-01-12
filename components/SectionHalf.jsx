import { Box, Grid, Typography } from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles'

export default ({ content, bg, reverse, children, ...props }) => {
  const theme = useTheme();
  const customStyle = {
    backgroundColor: theme.palette[bg].main,
    color: theme.palette[bg].contrastText
  };
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box style={customStyle}>
      <Grid container direction={reverse ? "row" : "row-reverse"}>
        <Grid item xs={6}>
          <Box p={8} align="left" {...props}>
            {content.title && (
              <Typography variant="h2" paragraph>
                {content.title}
              </Typography>
            )}
            {content.body && (
              <Typography variant="body1" paragraph>
                {content.body}
              </Typography>
            )}
            {content.bodies &&
              content.bodies.map(body => (
                <Typography variant="body1" paragraph>
                  {body}
                </Typography>
              ))}
            {children}
          </Box>
        </Grid>
        <Grid item xs={6}>
          {content.image && (
            <img src={content.image.src} style={{ width: "100%" }} />
          )}
        </Grid>
      </Grid>
    </Box>
  );
};
