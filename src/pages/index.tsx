import "../assets/styles/button.scss";

import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Link } from "react-router-dom";
import { LoginMenu } from "../components/menu/LoginMenu";
import Modal from "../components/modal/index";

import { RegistrationMenu } from "../components/menu/RegistrationMenu";

interface Props {}

export const HomePage: React.FC<Props> = () => {
  const [open, setIsOpen] = useState(false);
  return (
    <>
      <div className="w-full h-screen bg-background">
        <div className="absolute top-[10px] right-[10px]">
          <button
            className="font-font italic font-black mx-2 px-3 py-2 border-none bg-transparent text-white text-base ml-2 hover:shadow-lg hover:bg-backgroundClear"
            
          >
            <Link to={"/login"}>Connexion</Link>
          </button>
          <button
            className="font-font italic font-black px-3 py-2 border-solid border-[1px] rounded-lg border-whitebg-transparent text-white text-base ml-2 hover:shadow-xl hover:bg-backgroundClear"
            onClick={() => {}}
          >
            <Link to={"/registration"}>Inscription</Link>
          </button>
        </div>
        <div className="flex flex-col items-center">
          <img
            className="mt-5 h-64"
            src="src\assets\images\BigLogo.png"
            alt="Logo du jeu"
          />
        </div>
        <div className="flex flex-col items-center">
          <button
            className=" font-font italic font-black w-[500px] h-[100px] bg-gradient-to-b from-orange to-orange-clear uppercase text-3xl m-5 cursor-pointer text-white rounded-lg hover:bg-gradient-to-r"
            onClick={() => setIsOpen(true)}
          >
            jouer
          </button>
          <button
            className=" font-font italic font-black w-[500px] h-[100px] bg-gradient-to-b from-orange to-orange-clear uppercase text-3xl m-5 cursor-pointer text-white rounded-lg hover:bg-gradient-to-r"
            onClick={() => {}}
          >
            <Link to={"/parameter"}>Parametre</Link>
          </button>
          <button
            className=" font-font italic font-black w-[500px] h-[100px] bg-gradient-to-b from-orange to-orange-clear uppercase text-3xl m-5 cursor-pointer text-white rounded-lg hover:bg-gradient-to-r"
            onClick={() => {}}
          >
            quitter
          </button>
        </div>
        <Modal show={open} setShow={() => setIsOpen(false)}>
        </Modal>
      </div>
    </>
  );
};
