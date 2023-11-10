import React, { PropsWithChildren } from "react";

interface Props {
  show: boolean;
  setShow: (value: boolean) => void;
}

const Modal: React.FC<PropsWithChildren<Props>> = (props) => {
  const { children, show, setShow } = props;

  return (
    <>
    <div className="w-full absolute top-[200px] mx-auto flex flex-col items-center">
      <div className="w-[550px] h-[500px] bg-black bg-opacity-70 font-font italic font-black text-white text-center border-orange rounded-xl border-solid border-[4px]"
        style={{ display: show ? 'flex' : 'none' }}>
          vous ne pouvez pas jouer si vous n'etes pas connecté
        {children}
        </div>
        <button
            className=""
            onClick={() => setShow(false)}
        >
          X
        </button>
      </div>
    </>
  );
};

export default Modal;
