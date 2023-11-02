import React, { PropsWithChildren } from 'react';

interface Props {
  show: boolean;
  setShow: (value: boolean) => void;
}

const Modal: React.FC<PropsWithChildren<Props>> = (props) => {
  const { children, show, setShow } = props;

  return (
    <>
    <div
        className=""
        style={{ display: show ? 'flex' : 'none' }}
    >
      <div>
        <button
            className=""
            onClick={() => setShow(false)}
        >
            X
        </button>
        {children}
      </div>
    </div>
    </>
  );
};

export default Modal;