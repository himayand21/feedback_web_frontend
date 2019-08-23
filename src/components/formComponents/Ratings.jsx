import React from "react";
import StarRatingComponent from "react-star-rating-component";
import OtherSkills from "./OtherSkills";
const Ratings = props => {
  return (
    <div className="form-group">
      {props.applyingFor !== "" ? (
        <span>
          {Object.keys(props.rating).map(skill => (
            <div>
              <div className="rating">{skill}:</div>
              <div className="rating">
                <StarRatingComponent
                  key={skill}
                  name={skill}
                  starColor="rgb(43, 73, 136)"
                  emptyStarColor="lightgray"
                  starCount={5}
                  value={props.rating[skill]}
                  onStarClick={props.onStarClick}
                />
              </div>
              <div
                className="remove-button"
                name={skill}
                onClick={() => props.removeRating(skill)}
              >
                ×
              </div>
            </div>
          ))}
          <br />
          <OtherSkills
            otherOptions={props.otherOptions}
            otherSkills={props.otherSkills}
            handleSkillChange={props.handleSkillChange}
          />
        </span>
      ) : null}
    </div>
  );
};

export default Ratings;
