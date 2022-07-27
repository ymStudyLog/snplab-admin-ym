import styled from 'styled-components';

export const Header = styled.nav`
  width: 100%;
  height: 50px;
  background-color: var(--color-black);
  color: var(--color-white);
  display: flex;
  align-items: center;
  font-size: 20px;
`;

export const HeaderText = styled.div`
  margin-left: 30px;
`;

export const ContentsContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;

export const Sidebar = styled.div`
  position: relative;
  flex: 1;
  min-width: 200px;
  height: 100%;
  background: var(--color-sidebar);
`;

export const Contents = styled.div`
  position: relative;
  flex: 9;
  width: 100%;
  height: 100%;
`;

export const ContentsTitle = styled.div`
  width: 100%;
`;

export const TitleText = styled.div`
  margin: 30px;
  font-size: 30px;
  font-weight: bold;
`;

export const SearchCSVContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 30px;
  width: 95%;
`;

export const TabsContainer = styled.div`
  width: 95%;
  margin: 0 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PaginationsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
