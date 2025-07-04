import React from "react";
import "./Policies.css";

function Policies() {
  return (
    <div className="policies-section" id="policies">
      <h2>📋 Policies & Procedures</h2>
      <p>
        We follow strict policies to ensure safety, inclusivity, and
        professionalism in every aspect of childcare. You can download our
        latest policies below:
      </p>
      <a href="/childminder-policies.pdf" download className="pdf-download">
        📄 Download Policies & Procedures (PDF)
      </a>
    </div>
  );
}

export default Policies;
