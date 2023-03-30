import React, { useContext } from "react";
import { MobileViewContext } from "../context/WindowSizeContext";

function ContactUs() {
  const isMobileView = useContext(MobileViewContext);
  console.log("first", isMobileView);
  return (
    <div>
      {" "}
      <h3>We are here for you!</h3>
      <p>
        We encourage our learners to ask questions directly and reach out to us
        anytime
      </p>
      <div className="container mt-5">
        <div class="row gx-5">
          <div class="col-6">
            <img
              src="https://herovired.com/wp-content/uploads/2023/01/consultation-queries-img.webp"
              alt=""
            />
          </div>
          <div class="col-3 ms-5">
            <p className="text-start mb-5">
              Enter your details and our Learning Consultant will reach out to
              you shortly
            </p>
            <form className="text-start">
              <div class="form-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="firstName"
                  placeholder="First Name"
                />
              </div>
              <div class="form-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="lastName"
                  placeholder="Last Name"
                />
              </div>
              <div class="form-group mb-3">
                <input
                  type="number"
                  class="form-control"
                  id="number"
                  placeholder="9999999999"
                />
              </div>

              <button type="submit" class="btn btn-outline-dark">
                Call me
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
