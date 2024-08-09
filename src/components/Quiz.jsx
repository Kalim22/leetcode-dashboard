import React from "react";

const Quiz = () => {
  return (
    <div className="quiz">
      <p className="font-semibold mb-2">Upcoming Quiz Competition</p>
      <div className="w-24 h-24 overflow-hidden">
      <img
        src="https://img.freepik.com/free-vector/desk-calendar-with-marked-dates-3d-cartoon-style-icon-planning-time-meeting-scheduling-flat-vector-illustration-appointment-deadline-agenda-reminder-time-management-concept_74855-25964.jpg?w=740&t=st=1723115143~exp=1723115743~hmac=ae1b712095b96e110ee7d0ceb8001c5722e706b7a9c9b95206f41481f95932ec"
        className="w-full h-full object-cover relative"
      />
      </div>
      <p className="mb-3 text-gray-400 font-bold">12th Aug, 2023</p>
      <button className="register-button">Register Now</button>
    </div>
  );
};

export default Quiz;
