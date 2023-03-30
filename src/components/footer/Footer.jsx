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
        backgroundColor: "#1d1d1d",
        color: "white",
        padding: "64px",
        width: "100%",
      }}
    >
      <div className="d-flex justify-between">
        <div className="footer_image align-self-center">
          <img src={logo} width="200" />
        </div>
        <small className="text-justify">
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
        <div class="row gx-5">
          <div class="col-4">
            <h6 className="mb-3">TECHNOLOGY</h6>
            <small className="mb-3 d-block">
              Certificate Program in Full Stack Development with Cloud for Web
              and Mobile
            </small>
            <small className="mb-3 d-block">
              Certificate Program in Full Stack Development with Cloud for Web
              and Mobile
            </small>
          </div>
          <div class="col-4">
            <h6 className="mb-3">FINANCE & MANAGEMENT</h6>
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
          <div class="col-4">
            <h6 className="mb-3">Data Science</h6>
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

      <div style={{ textAlign: "start", marginTop: "32px" }}>
        <h6>AirCampus links</h6>
        <ul
          style={{ display: "flex", listStyle: "none", padding: 0, margin: 0 }}
        >
          <li style={{ marginRight: "20px" }}>
            <a style={{ color: " #ffffff", textDecoration: "none" }} href="#">
              Vired for Business
            </a>
          </li>
          <li style={{ marginRight: "20px" }}>
            <a style={{ color: " #ffffff", textDecoration: "none" }} href="#">
              Success Stories
            </a>
          </li>
          <li style={{ marginRight: "20px" }}>
            <a style={{ color: " #ffffff", textDecoration: "none" }} href="#">
              In the News
            </a>
          </li>
          <li style={{ marginRight: "20px" }}>
            <a style={{ color: " #ffffff", textDecoration: "none" }} href="#">
              Learning Hub
            </a>
          </li>
          <li style={{ marginRight: "20px" }}>
            <a style={{ color: " #ffffff", textDecoration: "none" }} href="#">
              About Us
            </a>
          </li>
          <li style={{ marginRight: 0 }}>
            <a style={{ color: " #ffffff", textDecoration: "none" }} href="#">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
      <div style={{ textAlign: "start", marginTop: "32px" }}>
        <h6>CONTACT</h6>
        <ul
          style={{ display: "flex", listStyle: "none", padding: 0, margin: 0 }}
        >
          <li style={{ marginRight: "20px" }}>
            <PhoneAndroidOutlinedIcon />
            <span className="small">8989622874</span>
          </li>
          <li style={{ marginRight: "20px" }}>
            <EmailIcon />
            <span className="small"> admissions@aircampus.in </span>
          </li>
          <li style={{ marginRight: 0 }}>
            <WhatsAppIcon />
            <span className="small"> Whatsapp</span>
          </li>
        </ul>
      </div>
      <hr
        style={{
          backgroundColor: "white",
          height: "1px",
          marginTop: "32px",
          border: "none",
        }}
      />

      <div style={{ textAlign: "center", marginTop: "32px", padding: "16px" }}>
        <p>
          &copy; {new Date().getFullYear()} AirCampus. All Rights Reserved. |{" "}
          <a href="#">Privacy Policy</a> | <a href="#">Terms of Use</a>
        </p>
      </div>
    </div>
  );
}
