import React from "react";
import { Link, Outlet } from "react-router-dom";
import logo from "../../assets/images/BigLogo.png"

interface Props { }
export const MenuLayout: React.FC<Props> = () => (
  <div className="bg-background relative pl-[5px] pt-[15px] pb-[80px] h-screen ">
    <div>
      <Link to={"/"} className="block w-[180px] h-auto overflow-hidden sm:w-[200px] lg:w-[260px] xl:w-[300px]">
        <img src={logo} alt="logo" className="w-full h-auto"/>
      </Link>
    </div>
    <div className=" 
      relative flex bg-white mx-auto max-w-[420px] h-[300px] rounded-xl p-[20px] 
      sm:max-w-[580px] sm:h-[450px]
      lg:top-[-55px] lg:max-w-[650px]
      xl:max-w-[750px] xl:h-[500px] xl:top-[-90px]
    ">
      <div className="w-full">
        <Outlet/>
      </div>
    </div>
  </div>
);