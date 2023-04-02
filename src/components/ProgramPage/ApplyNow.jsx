import React from "react";
import applyImg from "../../assets/programPage/applyImg.webp";

const ApplyNow = () => {
  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-6">
          <div className="text-center text-md-start">
            <h2 className="section_header">
              India’s 1st Liberal Engineering Program in Computer Science
            </h2>
            <p>
              An on-campus program, where you graduate with new-age tech skills
              and 3 years of tech-industry work experience.
            </p>
            <div>
              <button
                className="btn btn-light"
                style={{ backgroundColor: "#fe6b1e", color: "#ffffff" }}
                type="submit"
              >
                Start Learning
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <img src={applyImg} className="img-fluid" alt="Apply Now" />
        </div>
      </div>
    </div>
  );
};

export default ApplyNow;
