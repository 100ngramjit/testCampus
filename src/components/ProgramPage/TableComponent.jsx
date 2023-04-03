import React from "react";

const TableComponent = () => {
  return (
    <>
      <h1 className="section_header " style={{ marginBottom: 15 }}>
        Comparison between Regular & Kalvium Eng.
      </h1>
      <div className="table-responsive">
        <table className="table table-light ">
          <thead>
            <tr>
              <th scope="col"></th>
              <th
                scope="col"
                style={{ backgroundColor: "#fe6b1e", color: "#ffffff" }}
              >
                AirCampus CSE
              </th>
              <th
                scope="col"
                style={{ backgroundColor: "#6e6e6e", color: "#ffffff" }}
              >
                Regular CSE
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="mb-3">
              <td>Learning Approach</td>
              <td style={{ backgroundColor: "#f7d8c3" }}>
                Critical thinking based on a minds-on & hands-on approach
              </td>
              <td style={{ backgroundColor: "#cac9c9" }}>
                Rote based learning through repeated memorization
              </td>
            </tr>
            <tr className="mb-3">
              <td>Teaching Approach​</td>
              <td style={{ backgroundColor: "#f7d8c3" }}>
                Students are active participants of the tech-industry & submit
                real-world projects through mandated internships
              </td>
              <td style={{ backgroundColor: "#cac9c9" }}>
                Students are passive recipients to all-day descriptive lectures
                & theoretical assignments
              </td>
            </tr>
            <tr className="mb-3">
              <td>Knowledge Evaluation</td>
              <td style={{ backgroundColor: "#f7d8c3" }}>
                Basic understanding, participation, & outcomes during industry
                internship
              </td>
              <td style={{ backgroundColor: "#cac9c9" }}>
                Written examinations that test academic memorization
              </td>
            </tr>
            <tr className="mb-3">
              <td>Pedagogy & Facilities</td>
              <td style={{ backgroundColor: "#f7d8c3" }}>
                Out-of-classroom expertise via Programming Laboratories &
                High-on-Learning sessions
              </td>
              <td style={{ backgroundColor: "#cac9c9" }}>
                Chalk and Board lectures
              </td>
            </tr>
            <tr className="mb-3">
              <td>Curriculum Designers</td>
              <td style={{ backgroundColor: "#f7d8c3" }}>
                Your Future Recruiters & Tech-Industry Experts
              </td>
              <td style={{ backgroundColor: "#cac9c9" }}>
                Government, Institute faculty, or Subject Matter Experts
              </td>
            </tr>
            <tr className="mb-3">
              <td>Software methodologies</td>
              <td style={{ backgroundColor: "#f7d8c3" }}>
                Implement Scrum, Kanban, & Agile with tools such as Jira &
                Trello on real-world industry projects
              </td>
              <td style={{ backgroundColor: "#cac9c9" }}>
                Theoretical introduction of Scrum, Kanban, & Agile
              </td>
            </tr>
            <tr className="mb-3">
              <td>Faculty</td>
              <td style={{ backgroundColor: "#f7d8c3" }}>
                Mentors who are subject matter experts with tech-industry coding
                experience
              </td>
              <td style={{ backgroundColor: "#cac9c9" }}>
                Professors with no real-world industry experience
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="d-flex justify-content-md-center">
        <button
          className="btn btn-light"
          style={{ backgroundColor: "#fe6b1e", color: "#ffffff" }}
          type="submit"
        >
          Start Learning
        </button>
      </div>
    </>
  );
};

export default TableComponent;
