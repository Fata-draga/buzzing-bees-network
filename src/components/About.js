import React from "react";
import "./About.css"; // optional: create styling if needed

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <h2>About Us</h2>
        <p>
          Buzzing Bees Network is a community-led childcare service offering
          flexible, reliable, and nurturing care. We provide day and night
          sitters, afterschool care, and weekend options—all backed by
          qualified, DBS-checked staff.
        </p>

        <h3>Our Mission</h3>
        <blockquote>
          <em>
            “Knowledge is not power, it is only potential. Applying that
            knowledge is power. Understanding why and when to apply that
            knowledge is wisdom.”
            <br />— Takeda Shingen
          </em>
        </blockquote>

        <p>
          Our mission is to provide childcare that is flexible to the needs of
          busy working families, and is catered to the child’s needs as decided
          by the parents who know their child best. We offer a personal
          approach, to ensure that every child is seen, heard, and treated
          equally.
        </p>

        <p>
          We want each child to have the best start in life, so adopting a
          play-based learning approach and providing an environment where
          children can develop life skills that will set them up for success is
          our goal.
        </p>

        <p>
          We encourage imitative play through music and a resource-rich
          environment so children develop the social skills they need in the
          next few years of their life.
        </p>
      </div>
    </section>
  );
};

export default About;
