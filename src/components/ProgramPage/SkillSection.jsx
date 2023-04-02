import React from "react";
import skillsImg from "../../assets/programPage/skillsImg.webp";

const SkillSection = () => {
  return (
    <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-md-center">
      <div className="p-3">
        <img src={skillsImg} style={{ maxWidth: "100%" }} alt="Skills" />
      </div>
      <div className="p-3">
        <div className="text-center mb-5">
          <h2 className="section_header">
            At AirCampus, Your Earnings Don’t Have To Wait Till Graduation
          </h2>
        </div>
        <div className="shadow p-3 mb-5 bg-body-tertiary rounded">
          <strong>Assured Internships</strong> at the end of 1st year at leading
          global tech companies & emerging startups
        </div>
        <div className="shadow p-3 mb-5 bg-body-tertiary rounded">
          Earn upto <strong> ₹ 8 Lakhs</strong> in stipends
        </div>
        <div className="shadow p-3 mb-5 bg-body-tertiary rounded">
          Attract <strong>3X salary</strong> and growth upon graduation in
          comparison with other graduates
        </div>
      </div>
    </div>
  );
};

export default SkillSection;
