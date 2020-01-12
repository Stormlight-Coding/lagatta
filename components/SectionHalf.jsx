import { Box, Button, Grid, Typography } from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles'

export default ({ content, bg, reverse, ...props }) => {
  const theme = useTheme();
  const customStyle = {
    backgroundColor: theme.palette[bg].main,
    color: theme.palette[bg].contrastText
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
            {content.link && (
              <Typography variant="caption">{content.link.text}</Typography>
            )}

            {content.button && (
              <Button variant="outlined">{content.button.text}</Button>
            )}
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
