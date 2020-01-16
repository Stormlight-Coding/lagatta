import { Box, Typography } from '@material-ui/core'
import Down from '@material-ui/icons/KeyboardArrowDown'
import Right from '@material-ui/icons/KeyboardArrowRight'

export default ({ equips }) => {
  const [opened, setOpened] = React.useState([]);

  // const handleClick = id => {
  //   if (!opened.includes(id)) setOpened([...opened, id]);
  //   else setOpened(opened.filter(o => o !== id));
  // };

  const handleClick = id => {
    if (!opened.includes(id)) setOpened([id]);
    else setOpened([]);
  };

  return (
    <Box>
      {equips.map((equip, index) => (
        <Box>
          <Box onClick={() => handleClick(index)}>
            <Typography
              variant="h3"
              style={{
                fontSize: "10px",
                lineHeight: "30px",
                fontWeight: opened.includes(index) ? 200 : 600
              }}
            >
              {equip.title}

              {opened.includes(index) ? (
                <Down
                  style={{
                    verticalAlign: "middle",
                    height: "14px",
                    marginTop: "-3px"
                  }}
                />
              ) : (
                <Right
                  style={{
                    verticalAlign: "middle",
                    height: "14px",
                    marginTop: "-3px"
                  }}
                />
              )}
            </Typography>
          </Box>

          <Box mb={5} display={opened.includes(index) ? "block" : "none"}>
            {equip.itens.map(e => (
              <Typography
                variant="body1"
                style={{
                  fontSize: "12px",
                  lineHeight: "30px",
                  fontWeight: 200
                }}
              >
                {e}
              </Typography>
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  );
};
