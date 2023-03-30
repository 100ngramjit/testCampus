import React from "react";
import logo from "../assets/logoaircampus.png";
export default function Footer() {
  return (
    <div
      style={{
        backgroundColor: "#000000",
        color: "white",
        padding: "64px",
        width: "100%",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div
          style={{
            backgroundColor: "#ffffff",
            color: "white",
            padding: "10px",
            margin: 1,
            flexBasis: "33.33%",
            borderRadius: "25px",
          }}
        >
          <img src={logo} style={{ height: 70, width: 165 }} />
        </div>
        <div style={{ padding: "10px" }}>
          AirCampus is a premium LearnTech company offering industry-relevant
          programs in partnership with world-class institutions to create the
          change-makers of tomorrow. Part of the rich legacy of the Hero Group,
          we aim to transform the skilling landscape in India by creating
          programs delivered by leading industry practitioners that help
          professionals and students enhance their skills and employability.
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
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ flexBasis: "33.33%" }}>
          <h6>TECHNOLOGY</h6>
          <p>
            Certificate Program in Full Stack Development with Cloud for Web and
            Mobile
          </p>
          <p>
            Certificate Program in Full Stack Development with Cloud for Web and
            Mobile
          </p>
        </div>
        <div style={{ flexBasis: "33.33%" }}>
          <h6>FINANCE &amp; MANAGEMENT</h6>
          <p>
            Certificate Program in Financial Analysis, Valuation and Risk
            Management
          </p>
          <p>
            Certificate Program in Strategic Management and Business Essentials
          </p>
          <p>Certificate Program in Product Management</p>
        </div>
        <div style={{ flexBasis: "33.33%" }}>
          <h6>Data Science</h6>
          <p>Accelerator Program in Business Analytics &amp; Data Science</p>
          <p>Integrated Program in Data Science, AI and ML</p>
          <p>Accelerator Program in AI and Machine Learning</p>
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
            <a style={{ color: " #ffffff", textDecoration: "none" }} href="#">
              18003093939 ·
            </a>
          </li>
          <li style={{ marginRight: "20px" }}>
            <a style={{ color: " #ffffff", textDecoration: "none" }} href="#">
              hello@herovired.com ·
            </a>
          </li>
          <li style={{ marginRight: 0 }}>
            <a style={{ color: " #ffffff", textDecoration: "none" }} href="#">
              Whatsapp
            </a>
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
