import styled from "styled-components";
import { ModalType } from "../../types/modaType";
import ModalPortal from "./ModalPortal";

const ModalBackground = ({ children }: ModalType) => {
  return (
    <ModalPortal>
      <Background>{children}</Background>
    </ModalPortal>
  );
};

export default ModalBackground;

const Background = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 0;
  width: 350px;
  height: 1070px;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;
