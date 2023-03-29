import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#ef6603",
    },
    secondary: {
      main: "#f9fbfd",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          disableElevation: true,
          textTransform: "none",
        },
      },
    },
  },
});
