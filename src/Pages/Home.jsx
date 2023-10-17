import { Box } from '@mui/material';
import HeaderMenu from '../Components/HeaderMenu';
import HeroTitle from '../Components/HeroTitle';
import HeroImage from '../Components/HeroImage';
import Companies from '../Components/Companies';
import FeaturesGrid from '../Components/FeaturesGrid';

export default function Home() {

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100vh', 
          backgroundImage: 'url(/bg.png)',
          backgroundRepeat: 'repeat',
        }}
      >
        <HeaderMenu />
        <HeroTitle />
        <HeroImage/>
      </Box>
      <Companies/>
      <FeaturesGrid/>
      <Box sx={{height: 200}}/>
    </>
  );
}
