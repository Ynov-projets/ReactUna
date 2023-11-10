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
      <div className="justify-center flex-col w-[550px] h-[500px] pl-6 bg-black bg-opacity-70 font-font italic font-black text-3xl text-white text-center border-orange rounded-xl border-solid border-[4px]"
        style={{ display: show ? 'flex' : 'none' }}>
          Connectez-vous avant de pouvoir jouer
        {children}<button
            className="absolute bottom-5 right-[50%]"
            onClick={() => setShow(false)}
        >
          X
        </button>
        </div>
        
      </div>
    </>
  );
};

export default Modal;
