import { Typography, Button } from "@mui/material";
import { Box, Container } from "@mui/system";
import NewsBar from "./NewsBar";
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import Colors from "../constants/colors";

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
