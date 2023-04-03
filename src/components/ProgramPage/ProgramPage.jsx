import React from "react";
import ApplyNow from "./ApplyNow";
import { Box, Container } from "@mui/material";
import SkillSection from "./SkillSection";
import TopFeatures from "./TopFeatures";
import TableComponent from "./TableComponent";

const ProgramPage = () => {
  return (
    <>
      <Box sx={{ my: 8 }}>
        <Container>
          <ApplyNow />
        </Container>
      </Box>
      <Box sx={{ my: 8 }}>
        <Container>
          <SkillSection />
        </Container>
      </Box>
      <Box sx={{ my: 8 }}>
        <TopFeatures />
      </Box>
      <Box sx={{ my: 8 }}>
        <Container>
          <TableComponent />
        </Container>
      </Box>
    </>
  );
};

export default ProgramPage;
