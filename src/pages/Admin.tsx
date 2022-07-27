import React from 'react';
import styled from 'styled-components';
import Search from '../components/admin/Search';
import { useRecoilValue } from 'recoil';
import { searchQuery } from '../store/atom';
import GetItem from '../components/admin/GetItem';
import CSV from '../components/admin/CSV';

const Admin = () => {
  const search = useRecoilValue(searchQuery); //getApplicationData에 넣을 search 인자값
  console.log(search);

  return (
    <>
      <Header>메인</Header>
      <ContentsContainer>
        <Sidebar />
        <Contents>
          <Title>AI 학습용 교통 데이터 수집을 위한 크라우드 워커 지원 현황</Title>
          <SearchCSVContainer>
            <Search />
            <CSV />
          </SearchCSVContainer>
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
  padding-left: 20px;
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
  background: var(--color-gray);
`;

const Contents = styled.div`
  position: relative;
  flex: 9;
  width: 100%;
  height: 100%;
  //display: flex;
`;

const Title = styled.div`
  //justify-content: flex-start;
  margin-top: 50px;
  margin-left: 30px;
  font-size: 30px;
  font-weight: bold;
`;

const SearchCSVContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
