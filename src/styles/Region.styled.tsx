import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 40vh;
  border: 1px solid #dbdbdb;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
`;

export const HeaderContainer = styled.div`
  position: relative;
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid #dbdbdb;
`;

export const Header = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-size: 20px;
  font-weight: bold;
`;

export const CloseButton = styled.button`
  font-size: 25px;
  color: #c0c0c0;
  margin-left: 10px;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-top: 15px;
`;

export const MenuTitleContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 20%;
`;

export const MenuTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
  padding-left: 10px;
`;

export const MenuListContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
`;

export const Menu = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 200px;
  min-width: 80px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  overflow-y: auto;

  &:hover {
    background-color: #f7f6fb;
    transition: background 0.3s ease-in;
  }
`;

export const MenuList = styled.li`
  list-style: none;
  flex-direction: row;
  font-size: 18px;
`;
