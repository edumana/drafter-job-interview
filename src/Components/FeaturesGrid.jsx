import { Grid } from "@mui/material";
import { Box, Container } from "@mui/system";
import FeatureBox from "./FeatureBox";
import ThreeLineBox from "./ThreeLineBox";

function FeaturesGrid() {

  const images = [1, 2, 3, 4, 5, 6]
  const text1 = [
    'Share team inboxes',
    'Deliver instant answers',
    'Manage your team with reports',
    'Connect with customers',
    'Connect the tools you already use',
    'Our people make the difference']

  const text2 = [
    'Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.',
    'An all-in-one customer service platform that helps you balance everything your customers need to be happy.',
    'Measure what matters with Untitleds easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.',
    'Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.',
    'Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools.',
    'Were an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.']

  return (
    <Container
      maxWidth='xl'
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
      <Box sx={{
        marginY: 6,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <ThreeLineBox 
          text1={'Features'} 
          text2={'Analytics that feels like its from the future'} 
          text3={`Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.`}/>
      </Box>
      <Grid container spacing={6} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        {images.map((e,i) => <Grid item sm={4} key={i} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <FeatureBox image={e} text1={text1[i]} text2={text2[i]} />
        </Grid>)}
      </Grid>
    </Container>
  );
}
export default FeaturesGrid;
