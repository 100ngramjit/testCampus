import { Box, Button, Container, Grid, Typography } from "@mui/material";
import "./App.css";
import AchievementsList from "./components/achievements/AchievementsList";
import ContactUs from "./components/ContactUs";
import Header from "./components/header/Header";
import AluminiCardCarousal from "./components/AluminiCardCarousal/AluminiCardCarousal";

import ImageCarousal from "./components/hero-section/ImageCarousal";
import PlacementsCarousal from "./components/placements/PlacementsCarousal";

import MediaCard from "./components/MediaCard";
import Footer from "./components/footer/Footer";
import HelpButton from "./components/HelpButton";

const catagories = [
  "Popular",
  "Data Science",
  "Technology",
  "Management",
  "Arts",
];
function App() {
  return (
    <>
      <Header />
      <ImageCarousal />
      {/* <Box sx={{ my: 8 }}>
        <Typography variant="h3">High-growth programs</Typography>
        <Typography variant="p">
          We design and deliver industry-relevant programs with access to top
          global universities, to create the change makers of tomorrow
        </Typography>
        <Box>
          {catagories?.map((ele) => (
            <Button key={ele} variant="outlined" color="inherit" sx={{ m: 2 }}>
              {ele}
            </Button>
          ))}
        </Box>
      </Box> */}
      <Box sx={{ my: 8 }}>
        <Container>
          <AchievementsList />
        </Container>
      </Box>
      <Box sx={{ my: 8 }}>
        <Container>
          <PlacementsCarousal />
        </Container>
      </Box>
      <Box sx={{ my: 8 }}>
        {/* <Container> */}
        <AluminiCardCarousal />
        {/* </Container> */}
      </Box>
      {/* <Box sx={{ my: 8 }}>
        <Typography variant="h3"> Our media presence </Typography>
        <Typography variant="p">
          Find AirCampus in the media spotlightnn
        </Typography>

        <Grid container spacing={5} sx={{ p: 2 }}>
          {[1, 2, 3, 4].map((ele) => (
            <Grid key={ele} item xs={12} sm={6} md={3}>
              <MediaCard />
            </Grid>
          ))}
        </Grid>
      </Box> */}
      <ContactUs />
      {/* <Footer />
      <HelpButton /> */}
    </>
  );
}

export default App;
