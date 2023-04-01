import React from "react";

const FAQ = () => {
  return (
    <div>
      <div className="text-center mb-5">
        <p className="text-p-yellow">HAVE ANY DOUBTS?</p>
        <h2 className="section_header">Frequently Asked Questions</h2>
      </div>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              When do the new batches start for the Job Guarantee & Pay after
              Placement Course?
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Batches begin on the first week of every month for both our Job
              Guarantee (Beginner) & Pay after Placement (Intermediate) Course
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="true"
              aria-controls="collapseTwo"
            >
              I am not from Computer Science Field or Tech Background. Am I
              eligible?
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Yes! All college students, graduates, and working professionals
              who are willing to put in the effort to break into the field of
              computer science, regardless of their degree, graduation
              percentage, or branch, are eligible for our course.
            </div>
          </div>
        </div>{" "}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="true"
              aria-controls="collapseThree"
            >
              Are there any Scholarships?
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Yes. We've Scholarships Available only for our 100% Job Guarantee
              (Beginner) Course. You can appear for AccioSAT - a monthly
              scholarship test. All Participants in AccioSAT receive a
              substantial scholarship for AccioJob’s Beginner Full Stack Web
              Development Course with the Maximum scholarship being 100%. In
              case you're a woman looking to start her career in Tech we'll be
              bearing INR 15,000 once you enrol with us. You cannot club
              scholarships while enrolling.
            </div>
          </div>
        </div>{" "}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="true"
              aria-controls="collapseFour"
            >
              Will I receive a Certificate once I complete my Course?
            </button>
          </h2>
          <div
            id="collapseFour"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Yes, our students will receive a certificate recognized Nationally
              & authenticated by National Skill Development Corporation (NSDC),
              India.
            </div>
          </div>
        </div>{" "}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFive"
              aria-expanded="true"
              aria-controls="collapseFive"
            >
              Can I do this part-time? What are the timings?
            </button>
          </h2>
          <div
            id="collapseFive"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              The course is designed to be part-time! It is developed keeping
              working professionals and undergraduates in mind. You'll have
              daily live lectures by our instructors from 8 pm to 11 pm and
              you'll need to put in 2-3 hours of self-study time for our
              Beginner Course & 5-7 hours for our Intermediate Course to solve
              assignments. On weekends you'll also have coding contests, soft
              skills training, mentor sessions and mock interviews. Nothing in
              the course will stop you from joining your college classes or
              attending your office.
            </div>
          </div>
        </div>{" "}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSix"
              aria-expanded="false"
              aria-controls="collapseSix"
            >
              What if I decide not to continue the course?
            </button>
          </h2>

          <div
            id="collapseSix"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Students are free to drop out anytime before signing the agreement
              or before paying the registration amount for the course. Every
              month, we conduct free live classes so that students can join and
              try the AccioJob learning experience before joining the main
              course
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSeven"
              aria-expanded="false"
              aria-controls="collapseSeven"
            >
              When do the placement drives start?
            </button>
          </h2>
          <div
            id="collapseSeven"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              We start sending students for placement drives right after they
              complete a certain number of modules of the course and unlimited
              placement opportunities are consistently provided for at least a
              year.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseEight"
              aria-expanded="false"
              aria-controls="collapseEight"
            >
              What if I get placed below the minimum salary guarantee?
            </button>
          </h2>
          <div
            id="collapseEight"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              We don't encourage our students to settle for a job below their
              salary guarantee ever but if the student still wishes to, we don't
              charge any course fee for that placement.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
