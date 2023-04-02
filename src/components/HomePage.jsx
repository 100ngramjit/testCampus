import { Box, Container } from "@mui/material";

import AchievementsList from "./achievements/AchievementsList";
import ContactUs from "./ContactUs";
import Header from "./header/Header";
import AluminiCardCarousal from "./AluminiCardCarousal/AluminiCardCarousal";

import ImageCarousal from "./hero-section/ImageCarousal";
import PlacementsCarousal from "./placements/PlacementsCarousal";

import Footer from "./footer/Footer";
import HelpButton from "./HelpButton";
import FAQ from "./FAQ";
import AssuredFeatures from "./AssuredFeatures";
import ProgramPage from "./ProgramPage/ProgramPage";

function HomePage() {
  return (
    <>
      {/* <Header /> */}
      <ImageCarousal />

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
        <Container>
          <AssuredFeatures />
        </Container>
      </Box>
      <Box sx={{ my: 8 }}>
        <AluminiCardCarousal />
      </Box>
      <ContactUs />
      <Box sx={{ my: 8 }}>
        <Container>
          <FAQ />
        </Container>
      </Box>
      <ProgramPage />
      {/* <Footer /> */}
      <HelpButton />
    </>
  );
}

export default HomePage;
