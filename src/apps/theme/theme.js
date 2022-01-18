import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#36998B",
      second: "#E5E5E5",
      // background: "#F7F7FA",
    },
  },
  typography: {
    fontFamily: "Poppins",
    fontWeightLight: 400,
    fontWeighRegular: 500,
    fontWeightBold: 700,
  },
    shape: {
      borderRadius: 6,
    },
});
