import React from "react";
import { CSVLink } from "react-csv";
import styled from "styled-components";
import { applyService, getApplicantsData } from "../../api/api";

type Props = {};
type TEMP = {
  id: number;
  name: string;
  gender: string;
  birthday: string;
  region: [string, string];
  contact: string;
  email: string;
  transportation: string[];
  agreement: boolean;
  pass: boolean;
  submitdate: string;
};

const CSV = (props: Props) => {
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
  const [temp, setTemp] = React.useState<TEMP[]>([]);
  React.useEffect(() => {
    getApplicantsData<TEMP[]>(applyService).then((data) => {
      setTemp(data);
    });
  }, []);
  return (
    <CSVLink data={temp} headers={headers}>
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
