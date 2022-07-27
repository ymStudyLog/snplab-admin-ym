import React from "react";
import styled from "styled-components";
import { ModalProps } from "../../types/ModalProps.type";
import ModalPortal from "./ModalPortal";

const ModalAgreeBackground = ({ children }: ModalProps) => {
  return (
    <ModalPortal>
      <AgreeBackground>{children}</AgreeBackground>
    </ModalPortal>
  );
};

export default ModalAgreeBackground;

const AgreeBackground = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 0;
  width: 350px;
  height: 1200px;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  overflow-y: auto;
`;
