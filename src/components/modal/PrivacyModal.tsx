import React from 'react';
import styled from 'styled-components';
import ModalPortal from './ModalPortal';
import { ModalProps } from '../../types/ModalProps.type';
import PrivacyTemplate from '../privacy/Privacy';

type PrivacyModalProps = {
  children: ModalProps;
  setShowPrivacyModal: any;
};

const PrivacyModal = (props: PrivacyModalProps) => {
  return (
    <ModalPortal>
      <PrivacyModalContainer>
        <PrivacyTemplate setShowPrivacyModal={props.setShowPrivacyModal}>{props.children}</PrivacyTemplate>
      </PrivacyModalContainer>
    </ModalPortal>
  );
};

export default PrivacyModal;

const PrivacyModalContainer = styled.div`
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
