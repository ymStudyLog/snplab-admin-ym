import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { ApplyProps } from "../../types/Apply.type";


type Props = {
  item: ApplyProps;
};

const TableTest = ({ item }: Props) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>지원날짜</TableCell>
            <TableCell align="right">지원자명</TableCell>
            <TableCell align="right">성별</TableCell>
            <TableCell align="right">생년월일</TableCell>
            <TableCell align="right">연락처</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow
            key={item.name}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell >
              {item.submitdate}
            </TableCell>
            <TableCell align="right">{item.name}</TableCell>
            <TableCell align="right">{item.gender}</TableCell>
            <TableCell align="right">{item.birthday}</TableCell>
            <TableCell align="right">{item.contact}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default TableTest;
