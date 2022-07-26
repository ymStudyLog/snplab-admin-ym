import React from "react";
import styled from "styled-components";
import Search from "../components/admin/Search";
import { useRecoilValue } from "recoil";
import { searchQuery } from "../store/atom";
import GetItem from "../components/admin/GetItem";

type Props = {};

const Admin = (props: Props) => {
  const search = useRecoilValue(searchQuery); //getApplicationData에 넣을 search 인자값
  console.log(search);

  return (
    <AdminContainer>
      <Search />
      <GetItem />
    </AdminContainer>
  );
};

export default Admin;

const AdminContainer = styled.div`
  width: 100%;
  height: auto;
`;
