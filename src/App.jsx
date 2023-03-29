import { Button, Typography } from "@mui/material";
import "./App.css";
import Header from "./components/Header";

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
      <Typography variant="h2">High-growth programs</Typography>
      <Typography variant="p">
        We design and deliver industry-relevant programs with access to top
        global universities, to create the change makers of tomorrow
      </Typography>
      <div>
        {catagories?.map((ele) => (
          <Button
            key={ele}
            variant="outlined"
            color="inherit"
            sx={{ m: 2, p: 2 }}
          >
            {ele}
          </Button>
        ))}
      </div>
    </>
  );
}

export default App;
