import React, { useContext } from "react";
import AluminiCard from "../testimonials/AluminiCard";

const AluminiCardCarousal = () => {
  return (
    <>
      <div className="text-center mb-5">
        <h3 className="section_header">Hear straight from our learners</h3>
        <p>
          Hear our learners talk about their learning experience and share the
          impact on their professional lives
        </p>
      </div>
      <div className="d-flex flex-wrap justify-content-center g-5">
        <AluminiCard />
        <AluminiCard />
        <AluminiCard />
        <AluminiCard />
      </div>
    </>
  );
};

export default AluminiCardCarousal;
