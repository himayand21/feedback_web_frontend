import React from "react";

const AboutUs = () => {
  return (
    <div className="about">
      <div className="intro about-intro">
        <div className="intro-name">About </div>
      </div>
      <div className="title-tag">
        Simpler. <br />
        Smarter.
        <br /> Better.
      </div>
      <div className="about-list">
        <br />
        <div className="instruction">
          Once done with your interview, here you can :
        </div>
        <i class="fas fa-check" /> Fill in candidate details.
        <br />
        <i class="fas fa-check" /> Upload resume.
        <br />
        <i class="fas fa-check" /> Review them later - anytime - anywhere.
        <br />
        <i class="fas fa-check" /> Filter candidates according to names, status
        and desired designation.
        <br />
        <i class="fas fa-check" /> Monitor your panel's ongoing interviews.
        <br />
        <i class="fas fa-check" /> All your organization's interview history -
        in one place.
        <br />
      </div>
    </div>
  );
};

export default AboutUs;
