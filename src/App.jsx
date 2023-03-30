import { Box, Button, Typography } from "@mui/material";
import "./App.css";
import AchievementsList from "./components/AchievementsList";
import Footer from "./components/Footer";
import Header from "./components/Header";

import ImageCarousal from "./components/ImageCarousal";

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
      <Box sx={{ my: 8 }}>
        <Typography variant="h2">High-growth programs</Typography>
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
      </Box>
      <Box sx={{ my: 8 }}>
        <Typography variant="h2">Measurable transformations</Typography>
        <Typography variant="p">
          We offer programs with placement assistance to help our learners find
          success
        </Typography>
        <AchievementsList />
      </Box>
      <Box sx={{ my: 8 }}>
        <Typography variant="h2">Where our learners work</Typography>
        <Typography variant="p">
          Programs with built-in career and placement assistance for our
          learners to find success and growth
        </Typography>
      </Box>
      <Footer />
    </>
  );
}

export default App;
