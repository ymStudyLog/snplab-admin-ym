import React from 'react';
import styled from 'styled-components';
import Search from '../components/admin/Search';
import { useRecoilValue, useResetRecoilState } from 'recoil';
import { searchQuery } from '../store/atom';
import GetItem from '../components/admin/GetItem';
import CSV from '../components/admin/CSV';
import TabPanel from '../components/admin/TabPanel';
import PaginationRounded from '../components/admin/PaginationRounded';

const Admin = () => {
  const resetSearchQuery = useResetRecoilState(searchQuery); //search 리셋하는 함수. 어디에 달지 봐야됨
  const search = useRecoilValue(searchQuery); //getApplicationData에 넣을 search 인자값
  console.log(search);

  return (
    <>
      <Header>
        <HeaderText>메인</HeaderText>
      </Header>
      <ContentsContainer>
        <Sidebar />
        <Contents>
          <ContentsTitle>
            <TitleText>AI 학습용 교통 데이터 수집을 위한 크라우드 워커 지원 현황</TitleText>
          </ContentsTitle>
          <SearchCSVContainer>
            <Search />
            <CSV />
          </SearchCSVContainer>
          <TabsContainer>
            <TabPanel></TabPanel>
          </TabsContainer>
          <PaginationsContainer>
            <PaginationRounded />
          </PaginationsContainer>
        </Contents>
      </ContentsContainer>
    </>
  );
};

export default Admin;

const Header = styled.nav`
  width: 100%;
  height: 50px;
  background-color: var(--color-black);
  color: var(--color-white);
  display: flex;
  align-items: center;
  font-size: 20px;
`;

const HeaderText = styled.div`
  margin-left: 30px;
`;

const ContentsContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;

const Sidebar = styled.div`
  position: relative;
  flex: 1;
  min-width: 200px;
  height: 100%;
  background: var(--color-sidebar);
`;

const Contents = styled.div`
  position: relative;
  flex: 9;
  width: 100%;
  height: 100%;
`;

const ContentsTitle = styled.div`
  width: 100%;
`;

const TitleText = styled.div`
  margin: 30px;
  font-size: 30px;
  font-weight: bold;
`;

const SearchCSVContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 30px;
  width: 95%;
`;

const TabsContainer = styled.div`
  width: 95%;
  margin: 0 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PaginationsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
