import * as React from "react";
import { styled } from "@mui/material/styles";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Avatar,
  Typography,
  Box,
} from "@mui/material";
import logo from "../assets/react.svg";

const StyledCardHeader = styled(CardHeader)(({ theme }) => ({
  paddingBottom: 0,
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(7),
  height: theme.spacing(7),
}));

const StyledCardSection = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: theme.palette.grey[200],
  padding: theme.spacing(1),
  "& img": {
    height: theme.spacing(5),
  },
}));

function AluminiCard() {
  return (
    <Card sx={{ maxWidth: 245 }}>
      <StyledCardSection>
        <Typography variant="h6" color="green">
          90% hike
        </Typography>
      </StyledCardSection>
      <StyledCardHeader
        avatar={
          <StyledAvatar
            src="https://mui.com/static/images/avatar/2.jpg"
            alt="avatar"
          />
        }
        title={
          <Typography pl="0" variant="h6">
            John Doe
          </Typography>
        }
        subheader="Software Engineer"
      />

      <CardContent>
        <Typography variant="body2" color="text.secondary">
          I really appreciate the way how the team is proactive with their
          follow-ups. While there are many EdTech platforms in India, they all
          are missing the personal touch that the team at Hero Vired team
          provides.
        </Typography>
      </CardContent>
      <StyledCardSection>
        <img src={logo} alt="logo" />
      </StyledCardSection>
    </Card>
  );
}

export default AluminiCard;
