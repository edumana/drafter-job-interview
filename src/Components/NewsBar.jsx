import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Colors from "../constants/colors";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CircleIcon from '@mui/icons-material/Circle';




function NewsBar() {


  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderStyle: 'solid',
      borderWidth: 2,
      color: Colors.orMediumGray,
      borderRadius: 4,
      padding: 0.5, 
      backgroundColor: '#FFF'
    }}>
      <Grid container spacing={0}>
        <Grid item sm={4} sx={{ 
          display: 'flex', 
          justifyContent: 'flex-start', 
          alignItems: 'center' }}>
          <Box sx={{
            color: Colors.orMediumGray,
            borderStyle: 'solid',
            borderWidth: 2,
            borderRadius: 3,
            paddingY: 0.6,
            whiteSpace: 'nowrap',
            paddingX: 1,
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <Box sx={{
              width: 12, 
              height: 12, 
              backgroundColor: Colors.orPurple, 
              borderRadius: 50, 
              borderWidth: 2, 
              borderStyle: 'solid', 
              borderColor: Colors.orLightPurple, 
              marginRight: 1
            }}/>
              <Typography variant='body2' sx={{ color: Colors.orBlack }}>New Feature</Typography>
          </Box>
        </Grid>
        <Grid item sm={8} sx={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center',
          paddingX: 2
          }}>
          <Typography variant="body2" sx={{ color: Colors.orBlack, whiteSpace: 'nowrap', marginRight: 1 }}>Check out the team dashboard</Typography><ArrowForwardIcon/>
        </Grid>
      </Grid>
    </Box>
  );
}
export default NewsBar;
