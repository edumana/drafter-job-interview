import { Typography } from "@mui/material";
import { Box } from "@mui/system";

function FeatureBox({ image, text1, text2 }) {


  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', maxWidth: 380 }}>
      <Box
        component='img'
        src={`/feature-icons/${image}.jpg`}
        alt={`logo-${image}`}
        width={50}
        height={50}
        key={`logo-${image}`}
      />
      <Typography variant="h6" sx={{textAlign: 'center'}}>
        {text1}
      </Typography>
      <Typography variant="body1" sx={{textAlign: 'center'}}>
        {text2}
      </Typography>
    </Box>
  );
}
export default FeatureBox;
