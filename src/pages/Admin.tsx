import React from 'react';
import styled from 'styled-components';
import Search from '../components/admin/Search';
import { useRecoilValue } from 'recoil';
import { searchQuery } from '../store/atom';
//import Header from '../components/admin/Header';

type Props = {};

const Admin = (props: Props) => {
  const search = useRecoilValue(searchQuery); //getApplicationData에 넣을 search 인자값
  console.log(search);

  return (
    <AdminContainer>
      <Header>메인</Header>
      <ContentsContainer>
        <Sidebar />
        <Contents>
          <Title>AI 학습용 교통 데이터 수집을 위한 크라우드 워커 지원 현황</Title>
        </Contents>
      </ContentsContainer>
    </AdminContainer>
  );
};

export default Admin;

const AdminContainer = styled.div`
  //width: 100%;
  //height: 1200px;
`;

const Header = styled.nav`
  width: 100%;
  height: 50px;
  background-color: var(--color-black);
  color: var(--color-white);
  display: flex;
  align-items: center;
  font-size: 25px;
  padding-left: 20px;
`;

const ContentsContainer = styled.div`
  display: flex;
  border: 5px solid red;
`;

const Sidebar = styled.div`
  position: fixed;
  justify-content: flex-start;
  z-index: 999;
  width: 200px;
  height: 100%;
  background: var(--color-gray);
  //top: 0;
  left: 0;
`;

const Contents = styled.div``;

const Title = styled.div`
  z-index: 990;
`;
