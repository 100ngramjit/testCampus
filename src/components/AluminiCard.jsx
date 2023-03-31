import * as React from "react";
import logo from "../assets/react.svg";

function AluminiCard() {
  return (
    <div
      style={{
        maxWidth: 245,
        border: "1px solid #ccc",
        borderRadius: 5,
        margin: 10,

        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#f5f5f5",
          padding: 10,
        }}
      >
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
            <h6 style={{ margin: 0 }}>John Doe</h6>
            <p style={{ margin: 0 }}>Software Engineer</p>
          </div>
        </div>
        <p style={{ marginTop: 10 }}>
          I really appreciate the way how the team is proactive with their
          follow-ups. While there are many EdTech platforms in India, they all
          are missing the personal touch that the team at Hero Vired team
          provides.
        </p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#f5f5f5",
          padding: 10,
        }}
      >
        <img src={logo} alt="logo" style={{ height: 25 }} />
      </div>
    </div>
  );
}

export default AluminiCard;
