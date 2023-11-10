import "../assets/styles/button.scss";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../components/modal/index";


interface Props {}

export const HomePage: React.FC<Props> = () => {
  const [open, setIsOpen] = useState(false);
  // setIsOpen(false);
  return (
    <>
      <div className="w-full h-screen bg-background">
        <div className="absolute top-[10px] right-[10px]">
          <Link to={"/login"}>
            <button
              className="mx-2 px-3 py-2 uppercase border-none bg-transparent text-white text-base ml-2 hover:shadow-lg hover:bg-cyan-600"
              onClick={() => {}}
            >
              connexion
            </button>
          </Link>
          <Link to={"/registration"}>
            <button
              className="px-3 py-2 uppercase border-solid border-[1px] border-whitebg-transparent text-white text-base ml-2 hover:shadow-xl hover:bg-cyan-600"
              onClick={() => {}}
            >
              inscription
            </button>
          </Link>
        </div>
        <div className="flex flex-col items-center">
          <img
            className="mt-5 h-64"
            src="src\assets\images\BigLogo.png"
            alt="Logo du jeu"
          />
        </div>
        <div className="flex flex-col items-center">
          <Link to={"/menu/join_game"}
            className=" font-font italic font-black w-[500px] h-[100px] bg-gradient-to-b from-orange to-orange-clear uppercase text-3xl m-5 cursor-pointer text-white rounded-lg hover:bg-gradient-to-r">
            jouer
          
            className=" w-[500px] h-[100px] bg-gradient-to-b from-yellow-500 to-amber-200 uppercase text-3xl m-5 cursor-pointer text-white rounded-lg hover:bg-gradient-to-r">
            jouer
          </Link>
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
