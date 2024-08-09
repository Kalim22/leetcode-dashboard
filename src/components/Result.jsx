import React from "react";


// icons
import { FaPencilAlt,FaPercentage  } from "react-icons/fa";
import { newList } from "../assets/constants/constants";

const Result = () => {
  return (
    <>
      <div className="test">
        <div className="icon__container">
          <FaPencilAlt color="#9b61e5" size={25} />
        </div>
        <div>
          <p className="font-bold text-3xl">32</p>
          <p className="text-gray-400">Test Writtern</p>
        </div>
      </div>
      <div className="overall">
        <div className="icon__container">
          <FaPercentage  color="#9b61e5" size={25} />
        </div>
        <div>
          <p className="font-bold text-3xl">80%</p>
          <p className="text-gray-400">Overall Average</p>
        </div>
      </div>
      <div className="list">
        {newList?.map((item) => {
          return (
            <div key={item?.id} className="flex">
              <div className="icon__container mr-4">
                <item.icon 
                size={30}
                color={item?.color}/>
              </div>
              <div>
                <p className="font-bold text-xl">{item?.number}</p>
                <p className="text-gray-400 text-sm">{item?.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Result;
