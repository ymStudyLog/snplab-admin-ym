import * as React from "react";
import { useRecoilValue } from "recoil";
import { searchQuery } from "../../store/atom";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import { getApplicantsData, patchApplicantsById } from "../../api/api";
import { GrCheckbox, GrCheckboxSelected } from "react-icons/gr";
import { DataType } from "../../types/dataType";

type Props = {
  query: string;
};

const GetItem = (props: Props) => {
  const { query } = props;
  const search = useRecoilValue(searchQuery);
  const [clientData, setClientData] = React.useState<DataType[]>([]);

  React.useEffect(() => {
    getApplicantsData<DataType[]>(query, search).then((data) => {
      setClientData(data);
    });
  }, [query, search]);

  const handleClickCheckBtn = (id: number) => {
    setClientData(
      clientData.map((item) => {
        if (item.id === id) {
          patchApplicantsById(item.id, { pass: !item.pass });
          return { ...item, pass: !item.pass };
        } else return { ...item };
      })
    );
  };

  return (
    // <Table sx={{ minWidth: 650, height: "300px" }} aria-label="simple table" component={Paper}>
    //   <TableHead>
    //     <TableRow>
    //       <TableCell>Num.</TableCell>
    //       <TableCell align="center">지원날짜</TableCell>
    //       <TableCell align="center">지원자명</TableCell>
    //       <TableCell align="center">성별</TableCell>
    //       <TableCell align="center">생년월일</TableCell>
    //       <TableCell align="center">연락처</TableCell>
    //       <TableCell align="center">이메일</TableCell>
    //       <TableCell align="center">이용수단</TableCell>
    //       <TableCell align="center">거주지</TableCell>
    //       <TableCell align="center">당첨여부</TableCell>
    //     </TableRow>
    //   </TableHead>
    <TableBody>
      {clientData?.map((item: DataType, index: number) => (
        <TableRow key={item.id}>
          <TableCell>{index + 1}</TableCell>
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
    // </Table>
  );
};

export default GetItem;
