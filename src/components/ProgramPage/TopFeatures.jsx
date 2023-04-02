import React from "react";
import girlStudentImg from "../../assets/programPage/girlStudentImg.webp";
import VolunteerActivismTwoToneIcon from "@mui/icons-material/VolunteerActivismTwoTone";
import Groups2TwoToneIcon from "@mui/icons-material/Groups2TwoTone";
import Diversity2TwoToneIcon from "@mui/icons-material/Diversity2TwoTone";

const TopFeatures = () => {
  return (
    <div
      className="d-flex flex-column flex-md-row justify-content-md-center align-items-md-center bg-light"
      style={{ minHeight: "80vh" }}
    >
      <div className="flex-grow-1">
        <img src={girlStudentImg} className="w-100 h-100" alt="Girl student" />
      </div>
      <div className="flex-grow-1 p-5">
        <h1 className="section_header text-center text-md-start">
          With great power comes great responsibility
        </h1>
        <div className="d-flex flex-column">
          <p className="d-flex align-items-center my-3">
            <VolunteerActivismTwoToneIcon fontSize="large" />
            <span className="ms-3">
              Managing your own finances as you experience financial
              independence
            </span>
          </p>
          <p className="d-flex align-items-center my-3">
            <Groups2TwoToneIcon fontSize="large" />
            <span className="ms-3">
              Maturity for teamwork & collaboration in a diverse work
              environment
            </span>
          </p>
          <p className="d-flex align-items-center my-3">
            <Diversity2TwoToneIcon fontSize="large" />
            <span className="ms-3">
              Build and manage a professional network at leading companies from
              the onset of your study
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TopFeatures;
