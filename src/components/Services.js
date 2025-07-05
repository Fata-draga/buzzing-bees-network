import React from "react";
import "../components/Services.css"; // Adjusted path for clarity
import childcareChoicesLogo from "../assets/childcare-choices-logo.png";
import brighterFuturesLogo from "../assets/Brighter-Futures-Logo.png";

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="services-container">
        <h2>Our Services</h2>
        <ul className="services-list">
          <li>Full-time & part-time care</li>
          <li>Emergency & overnight childcare</li>
          <li>School drop-offs & pickups</li>
          <li>Individual learning plans based on EYFS</li>
          <li>Flexible hours to suit your needs</li>
        </ul>

        <div className="services-links">
          <a
            href="https://www.childcarechoices.gov.uk"
            target="_blank"
            rel="noopener noreferrer"
            title="Visit Childcare Choices"
          >
            <img
              src={childcareChoicesLogo}
              alt="Childcare Choices UK Government Logo"
              className="external-logo"
            />
          </a>

          <a
            href="https://brighterfuturesforchildren.org"
            target="_blank"
            rel="noopener noreferrer"
            title="Visit Brighter Futures for Children"
          >
            <img
              src={brighterFuturesLogo}
              alt="Brighter Futures for Children Logo"
              className="external-logo"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
