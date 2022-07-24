import React from 'react';
import styled from 'styled-components';
import { ModalProps } from '../../types/ModalProps';
import ModalPortal from './ModalPortal';

const ModalBackground = ({ children }: ModalProps) => {
  return (
    <ModalPortal>
      <Background>{children}</Background>
    </ModalPortal>
  );
};

export default ModalBackground;

const Background = styled.div`
  position: relative;
  height: 80vh;
  z-index: 999;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;
