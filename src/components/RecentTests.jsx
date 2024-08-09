import React from "react";
import CircularProgressBar from "./CircularProgressBar";

const RecentTests = ({src, langauge, percentage}) => {
  return (
    <div className="card">
        <img
          src={src}
          alt="programming language"
        />
      <div className="image__content">
        <div>
          <p className="mb-2">{langauge}</p>
          <span>Resume</span>
        </div>
        <CircularProgressBar percentage={percentage}/>
      </div>
    </div>
  );
};

export default RecentTests;
