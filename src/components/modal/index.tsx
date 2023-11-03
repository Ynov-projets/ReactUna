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
      <div className="w-[550px] h-[500px] bg-black opacity-50"
        style={{ display: show ? 'flex' : 'none' }}>
      
        <button
            className=""
            onClick={() => setShow(false)}
        >
            sdfdsfdsf
        </button>
        {children}
        </div>
      </div>
    </>
  );
};

export default Modal;
