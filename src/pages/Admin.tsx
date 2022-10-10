import styled from "styled-components";
import Search from "../components/admin/Search";
import CSV from "../components/admin/CSV";
import FullWidthTabs from "../components/admin/FullWidthTabs";
import { Header, Sidebar, Content } from "../layout/Admin.layout";

const Admin = () => {
  return (
    <Container>
      <Header>
        <span>메인</span>
      </Header>
      <Sidebar />
      <Content>
        <Title>AI 학습용 교통 데이터 수집을 위한 크라우드 워커 지원 현황</Title>
        <SearchCSVContainer>
          <Search />
          <CSV />
        </SearchCSVContainer>
        <FullWidthTabs />
      </Content>
    </Container>
  );
};

export default Admin;

const Container = styled.div`
  display: flex;
`;

const Title = styled.h1`
  font-size: 30px;
  font-weight: bold;
`;

const SearchCSVContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 30px 0;
`;
