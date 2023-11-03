import React from "react";
import { Link, Outlet } from "react-router-dom";
import logo from "../../assets/images/BigLogo.png"

interface Props { }
export const MenuLayout: React.FC<Props> = () => (
  <div className="bg-background pl-[5px] pt-[15px] pb-[80px] h-screen">
    <div>
      <Link to={"/"} className="block w-[270px] h-auto overflow-hidden">
        <img src={logo} alt="logo" className="w-full h-auto"/>
      </Link>
    </div>
    <div className="flex justify-center bg-white mx-auto max-w-[390px] rounded-xl p-[20px]">
      <Outlet/>
    </div>
  </div>
);