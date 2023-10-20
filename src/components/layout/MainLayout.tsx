import React, { useState } from "react";
import Modal from "../modal/index";

interface Props {}

export const MainLayout: React.FC<Props> = () => {
  const [open, setIsOpen] = useState(false);
  return (
    <>
      <div className="bg-black">
        <div className="">
          <button className="" onClick={() => {}}>
            connexion
          </button>
          <button className="" onClick={() => {}}>
            inscription
          </button>
        </div>
        <div className="">
          <img src="src\assets\images\BigLogo.png" alt="Logo du jeu" />
        </div>
        <div className="">
          <button className="" onClick={() => setIsOpen(true)}>
            jouer
          </button>
          <button className="" onClick={() => {}}>
            parametres
          </button>
          <button className="" onClick={() => {}}>
            quitter
          </button>
        </div>
        <Modal show={open} setShow={() => setIsOpen(false)}>
          <h1>ihbevivebeibi</h1>
        </Modal>
      </div>
    </>
  );
};
