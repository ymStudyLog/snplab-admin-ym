import React from "react";
import { useTheme } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import GetItem from "../admin/GetItem";
import PaginationRounded from "./PaginationRounded";
import Table from "@mui/material/Table";
import Paper from "@mui/material/Paper";
import TableHead from "@mui/material/TableHead";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

type TabPanelProps = {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
};

//TODO error : div 하위에 table 넣는거 안됨. table 하위에 div는 됨
const TabPanel = ({ children, value, index, ...other }: TabPanelProps) => {
  return (
    <>
      {value === index && (
        <Table
          sx={{ minWidth: 650, height: "300px" }}
          aria-label="simple table"
          component={Paper}
        >
          <TableHead>
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
          </TableHead>
          {children}
          <PaginationRounded />
        </Table>
      )}
    </>
  );
};

const QUERY_STRING = [
  "?submitdate_gte=2022. 7. 01.&submitdate_lte=2022. 7. 31.",
  "?submitdate_gte=2022. 8. 01.&submitdate_lte=2022. 8. 31.",
  "?submitdate_gte=2022. 9. 01.&submitdate_lte=2022. 9. 30.",
  "?submitdate_gte=2022. 10. 01.&submitdate_lte=2022. 10. 31.",
];

const FullWidthTabs = () => {
  const theme = useTheme();
  const [value, setValue] = React.useState<number>(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ bgcolor: "var(--color-tabs-background)", width: "100%" }}>
      <Tabs
        sx={{
          bgcolor: "var(--color-tabs-background)",
          width: "100%",
          color: "var(--color-black)",
        }}
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="inherit"
        variant="fullWidth"
        aria-label="full width tabs example"
      >
        {/** Tab 중복 코드 삭제하는 방법 모색하기 */}
        <Tab label="1차 모집" />
        <Tab label="2차 모집" />
        <Tab label="3차 모집" />
        <Tab label="4차 모집" />
      </Tabs>
      <Box sx={{ p: 3 }}>
        <TabPanel value={value} index={value} dir={theme.direction}>
          <GetItem query={QUERY_STRING[value]} />
        </TabPanel>
      </Box>
    </Box>
  );
};

export default FullWidthTabs;
