import React from "react";

const Feedback = ({ image, comment, fullname, job, id }) => {
  return (
    <div className="feedback" id={id}>
        <img className="feedback-avatar" src={image} alt={fullname} />
        <p className="feedback-paragraph">{comment}</p>
        <p className="feedback-fullname">{fullname}</p>
        <p className="feedback-job">{job}</p>
    </div>
  );
};

export default Feedback;
