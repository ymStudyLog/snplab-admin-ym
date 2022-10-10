import styled from "styled-components";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

//TODO 페이지네이션 전혀 안되고 있음
const PaginationRounded = () => {
  return (
    <PaginationContainer>
      <Stack spacing={2}>
        <Pagination count={10} variant="outlined" shape="rounded" />
      </Stack>
    </PaginationContainer>
  );
};

export default PaginationRounded;

const PaginationContainer = styled.div`
  margin: 30px 0;
  width: 100%;
  display: flex;
  justify-content: center;
`;
