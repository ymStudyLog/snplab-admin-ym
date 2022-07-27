import React from 'react';
import styled from 'styled-components';
import ModalPortal from './ModalPortal';
import { ModalProps } from '../../types/ModalProps.type';
import ThirdPartyTemplate from '../privacy/ThirdParty';

type ThirdPartyModalProps = {
  children: ModalProps;
  setShowThirdpartyModal: any;
};

const ThirdPartyModal = (props: ThirdPartyModalProps) => {
  return (
    <ModalPortal>
      <ThirdPartyModalContainer>
        <ThirdPartyTemplate setShowThirdpartyModal={props.setShowThirdpartyModal}>{props.children}</ThirdPartyTemplate>
      </ThirdPartyModalContainer>
    </ModalPortal>
  );
};

export default ThirdPartyModal;

const ThirdPartyModalContainer = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 0;
  width: 350px;
  height: auto;
  z-index: 999;
  border-left: 1px solid var(--color-border);
  border-right: 1px solid var(--color-border);
`;
