import Search from '../components/admin/Search';
import CSV from '../components/admin/CSV';
import FullWidthTabs from '../components/admin/FullWidthTabs';
import PaginationRounded from '../components/admin/PaginationRounded';
import * as A from "../styles/Admin.styled";

const Admin = () => {
  return (
    <>
      <A.Header>
        <A.HeaderText>메인</A.HeaderText>
      </A.Header>
      <A.ContentsContainer>
        <A.Sidebar />
        <A.Contents>
          <A.ContentsTitle>
            <A.TitleText>AI 학습용 교통 데이터 수집을 위한 크라우드 워커 지원 현황</A.TitleText>
          </A.ContentsTitle>
          <A.SearchCSVContainer>
            <Search />
            <CSV />
          </A.SearchCSVContainer>
          <A.TabsContainer>
            <FullWidthTabs />
          </A.TabsContainer>
          <A.PaginationsContainer>
            <PaginationRounded />
          </A.PaginationsContainer>
        </A.Contents>
      </A.ContentsContainer>
    </>
  );
};

export default Admin;

