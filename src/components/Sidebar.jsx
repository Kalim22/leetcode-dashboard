import React, { useState } from "react";
// user image
import logo from "../assets/images/logo.png";
// list
import { menuList } from "../assets/constants/constants";
// icon
import { MdOutlineClose } from "react-icons/md";

const Sidebar = ({showSideMenu, setShowSideMenu}) => {
  const [currentIndex] = useState(0);

  return (
    <div className="sidebar" style={{transform: showSideMenu  && 'translateX(0)'}}>
      <MdOutlineClose
        className="self-end pt-2 cursor-pointer hover:scale-125 duration-200 show-menu-button"
        size={35}
        onClick={() => setShowSideMenu(false)}
      />

      <div className="logo">
        <img src={logo} alt="logo"/>
      </div>
      <div className="main__menu">
        {menuList &&
          menuList.slice(0, 6).map((menu, index) => {
            return (
              <div key={menu?.id} className="menulist__box">
                <menu.icon
                  color={currentIndex === index ? "#e35d8f" : "black"}
                />
                <p
                  style={{
                    color: currentIndex === index ? "#e35d8f" : "black",
                  }}
                >
                  {menu?.menu}
                </p>
              </div>
            );
          })}
      </div>
      <div className="main__menu settings">
        {menuList &&
          menuList.slice(6, 8).map((menu) => {
            return (
              <div key={menu?.id} className="menulist__box">
                <menu.icon />
                <p>{menu?.menu}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Sidebar;
