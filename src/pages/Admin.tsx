import React from "react";
import Search from "../components/admin/Search";

type Props = {};

//1차모집 : 2022-07-01 ~ 2022-07-31
//2차모집 : 2022-08-01 ~ 2022-08-31
//3차모집 : 2022-09-01 ~ 2022-09-30

const Admin = (props: Props) => {
  return (
    <div>
      Admin
      <Search />
    </div>
  );
};

export default Admin;
