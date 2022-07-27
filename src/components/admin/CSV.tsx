import React from "react";
import { CSVLink } from "react-csv";
import styled from "styled-components";
import { applyService, getApplicantsData } from "../../api/api";
import { CSVStateType } from "../../types/CSV.type";

const CSV = () => {
  const headers = [
    { label: "Num.", key: "id" },
    { label: "지원날짜", key: "submitdate" },
    { label: "지원자명", key: "name" },
    { label: "성별", key: "gender" },
    { label: "생년월일", key: "birthday" },
    { label: "연락처", key: "contact" },
    { label: "이메일", key: "email" },
    { label: "이용수단", key: "transportation" },
    { label: "거주지", key: "region" },
    { label: "당첨여부", key: "pass" },
  ];
  const [csvData, setCsvData] = React.useState<CSVStateType[]>([]);
  React.useEffect(() => {
    getApplicantsData<CSVStateType[]>(applyService).then((data) => {
      setCsvData(data);
    });
  }, []);
  return (
    <CSVLink data={csvData} headers={headers}>
      <CsvBtn>엑셀 다운로드</CsvBtn>
    </CSVLink>
  );
};

export default CSV;

const CsvBtn = styled.button`
  width: 150px;
  height: 50px;
  border-radius: 8px;
  background-color: #cecece;
  font-weight: bold;
`;
