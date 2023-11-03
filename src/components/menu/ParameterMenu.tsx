import React from "react";
import "../../assets/styles/button.scss"
import { Link } from "react-router-dom";

interface Props { }

export const ParameterMenu: React.FC<Props> = () => (
  <div className="flex flex-col font-[1000] text-2xl font-font">
    <div>
      MODE
      <div className="mt-[5px]">
        <button className="">
          <Link to={"/"}>NORMAL</Link>
        </button>
        <button>
          <Link to={"/"}>REVERSE</Link>
        </button>
      </div>
    </div>
    <div>
      VOLUME
    </div>
    <div className="self-end">
      <button>
        <Link to={"/"}>FERMER</Link>
      </button>
    </div>
  </div>
);