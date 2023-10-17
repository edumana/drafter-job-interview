import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Colors from "../constants/colors";
import fontSettings from "../constants/fontSettings";

function SubMenuItem({ image, title, body }) {

  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'row', marginY: 2 }}>
        <Box
          component='img'
          width={40}
          height={40}
          src={`/sub-menu-icons/sub${image}.jpg`}
          alt='sub-logo'
          sx={{ margin: 1 }}
        />
        <Box>
          <Typography variant="body1" sx={{color: '#000', fontWeight: 'bold'}}>{title}</Typography>
          <Typography variant="body1" sx={{color: Colors.orDarkGray, fontSize: fontSettings.s}}>{body}</Typography>
        </Box>
      </Box>
    </>
  );
}
export default SubMenuItem;
