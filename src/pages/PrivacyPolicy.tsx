import styled from "styled-components";
import PrivacyTemplate from "../components/PrivacyTemplate";
import { PageTemplate } from "../styles/template";

type Props = {};

//TODO : 폼 -> 개인정보 페이지 이동시 스크롤 맨위로 
const PrivacyPolicy = (props: Props) => {
  const url: string = window.location.href;

  return (
    <PageTemplate>
      <PrivacyTemplate>
        {url.includes("/privacypolicy") && (
          <>
            <PrivacyTitleBold>개인(신용)정보</PrivacyTitleBold>
            <PrivacyTitle>처리방침에 대한 동의 안내</PrivacyTitle>
          </>
        )}
        {url.includes("/agreement") && (
          <>
            <PrivacyTitleBold>제3자</PrivacyTitleBold>
            <PrivacyTitle>정보제공에 대한 동의 안내</PrivacyTitle>
          </>
        )}
       </PrivacyTemplate>
    </PageTemplate>
  );
};

export default PrivacyPolicy;

const PrivacyTitle = styled.h1`
  text-align: start;
  font-size: 25px;
  margin-top: 8px;
  padding-left: 15px;
`;

const PrivacyTitleBold = styled(PrivacyTitle)`
  margin-top: 45px;
  font-weight: bold;
`;


