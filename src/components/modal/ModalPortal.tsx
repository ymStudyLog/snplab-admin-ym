import React from 'react';
import { createPortal } from 'react-dom';
import { ModalType } from '../../types/modaType';

const modalRoot = document.querySelector('#modal-root') as HTMLElement;

const Portal = ({ children }: ModalType) => {
  const el = React.useRef(document.createElement('div'));

  React.useEffect(() => {
    const current = el.current;
    modalRoot!.appendChild(current);
    return () => void modalRoot!.removeChild(current);
  }, []);

  return createPortal(children, el.current);
};

export default Portal;
