import { Typography } from "@mui/material";

function ThreeLineBox({ text1, text2, text3 }) {


  return (
    <>
      <Typography variant="subtitle1">{text1}</Typography>
      <Typography variant="h2">{text2}</Typography>
      <Typography variant="body1" sx={{ textAlign: 'center', marginY: 2, maxWidth: 600 }}>{text3}</Typography>
    </>
  );
}
export default ThreeLineBox;
