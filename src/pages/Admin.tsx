import styled from 'styled-components';
import React from "react";
import Search from "../components/admin/Search";
import { regionService, getRegionData } from "../api/api";
// import { applyService,getApplicantsData } from "../api/api";

type Props = {};

type DataType = {
  [key:string]:string;
}

const Admin = (props: Props) => {
  const [temp, setTemp] = React.useState([]);
  // React.useEffect(()=>{
  //   getRegionData(regionService).then((data)=>{setTemp(data)});
  // },[]);
  // console.log(temp[0].인천광역시);

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
