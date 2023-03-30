import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import WorkIcon from "@mui/icons-material/Work";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import { Typography } from "@mui/material";

export default function AchievementsList() {
  return (
    <List
      sx={{
        display: "flex",
        justifyContent: "space-around",
        flexDirection: "row",
        bgcolor: "background.paper",
        p: 0,
      }}
    >
      <ListItem sx={{ width: 200 }}>
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
      <ListItem sx={{ width: 200 }}>
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
      <ListItem sx={{ width: 200 }}>
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
      <ListItem sx={{ width: 200 }}>
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
    </List>
  );
}
