import * as React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import WorkIcon from "@mui/icons-material/Work";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import { Grid, Typography } from "@mui/material";

export default function AchievementsList() {
  return (
    <Grid container spacing={2} sx={{ p: 2 }}>
      <Grid item xs={12} sm={6} md={3}>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <ImageIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={<Typography variant="h4">99.35%</Typography>}
            secondary="Avg. Salary Hike"
          />
        </ListItem>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <WorkIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={<Typography variant="h4">₹15 Cr</Typography>}
            secondary="Highest Package"
          />
        </ListItem>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <BeachAccessIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={<Typography variant="h4">100%</Typography>}
            secondary="Placement Record"
          />
        </ListItem>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <BeachAccessIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={<Typography variant="h4">500+</Typography>}
            secondary="Hiring Partners"
          />
        </ListItem>
      </Grid>
    </Grid>
  );
}
