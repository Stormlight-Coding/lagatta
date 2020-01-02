import { Box, Container } from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles'

export default ({ bg, children, coverImage, ...props }) => {
  const theme = useTheme();
  const customStyle = {
    backgroundColor: theme.palette[bg].main,
    color: theme.palette[bg].contrastText
  };
  console.log(customStyle);
  return (
    <Box>
      {coverImage && <img src={coverImage} style={{ width: "100%" }} />}
      <Box py={8} {...props} style={customStyle}>
        <Container fixed maxWidth={false}>
          {children}
        </Container>
      </Box>
    </Box>
  );
};
