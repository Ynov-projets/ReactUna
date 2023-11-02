import React, { PropsWithChildren } from 'react';

interface Props {
  show: boolean;
  setShow: (value: boolean) => void;
}

const Modal: React.FC<PropsWithChildren<Props>> = (props) => {
  const { children, show, setShow } = props;

  return (
    <>
    <div className="absolute top-20 left-1/3 flex flex-col items-center">
      <div className="w-[500px] h-[500px] bg-black opacity-50"
        style={{ display: show ? 'flex' : 'none' }}>
      </div>
        <button
            className=""
            onClick={() => setShow(false)}
        >
            X
        </button>
        {children}
      </div>
    </>
  );
};

export default Modal;
