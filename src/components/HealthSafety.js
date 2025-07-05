import React from "react";
import "./HealthSafety.css";
import allergyImage from "../assets/allergy-management.jpg";

function HealthSafety() {
  return (
    <div className="health-safety-section" id="health">
      <h2>🍎 Health & Allergy Safety</h2>
      <p>
        At Buzzing Bees Network, your child’s health is our top priority. We
        follow strict allergy procedures and ensure all staff are trained in
        managing allergies and emergency protocols.
      </p>
      <img
        src={allergyImage}
        alt="Allergy Management Procedure"
        className="health-img"
      />
    </div>
  );
}

export default HealthSafety;
