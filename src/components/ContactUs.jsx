import React, { useContext } from "react";
import PhoneAndroidOutlinedIcon from "@mui/icons-material/PhoneAndroidOutlined";

import EmailIcon from "@mui/icons-material/Email";

import { MobileViewContext } from "../context/WindowSizeContext";

function ContactUs() {
  const value = useContext(MobileViewContext);
  return (
    <div>
      <div className="text-center">
        <h3 className="section_header">We are here for you!</h3>
        <p className="fs-5">
          We encourage our learners to ask questions directly and reach out to
          us anytime
        </p>
      </div>
      <div className="container mt-5">
        <div className="row gx-5">
          <div className="col-12 col-md-6 mb-5">
            <img
              src="https://herovired.com/wp-content/uploads/2023/01/consultation-queries-img.webp"
              alt=""
              className="img-fluid"
            />
          </div>
          <div className="col-12 col-md-5 ms-md-5 text-start">
            <p className=" mb-4 fs-5">
              Enter your details and our Learning Consultant will reach out to
              you shortly
            </p>
            <form className={`${value ? "text-center" : ""} mb-4`}>
              <div className="form-group mb-3">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  id="firstName"
                  placeholder="First Name"
                />
              </div>
              <div className="form-group mb-3">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  id="lastName"
                  placeholder="Last Name"
                />
              </div>
              <div className="form-group mb-3">
                <input
                  type="number"
                  className="form-control form-control-lg"
                  id="number"
                  placeholder="9999999999"
                />
              </div>

              <button type="submit" className="btn btn-outline-dark btn-lg">
                Call me
              </button>
            </form>
            <div className="text-center">
              <p className="fs-5">YOU CAN ALSO REACH US AT</p>
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
