import React from "react";

// components
import Header from "./Header";
import Quiz from "./Quiz";
import RecentTests from "./RecentTests";
import Heading from "./Heading";
import LeaderBoardList from "./LeaderBoardList";
import Result from "./Result";

// icons
import { MdAccountTree } from "react-icons/md";
import { BsArrowsAngleExpand } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";

//lists
import { leaderBoardItems, testList } from "../assets/constants/constants";

const Dashboard = ({ setShowSideMenu }) => {
  return (
    <div className="dashboard">
      <GiHamburgerMenu
        size={25}
        className="m-1 absolute top-2 left-2 cursor-pointer hover:scale-125 duration-200 show-menu-button"
        onClick={() => setShowSideMenu(true)}
      />
      <Header name={'John'}/>
      <div className="main__content">
        <div className="content recent__tests__container">
          <Heading
            heading={"Recent Tests"}
            headingIcon={<MdAccountTree size={25} color="#e35d8f" />}
            optionalIcon={
              <BsArrowsAngleExpand
                style={{ transform: "rotate(45deg)" }}
                size={25}
              />
            }
          />
          <div className="flex justify-between items-center w-full ">
            {testList?.map((test) => {
              return (
                <RecentTests
                  key={test?.id}
                  src={test?.image}
                  percentage={test?.percentage}
                  langauge={test?.language}
                />
              );
            })}
          </div>
        </div>
        <div className="content flex-col ">
          <Heading
            heading={"Leader Board"}
            headingIcon={<MdAccountTree size={25} color="#e35d8f" />}
          />
          <div className="flex justify-between items-center bg-white w-full flex-col rounded-lg">
            {leaderBoardItems.map((item) => {
              return (
                <LeaderBoardList
                  key={item?.id}
                  name={item?.name}
                  userimage={item?.userImage}
                  rankimage={item?.rankimage}
                />
              );
            })}
          </div>
        </div>
        <div className="content quiz__container">
          <Quiz />
        </div>
        <div className="content result">
          <Result />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
