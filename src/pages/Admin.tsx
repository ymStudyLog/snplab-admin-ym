import styled from 'styled-components';
import React from 'react';
import Search from '../components/admin/Search';

type Props = {};

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
