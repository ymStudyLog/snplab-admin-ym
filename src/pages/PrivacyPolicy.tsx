import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { PageTemplate } from "../styles/template";
import { MdArrowBackIos } from "react-icons/md";
import { introduction, mainContent } from "../asset/privacypolicy";

type Props = {};

const PrivacyPolicy = (props: Props) => {
  const url: string = window.location.href;

  return (
    <PageTemplate>
      <PrivacyContainer>
        <PrivacyHeader>
          <Link to="/form">
            <GoBackButton>
              <MdArrowBackIos />
            </GoBackButton>
          </Link>
          <Title>서비스 이용약관</Title>
        </PrivacyHeader>
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
        <PrivacyMain color="#9a9a9a">{introduction}</PrivacyMain>
        <PrivacyMain color="#636363">{mainContent}</PrivacyMain>
      </PrivacyContainer>
    </PageTemplate>
  );
};

export default PrivacyPolicy;

const PrivacyContainer = styled.div`
  max-width: 480px;
  text-align: center;
  border-left: 1px solid #d4d4d4;
  border-right: 1px solid #d4d4d4;
`;

const PrivacyHeader = styled.div`
  display: flex;
  padding: 10px;
  border-bottom: 1px solid #d4d4d4;
`;

const Title = styled.h1`
  padding: 10px;
`;

const GoBackButton = styled.button`
  border: none;
  background: none;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

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

const PrivacyMain = styled.div`
  white-space: pre-line;
  text-align: start;
  line-height: 20px;
  padding: 15px;
  color: ${(props) => props.color || "black"};
`;
