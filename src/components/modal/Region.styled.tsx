import styled from 'styled-components';

export const Body = styled.div`
  position: fixed;
  top: 0px;
  bottom: 0px;
  right: 0px;
  left: 0px;
  display: flex;
  justify-content: center;
  background-color: #fafafa;
`;

export const ParentContainer = styled.div`
  border: 1px solid #dbdbdb;
  height: 70vh;
  width: 350px;
  margin: 35px 0 10px 0;
  min-height: auto;
  min-width: auto;
  background-color: #ffffff;
`;

export const ModalBackground = styled.div`
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

export const RegionContainer = styled.div`
  position: relative;
  width: 100%;
  height: 40vh;
  border: 1px solid #dbdbdb;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
`;

export const RegionHeader = styled.div`
  position: relative;
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid #dbdbdb;
`;

export const RegionTitle = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-size: 20px;
  font-weight: bold;
`;

export const CloseIconWrapper = styled.button`
  font-size: 25px;
  color: #c0c0c0;
  margin-left: 10px;
`;

export const RegionContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-top: 15px;
`;

export const DropdownTitleContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 20%;
`;

export const DropdownTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

export const DropdownContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
`;

export const Dropdown = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 60%;
  min-width: 18%;
  border: none;
  border-radius: 5px;
  padding: 15px;
  gap: 0.5rem;
  cursor: pointer;
  &:hover {
    background-color: #f7f6fb;
    transition: background 0.3s ease-in;
  }
`;

export const DropdownList = styled.li`
  list-style: none;
  flex-direction: row;
  font-size: 18px;
`;
