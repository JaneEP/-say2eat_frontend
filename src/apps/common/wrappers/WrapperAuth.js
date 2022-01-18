import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

export const WrapperAuth = (props) => {
  return (
    <>
      <Typography>Header</Typography>
      <Box sx={{ flexGrow: 1, overflow: "hidden", px: 3 }}>
        {props.children}
        <Typography>Footer</Typography>
      </Box>
    </>
  );
};
