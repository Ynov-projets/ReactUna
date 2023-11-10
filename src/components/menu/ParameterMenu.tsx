import React from "react";
import "../../assets/styles/button.scss"
import { Link } from "react-router-dom";
import { Menu } from "./Menu";

interface Props { }

export const ParameterMenu: React.FC<Props> = () => (
  <Menu children={
    <div className="flex flex-col font-[1000] text-2xl font-font">
      <div className="font-font italic font-black mb-[20px]">
        MODE
        <div className="flex justify-center gap-[30px] my-[10px] ">
          <button className="button font-font italic font-black bg-orange">
            <Link to={"/login"}>NORMAL</Link>
          </button>
          <button className="button font-font italic font-black bg-grey">
            <Link to={"/"}>REVERSE</Link>
          </button>
        </div>
      </div>
      <div className="font-font italic font-black">
        VOLUME
      </div>
      <div className="self-end mt-[70px] sm:mt-[215px] md:mt-[200px]">
        <button className="button font-font italic font-black bg-orange text-[17px] px-[15px] py-[0px]">
          <Link to={"/"}>FERMER</Link>
        </button>
      </div>
    </div>
  } />
  
);