import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Link } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        bgcolor: "#000000",
        color: "white",
        p: 8,
        width: "100%",
      }}
    >
      <Grid container spacing={4}>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" gutterBottom>
            TECHNOLOGY
          </Typography>
          <Typography variant="body2" gutterBottom>
            Certificate Program in Full Stack Development with Cloud for Web and
            Mobile
          </Typography>
          <Typography variant="body2" gutterBottom>
            Certificate Program in Full Stack Development with Cloud for Web and
            Mobile
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" gutterBottom>
            FINANCE & MANAGEMENT
          </Typography>
          <Typography variant="body2" gutterBottom>
            Certificate Program in Financial Analysis, Valuation and Risk
            Management
          </Typography>
          <Typography variant="body2" gutterBottom>
            Certificate Program in Strategic Management and Business Essentials
          </Typography>
          <Typography variant="body2" gutterBottom>
            Certificate Program in Product Management
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" gutterBottom>
            Data Science
          </Typography>
          <Typography variant="body2" gutterBottom>
            Accelerator Program in Business Analytics & Data Science
          </Typography>
          <Typography variant="body2" gutterBottom>
            Integrated Program in Data Science, AI and ML
          </Typography>{" "}
          <Typography variant="body2" gutterBottom>
            Accelerator Program in AI and Machine Learning
          </Typography>
        </Grid>
      </Grid>
      <Box textAlign="center" mt={2} py={2}>
        <Typography variant="body2">
          &copy; {new Date().getFullYear()} AirCampus. All Rights Reserved. |{" "}
          <Link href="#">Privacy Policy</Link> |{" "}
          <Link href="#">Terms of Use</Link>
        </Typography>
      </Box>
    </Box>
  );
}
