import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import airCampus_logo from "../assets/logoaircampus.png";

export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 275 }}>
      <CardMedia
        sx={{ height: 140, width: 275 }}
        image={airCampus_logo}
        title="green iguana"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          AirCampus's flagship program is ranked #1 in the world
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
