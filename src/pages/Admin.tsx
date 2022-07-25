import React from 'react';
import Search from '../components/admin/Search';
import styled from 'styled-components';

type Props = {};

//1차모집 : 2022-07-01 ~ 2022-07-31
//2차모집 : 2022-08-01 ~ 2022-08-31
//3차모집 : 2022-09-01 ~ 2022-09-30

const Admin = (props: Props) => {
  return (
    <AdminContainer>
      <Search />
    </AdminContainer>
  );
};

export default Admin;

const AdminContainer = styled.div`
  width: 100%;
  height: auto;
`;
