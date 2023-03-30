import React, { useContext } from "react";
import PhoneAndroidOutlinedIcon from "@mui/icons-material/PhoneAndroidOutlined";

import EmailIcon from "@mui/icons-material/Email";

import { MobileViewContext } from "../context/WindowSizeContext";

function ContactUs() {
  const isMobileView = useContext(MobileViewContext);
  console.log("first", isMobileView);
  return (
    <div>
      <div className="text-center">
        <h3 className="section_header">We are here for you!</h3>
        <p>
          We encourage our learners to ask questions directly and reach out to
          us anytime
        </p>
      </div>
      <div className="container mt-5">
        <div class="row gx-5">
          <div class="col-6">
            <img
              src="https://herovired.com/wp-content/uploads/2023/01/consultation-queries-img.webp"
              alt=""
            />
          </div>
          <div class="col-4 ms-5 text-start">
            <p className=" mb-5">
              Enter your details and our Learning Consultant will reach out to
              you shortly
            </p>
            <form className="mb-5">
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
            <div className="text-center">
              <p>YOU CAN ALSO REACH US AT</p>
              <div className="shadow p-3 mb-3 rounded">
                <PhoneAndroidOutlinedIcon />
                <span className="h5 ms-2">8989622874</span>
              </div>
              <div className="shadow p-3 mb-5 rounded">
                <EmailIcon />
                <span className="h5 ms-2"> admissions@aircampus.in </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
