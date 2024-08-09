import React from "react";

const LeaderBoardList = ({userimage, name, rankimage}) => {
  return (
    <div className="w-full flex justify-between items-center px-4 py-2 my-2 overflow-hidden">
      <div className="w-12 h-12 rounded-full overflow-hidden">
        <img src={userimage} alt="" className="w-full h-full object-cover relative" />
      </div>
      <div className="w-2/4">
        <p className="font-semibold">{name}</p>
        <p className="text-xs text-gray-400">Non Programming League_NPL</p>
      </div>
      <div className="w-12 h-12 overflow-hidden">
        <img src={rankimage} alt="" className="w-full object-cover relative" />
      </div>
    </div>
  );
};

export default LeaderBoardList;
