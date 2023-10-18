import { Typography, Button } from "@mui/material";
import { Box, Container } from "@mui/system";
import NewsBar from "./NewsBar";
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import Colors from "../constants/colors";

function HeroTitle() {

  return (
    <Container
      maxWidth='xl'
      sx={{
        height: 500,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        paddingBottom: 2,
      }}>
      <NewsBar />
      <Box sx={{ paddingY: 4, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <Typography variant="h1" sx={{ paddingY: 2 }}>Beautiful analytics to grow smarter</Typography>
        <Typography variant="body1" sx={{ paddingTop: 2, textAlign: 'center' }}>Powerful, self-serve product and growth analytics to help you convert, engage,<br /> and retain more users. Trusted by over 4,000 startups.</Typography>
      </Box>
      <Box sx={{marginBottom: 2}}>
        <Button 
          variant="outlined" 
          sx={{
            padding: 1.6,
            marginX: 2,
            color: Colors.orDarkGray,
            borderColor: Colors.orMediumGray,
            backgroundColor: '#FFF'
          }}>
            <PlayCircleOutlineIcon/>Demo
        </Button>
        <Button variant="contained" sx={{ padding: 1.6, marginX: 2 }}>Sign up</Button>
      </Box>
    </Container>
  );
}
export default HeroTitle;
