import React from "react";
import whatsappLogo from "../assets/whatsapplogo.png";

const HelpButton = () => {
  const handleHelpClick = () => {
    // handle help button click
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: 20,
        right: 20,
        backgroundColor: "#25d366",
        color: "white",
        borderRadius: "50%",
        width: 60,
        height: 60,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
        cursor: "pointer",
      }}
    >
      <img src={whatsappLogo} alt="WhatsApp" style={{ width: 40 }} />
    </div>
  );
};

export default HelpButton;
