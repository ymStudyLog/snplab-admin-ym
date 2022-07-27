import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 550px;
  border-bottom: 1px solid var(--color-border);
  background-color: var(--color-white);
  display: flex;
  flex-direction: column;
`;

export const HeaderContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 55px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid var(--color-border);
`;

export const HeaderText = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-size: 20px;
  font-weight: bold;
`;

export const CloseButton = styled.button`
  font-size: 27px;
  color: var(--color-subtitle);
  margin-left: 10px;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 500px;
  margin: 10px 0;
`;

export const MenuTitleContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  min-height: 50px;
`;

export const MenuTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  padding-left: 30px;
`;

export const MenuListContainer = styled.div`
  width: 100%;
  min-height: 450px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
`;

export const Menu = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 450px;
  min-width: 80px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  overflow-y: auto;
  //margin: 15px 0;
`;

export const MenuList = styled.li`
  list-style: none;
  flex-direction: row;
  font-size: 18px;
  width: 100%;
  text-align: center;
  margin: 15px 0;
`;
