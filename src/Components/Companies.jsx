import { Typography } from "@mui/material";
import { Box, Container } from "@mui/system";

function Companies() {

  const images = [1, 2, 3, 4, 5, 6]

  return (
    <Container
      maxWidth='xl'
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
      <Box
        sx={{paddingY: 14, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}
      >
        <Typography variant="body1">Join 4,000+ companies already growing</Typography>
        <Box>
        {
          images.map(e => <Box
            component='img'
            src={`/mock-companies/${e}.png`}
            alt={`logo-${e}`}
            width={200}
            key={`logo-${e}`}
            sx={{}}
          />)
        }
      </Box>
      </Box>
    </Container>
  );
}
export default Companies;
