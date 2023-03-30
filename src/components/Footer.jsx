import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export default function Footer() {
  return (
    <Box
      sx={{
        bgcolor: "primary.dark",
        color: "white",
        pt: 8,
        pb: 6,
        width: "100%",
      }}
    >
      <Grid container spacing={4}>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" gutterBottom>
            Column 1
          </Typography>
          <Typography variant="body2" gutterBottom>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            euismod quam velit, sit amet euismod odio mollis eget. Sed vitae
            lacinia risus.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" gutterBottom>
            Column 2
          </Typography>
          <Typography variant="body2" gutterBottom>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            euismod quam velit, sit amet euismod odio mollis eget. Sed vitae
            lacinia risus.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" gutterBottom>
            Column 3
          </Typography>
          <Typography variant="body2" gutterBottom>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            euismod quam velit, sit amet euismod odio mollis eget. Sed vitae
            lacinia risus.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
