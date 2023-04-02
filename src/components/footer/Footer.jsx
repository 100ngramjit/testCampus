import React from "react";
import logo from "../../assets/logoaircampus.png";
import EmailIcon from "@mui/icons-material/Email";
import PhoneAndroidOutlinedIcon from "@mui/icons-material/PhoneAndroidOutlined";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

import "./style.css";

export default function Footer() {
  return (
    <div
      style={{
        backgroundColor: "#e67b1e",
        color: "white",
        padding: "32px",
        width: "100%",
        margin: "0 auto",
      }}
    >
      <div className="d-flex flex-wrap justify-between">
        <div className="footer_image align-self-center mb-4">
          <img src={logo} width="200" />
        </div>
        <small className="text-justify fw-bold mb-4">
          AirCampus is a premium LearnTech company offering industry-relevant
          programs in partnership with world-class institutions to create the
          change-makers of tomorrow. Part of the rich legacy of the Hero Group,
          we aim to transform the skilling landscape in India by creating
          programs delivered by leading industry practitioners that help
          professionals and students enhance their skills and employability.
        </small>
      </div>
      <hr
        style={{
          backgroundColor: "white",
          height: "1px",
          marginTop: "32px",
          border: "none",
        }}
      />
      <div className="container mt-5">
        <div className="row gx-5">
          <div className="col-12 col-md-4">
            <h6 className="mb-3 footer_heading">TECHNOLOGY</h6>
            <small className="mb-3 d-block">
              Certificate Program in Full Stack Development with Cloud for Web
              and Mobile
            </small>
            <small className="mb-3 d-block">
              Certificate Program in Full Stack Development with Cloud for Web
              and Mobile
            </small>
          </div>
          <div className="col-12 col-md-4">
            <h6 className="mb-3 footer_heading">FINANCE & MANAGEMENT</h6>
            <small className="mb-3 d-block">
              Certificate Program in Financial Analysis, Valuation and Risk
              Management
            </small>
            <small className="mb-3 d-block">
              Certificate Program in Strategic Management and Business
              Essentials
            </small>
            <small className="mb-3 d-block">
              Certificate Program in Product Management
            </small>
          </div>
          <div className="col-12 col-md-4">
            <h6 className="mb-3 footer_heading">Data Science</h6>
            <small className="mb-3 d-block">
              Accelerator Program in Business Analytics &amp; Data Science
            </small>
            <small className="mb-3 d-block">
              Integrated Program in Data Science, AI and ML
            </small>
            <small className="mb-3 d-block">
              Accelerator Program in AI and Machine Learning
            </small>
          </div>
        </div>
      </div>

      <div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "start",
          }}
        >
          <div
            style={{ textAlign: "start", margin: "32px", minWidth: "200px" }}
          >
            <h6 className="footer_heading">AirCampus links</h6>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              <li style={{ margin: "10px 0" }}>
                <a
                  style={{ color: "#ffffff", textDecoration: "none" }}
                  href="#"
                >
                  Vired for Business
                </a>
              </li>
              <li style={{ margin: "10px 0" }}>
                <a
                  style={{ color: "#ffffff", textDecoration: "none" }}
                  href="#"
                >
                  Success Stories
                </a>
              </li>
              <li style={{ margin: "10px 0" }}>
                <a
                  style={{ color: "#ffffff", textDecoration: "none" }}
                  href="#"
                >
                  In the News
                </a>
              </li>
              <li style={{ margin: "10px 0" }}>
                <a
                  style={{ color: "#ffffff", textDecoration: "none" }}
                  href="#"
                >
                  Learning Hub
                </a>
              </li>
              <li style={{ margin: "10px 0" }}>
                <a
                  style={{ color: "#ffffff", textDecoration: "none" }}
                  href="#"
                >
                  About Us
                </a>
              </li>
              <li style={{ margin: "10px 0" }}>
                <a
                  style={{ color: "#ffffff", textDecoration: "none" }}
                  href="#"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div
            style={{ textAlign: "start", margin: "32px", minWidth: "200px" }}
          >
            <h6 className="footer_heading">CONTACT</h6>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              <li style={{ margin: "10px 0" }}>
                <PhoneAndroidOutlinedIcon />
                <span className="small">8989622874</span>
              </li>
              <li style={{ margin: "10px 0" }}>
                <EmailIcon />
                <span className="small"> admissions@aircampus.in </span>
              </li>
              <li style={{ margin: "10px 0" }}>
                <WhatsAppIcon />
                <span className="small"> Whatsapp</span>
              </li>
            </ul>
          </div>
        </div>
        <hr
          style={{
            backgroundColor: "white",
            height: "1px",
            marginTop: "32px",
            border: "none",
          }}
        />
        <div style={{ textAlign: "center", padding: "16px" }}>
          <p>
            &copy; {new Date().getFullYear()} AirCampus. All Rights Reserved. |{" "}
            <a href="#" className="footer_heading">
              Privacy Policy
            </a>{" "}
            |{" "}
            <a href="#" className="footer_heading">
              Terms of Use
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
