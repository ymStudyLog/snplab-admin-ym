import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  applyService,
  getApplicantsData,
  patchApplicantsById,
} from "../../api/api";

import { ApplyProps } from "../../types/Apply.type";
import CSV from "./CSV";
import { GrCheckbox, GrCheckboxSelected } from "react-icons/gr";

type Props = {};

const GetItem = (props: Props) => {
  const [clientData, setClientData] = React.useState<ApplyProps[]>([]);
  React.useEffect(() => {
    getApplicantsData<ApplyProps[]>(applyService).then((data) => {
      setClientData(data);
    });
  }, []);
  const handleClickCheckBtn = (id: number | undefined) => {
    setClientData(
      clientData.map((item) => {
        if (item.id === id) {
          patchApplicantsById(applyService, item.id!, { pass: !item.pass });
          return { ...item, pass: !item.pass };
        } else return { ...item };
      })
    );
  };
  return (
    <div>
      <CSV />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Num.</TableCell>
              <TableCell align="center">지원날짜</TableCell>
              <TableCell align="center">지원자명</TableCell>
              <TableCell align="center">성별</TableCell>
              <TableCell align="center">생년월일</TableCell>
              <TableCell align="center">연락처</TableCell>
              <TableCell align="center">이메일</TableCell>
              <TableCell align="center">이용수단</TableCell>
              <TableCell align="center">거주지</TableCell>
              <TableCell align="center">당첨여부</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {clientData?.map((item: ApplyProps) => (
              <TableRow key={item.id}>
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.submitdate}</TableCell>
                <TableCell align="center">{item.name}</TableCell>
                <TableCell align="center">{item.gender}</TableCell>
                <TableCell align="center">{item.birthday}</TableCell>
                <TableCell align="center">{item.contact}</TableCell>
                <TableCell align="center">{item.email}</TableCell>
                <TableCell align="center">{item.transportation}</TableCell>
                <TableCell align="center">{item.region}</TableCell>
                <TableCell align="center">
                  <button
                    onClick={() => {
                      handleClickCheckBtn(item.id);
                    }}
                  >
                    {item.pass ? <GrCheckboxSelected /> : <GrCheckbox />}
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default GetItem;
