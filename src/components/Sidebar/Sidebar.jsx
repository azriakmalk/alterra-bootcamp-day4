/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo-ALTA-v2.png";
import iconArrow from "../../assets/control.png";

const Header = () => {
  let history = useNavigate();
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "HOME", link: '/'},
    { title: "ABOUT", link: '/about'},
    // { title: "Accounts",  gap: true },
  ];
  return (
    <div
      className={` ${
        open ? "w-72" : "w-20 "
      } bg-blue-900 h-screen p-5 pt-8 relative duration-300`}
    >
      <img
        src={iconArrow}
        className={`absolute cursor-pointer -right-3 top-9 w-7 border-blue-900 border-2 rounded-full ${
          !open && "rotate-180"
        }`}
        onClick={() => setOpen(!open)}
      />
      <div className="flex gap-x-4 items-center">
        <img
          src={logo}
          className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"}`}
          onClick={()=> history('/')}
        />
      </div>
      <ul className="pt-6">
        {Menus.map((Menu, index) => (
          <li
            key={index}
            className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
              index === 0 && "bg-light-white"
            } `}
          >
            <span className={`${!open && "hidden"} origin-left duration-200 hover:text-zinc-900`} onClick={()=>history(Menu.link)}>
              {Menu.title}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Header;
