

import { Typography, Card, Grid, Button } from "@mui/material";
import { Box, Stack } from "@mui/system";
import Colors from "../constants/colors";
import SubMenuItem from "./SubMenuItem";

function ProductSubMenu({ productBoxPosition }) {
  const subMenuTitle = [
    'Blog',
    'Customer Stories',
    'Video Tutorials']
  const subMenuBody = [
    'The latest industry news, updates, and info',
    'Learn how our customers are making big changes',
    'Get up and running on new features and techniques']
  return (
    <Card sx={{
      backgroundColor: '#FFF',
      width: 600,
      height: 350,
      position: 'absolute',
      top: `${productBoxPosition.top}px`,
      left: `${productBoxPosition.left}px`,
      borderStyle: 'solid',
      borderColor: Colors.orMediumGray,
      borderRadius: 4,
      borderWidth: 0.6,
      padding: 2
    }}>
      <Grid container sx={{ display: 'flex', flex: 1, height: '100%', justifyContent: 'center', alignItems: 'center' }} spacing={2}>
        <Grid item sm={6} sx={{ display: 'flex', flex: 1 }}>
          <Stack sx={{}}>
            {subMenuTitle.map((e, i) => <SubMenuItem
              image={i + 1}
              title={e}
              body={subMenuBody[i]} />)}
          </Stack>
        </Grid>
        <Grid item sm={6}>
          <Box
            component='img'
            width='100%'
            src={`customer.png`}
            alt='sub-logo'
            sx={{ margin: 1 }}
          />
          <Typography variant="body1" sx={{color: '#000', fontWeight: 'bold'}}>
            We've just released an update.
          </Typography>
          <Typography variant="body1">
            Check out the new dashboard view. Pages now load faster.
          </Typography>
          <Box>
            <Button sx={{color: Colors.orDarkGray}}>
              Dismiss
            </Button>
            <Button>
              Changelog
            </Button>
          </Box>
        </Grid>

      </Grid>
    </Card>
  );
}
export default ProductSubMenu;