import { Box, Container } from "@mui/system";


function HeroImage() {

  return (
    <Container
      maxWidth='xl'
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center'
      }}>
      <Box
        component='img'
        src='hero.png'
        alt='logo'
        width={900}
        sx={{ }}
      />
    </Container>
  );
}
export default HeroImage;
