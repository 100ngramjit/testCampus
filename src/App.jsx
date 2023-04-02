import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage";
import Layout from "./components/Layout/Layout";
import ProgramPage from "./components/ProgramPage/ProgramPage";
import FAQ from "./components/FAQ";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="programs" element={<ProgramPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
