import * as React from "react";
import logo from "../../assets/react.svg";
import "./style.css";

function AluminiCard() {
  return (
    <div className="alumni_card">
      <div className="d-flex justify-content-center align-items-center w-100 p-3 alumni_background">
        <h6 style={{ margin: 0, color: "green" }}>90% hike</h6>
      </div>
      <div style={{ padding: 10 }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src="https://mui.com/static/images/avatar/2.jpg"
            alt="avatar"
            style={{
              width: 70,
              height: 70,
              borderRadius: "50%",
              marginRight: 10,
            }}
          />
          <div>
            <h6 className="m-0 fw-bold">John Doe</h6>
            <p className="m-0 ">Software Engineer</p>
          </div>
        </div>
        <p className="mt-3 fw-light">
          I really appreciate the way how the team is proactive with their
          follow-ups. While there are many EdTech platforms in India, they all
          are missing the personal touch that the team at Hero Vired team
          provides.
        </p>
      </div>
      <div className="alumni_background w-100 d-flex justify-content-center align-items-center p-4">
        <img src={logo} alt="logo" style={{ height: 25 }} />
      </div>
    </div>
  );
}

export default AluminiCard;
